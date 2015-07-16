# == Schema Information
#
# Table name: to_do_lists
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe ToDoList, type: :model do
  context 'is valid' do
    specify "when all attributes are present" do
      expect(FactoryGirl.build(:to_do_list)).to be_valid
    end
    specify "when there is no description" do
      expect(FactoryGirl.build(:to_do_list, description: '')).to be_valid
    end
  end

  context 'is invalid' do
    specify 'when title is blank' do
      expect(FactoryGirl.build(:to_do_list, title: '')).not_to be_valid
    end
    specify 'when owner_id is blank' do
      expect(FactoryGirl.build(:to_do_list, project_id: '')).not_to be_valid
    end
  end

  describe 'associations' do
    it { should belong_to(:project) }
    it { should have_many(:to_do_items) }
  end
end
