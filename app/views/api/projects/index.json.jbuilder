json.array! @projects do |project|
  json.extract! project, :id, :title, :description, :owner_id
  json.current_user_id current_user.id
end
