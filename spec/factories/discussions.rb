# == Schema Information
#
# Table name: discussions
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  author_id  :integer          not null
#  title      :string           not null
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :discussion do
    
  end

end
