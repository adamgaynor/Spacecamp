json.array! @projects do |project|
  json.extract! project, :id, :title, :description
  json.current_user_id current_user.id
end
