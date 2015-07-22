# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  email               :string           not null
#  fname               :string           not null
#  lname               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :avatar, default_url: "appacademylogo.png", styles: {
    medium: "100x100>",
    thumb: "60x60>"
  }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token!

  has_many(
    :collaborations,
    class_name: 'Collaboration',
    foreign_key: :user_id
  )

  has_many(
    :projects,
    through: :collaborations,
    source: :project
  )

  has_many(
    :owned_projects,
    class_name: "Project",
    foreign_key: :owner_id
  )

  has_many(
    :owned_project_collaborations,
    through: :owned_projects,
    source: :collaborations
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

  has_many(
    :authored_comments,
    class_name: "Comment",
    foreign_key: :author_id
  )

  has_many(
    :discussions,
    through: :projects,
    source: :discussions
  )

  has_many(
    :assigned_to_do_items,
    class_name: 'ToDoItem',
    foreign_key: :assigned_user_id
  )

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid])

    unless user
      user = User.create!(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid],
            fname: auth_hash[:info][:name].split.first,
            lname: auth_hash[:info][:name].split.last,
            email: auth_hash[:info][:email],
            password: SecureRandom::urlsafe_base64)
    end

    user
  end

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
