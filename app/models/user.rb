# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token!

  has_many(
    :projects,
    class_name: "Project",
    foreign_key: :owner_id
  )

  has_many(
    :to_do_lists,
    through: :projects,
    source: :to_do_lists
  )

  has_many(
    :to_do_items,
    through: :projects,
    source: :to_do_items
  )

  has_many(
    :authored_discussions,
    class_name: "Discussion",
    foreign_key: :author_id
  )

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return unless user

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_token!
    self.update(session_token: User.generate_session_token)
    self.session_token
  end


  private

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end
end
