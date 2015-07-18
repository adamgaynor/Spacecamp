# == Schema Information
#
# Table name: collaborations
#
#  id              :integer          not null, primary key
#  project_id      :integer
#  collaborator_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :collaboration do
    project_id 1
    user_id 1
  end

end
