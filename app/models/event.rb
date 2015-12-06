# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  start      :datetime         not null
#  end        :datetime         not null
#  color      :string           not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ActiveRecord::Base

  validates :project_id, :title, :color, :start, :end, presence: true

  belongs_to :project
end
