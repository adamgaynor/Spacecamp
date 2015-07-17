require 'rails_helper'

RSpec.describe Comment, type: :model do
  context 'is valid' do
    specify "when all attributes are present" do
      expect(FactoryGirl.build(:comment)).to be_valid
    end
    specify "when there is no content" do
      expect(FactoryGirl.build(:comment, content: '')).to be_valid
    end
  end

  context 'is invalid' do
    specify 'when content is blank' do
      expect(FactoryGirl.build(:comment, content: '')).not_to be_valid
    end
    specify 'when author_id is blank' do
      expect(FactoryGirl.build(:comment, author_id: '')).not_to be_valid
    end
    specify 'when discussion_id is blank' do
      expect(FactoryGirl.build(:comment, discussion_id: '')).not_to be_valid
    end
  end

  describe 'associations' do
    it { should belong_to(:discussion) }
  end
end
