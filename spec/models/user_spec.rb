require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid when required attributes are present" do
    expect(FactoryGirl.build(:user)).to be_valid
  end

  context 'is invalid' do
    specify 'when email is blank' do
      expect(FactoryGirl.build(:user, email: '')).not_to be_valid
    end
    specify 'when fname is blank' do
      expect(FactoryGirl.build(:user, fname: '')).not_to be_valid
    end
    specify 'when lname is blank' do
      expect(FactoryGirl.build(:user, lname: '')).not_to be_valid
    end
  end
end
