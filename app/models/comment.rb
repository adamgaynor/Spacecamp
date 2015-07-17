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

class Comment < ActiveRecord::Base

	validates :author_id, :discussion_id, :content, presence: true

	has_many :comments

	belongs_to :discussion

	belongs_to(
		:author,
		class_name: 'User',
		foreign_key: :author_id
	)

end
