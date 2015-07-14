require 'rails_helper'

RSpec.describe Project, type: :model do
  it "is valid when required attributes are present" do
    expect(FactoryGirl.build(:project)).to be_valid
  end

  context 'is invalid' do
    specify 'when title is blank' do
      expect(FactoryGirl.build(:project, title: '')).not_to be_valid
    end
    specify 'when owner_id is blank' do
      expect(FactoryGirl.build(:project, owner_id: '')).not_to be_valid
    end
  end
end
