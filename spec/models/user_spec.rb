# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#


# run: ---rake db:test:prepare---

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

    specify 'when password is less than 6 characters' do
      expect(FactoryGirl.build(:user, password: '')).not_to be_valid
    end
  end

  describe 'associations' do
    it { should have_many(:projects) }
    it { should have_many(:owned_projects) }
    it { should have_many(:owned_project_collaborations) }
    it { should have_many(:authored_discussions) }
    it { should have_many(:to_do_lists) }
    it { should have_many(:to_do_items) }
    it { should have_many(:authored_comments) }
    it { should have_many(:collaborations) }
    it { should have_many(:assigned_to_do_items) }
  end
end
