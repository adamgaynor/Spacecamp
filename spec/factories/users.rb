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
#  provider            :string
#  uid                 :string
#

FactoryGirl.define do
  factory :user do
    email 'john_smith@gmail.com'
    fname 'John'
    lname 'Smith'
    password 'abcdef'
  end

end
