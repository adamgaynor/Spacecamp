# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :project do
    title 'The first project'
    description 'Some things about the project'
    owner_id 1
  end

end
