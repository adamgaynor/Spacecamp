# == Schema Information
#
# Table name: collaborations
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collaboration < ActiveRecord::Base

  validates :user_id, :project_id, presence: true

  belongs_to(
    :user,
    class_name: 'User',
    foreign_key: :user_id
  )

  belongs_to :project

end
