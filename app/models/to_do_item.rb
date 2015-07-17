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

class ToDoItem < ActiveRecord::Base

  validates :to_do_list_id, :order, :description, presence: true
  validates :order, uniqueness: { scope: :to_do_list_id,
    message: "can only have one item in each position per list" }

  belongs_to :to_do_list
end
