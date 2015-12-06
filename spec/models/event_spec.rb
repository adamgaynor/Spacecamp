# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  title       :string           not null
#  description :text
#  start_time  :datetime         not null
#  end_time    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
