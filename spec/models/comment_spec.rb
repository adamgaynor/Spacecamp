# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  discussion_id :integer          not null
#  content       :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  context 'is valid' do
    specify "when all attributes are present" do
      expect(FactoryGirl.build(:comment)).to be_valid
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
    it { should belong_to(:author) }
  end
end
