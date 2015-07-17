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

class Discussion < ActiveRecord::Base

	validates :project_id, :author_id, :title, presence: true

	belongs_to(
		:author,
		class_name: "User",
		foreign_key: :author_id
	)

	belongs_to :project

end
