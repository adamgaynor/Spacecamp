require 'BCrypt'

FactoryGirl.define do
  factory :user do
    email 'john_smith@gmail.com'
    fname 'John'
    lname 'Smith'
    password 'abcdef'
  end

end
