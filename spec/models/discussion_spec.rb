# == Schema Information
#
# Table name: discussions
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  author_id  :integer          not null
#  title      :string           not null
#  content    :text
#  summary    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Discussion, type: :model do
  context 'is valid' do
    specify "when all attributes are present" do
      expect(FactoryGirl.build(:discussion)).to be_valid
    end
    specify "when there is no content" do
      expect(FactoryGirl.build(:discussion, content: '')).to be_valid
    end
  end

  context 'is invalid' do
    specify 'when title is blank' do
      expect(FactoryGirl.build(:discussion, title: '')).not_to be_valid
    end
    specify 'when author_id is blank' do
      expect(FactoryGirl.build(:discussion, author_id: '')).not_to be_valid
    end
    specify 'when project_id is blank' do
      expect(FactoryGirl.build(:discussion, project_id: '')).not_to be_valid
    end
  end

  describe 'associations' do
    it { should belong_to(:project) }
    it { should have_many(:comments) }
  end
end
