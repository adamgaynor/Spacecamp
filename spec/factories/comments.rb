# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  discussion_id :integer          not null
#  content       :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :comment do
    author_id 1
    discussion_id 1
    content 'This discussion is good'
  end

end
