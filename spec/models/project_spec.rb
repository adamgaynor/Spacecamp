# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

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

  describe 'associations' do
    it { should belong_to(:owner) }
    it { should have_many(:to_do_lists) }
    it { should have_many(:discussions) }
    it { should have_many(:collaborations) }
    it { should have_many(:collaborators) }
  end
end
