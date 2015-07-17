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

require 'rails_helper'

RSpec.describe ToDoItem, type: :model do
  context 'is valid' do
    specify "when all attributes are present" do
      expect(FactoryGirl.build(:to_do_item)).to be_valid
    end
    specify "when not completed" do
      expect(FactoryGirl.build(:to_do_item, completed: false)).to be_valid
    end
    specify "when completed" do
      expect(FactoryGirl.build(:to_do_item, completed: true)).to be_valid
    end
  end

  context 'is invalid' do
    specify 'when description is blank' do
      expect(FactoryGirl.build(:to_do_item, description: '')).not_to be_valid
    end
    specify 'when todo list id is blank' do
      expect(FactoryGirl.build(:to_do_item, to_do_list_id: '')).not_to be_valid
    end
  end

  describe 'associations' do
    it { should belong_to(:to_do_list) }
  end
end
