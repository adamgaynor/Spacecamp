# == Schema Information
#
# Table name: collaborations
#
#  id              :integer          not null, primary key
#  project_id      :integer
#  collaborator_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Collaboration < ActiveRecord::Base
end
