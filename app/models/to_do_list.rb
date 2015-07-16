# == Schema Information
#
# Table name: to_do_lists
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ToDoList < ActiveRecord::Base

  validates :project_id, :title, presence: true

  belongs_to :project

  has_many :to_do_items

end
