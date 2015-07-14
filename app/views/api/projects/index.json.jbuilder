json.extract! @user, :id, :email, :fname, :lname
json.projects do
  json.array! @user.projects do |project|
    json.extract! project, :title, :description
  end
end
