# == Schema Information
#
# Table name: to_do_items
#
#  id            :integer          not null, primary key
#  to_do_list_id :integer          not null
#  order         :integer          not null
#  description   :string           not null
#  completed     :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe ToDoItem, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
