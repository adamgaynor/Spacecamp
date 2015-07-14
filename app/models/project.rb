# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base

  validates :owner_id, :title, presence: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id
  )
end