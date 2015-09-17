json.array! @users do |user|
  json.extract! user, :id, :fname, :lname, :email, :avatar
  projects = user.projects.pluck(:title).join(", ")
  json.projects projects
end
