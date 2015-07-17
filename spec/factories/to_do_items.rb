# == Schema Information
#
# Table name: to_do_items
#
#  id            :integer          not null, primary key
#  to_do_list_id :integer          not null
#  order         :integer          not null
#  description   :string           not null
#  completed     :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :to_do_item do
    to_do_list_id 1
    order 0
    description "A new item"
    completed true
  end

end
