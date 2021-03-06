# == Schema Information
#
# Table name: collaborations
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Collaboration, type: :model do
  it "is valid when required attributes are present" do
    expect(FactoryGirl.build(:collaboration)).to be_valid
  end

  context 'is invalid' do
    specify 'when project_id is blank' do
      expect(FactoryGirl.build(:collaboration, project_id: '')).not_to be_valid
    end
    specify 'when user_id is blank' do
      expect(FactoryGirl.build(:collaboration, user_id: '')).not_to be_valid
    end
  end

  describe 'associations' do
    it { should belong_to(:project) }
    it { should belong_to(:user) }
  end
end
