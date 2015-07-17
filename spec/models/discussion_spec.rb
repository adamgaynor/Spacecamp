# == Schema Information
#
# Table name: discussions
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  author_id  :integer          not null
#  title      :string           not null
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Discussion, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
