# == Schema Information
#
# Table name: to_do_lists
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :to_do_list do
    
  end

end
