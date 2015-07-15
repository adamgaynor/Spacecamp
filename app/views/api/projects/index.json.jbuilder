#json.extract! @user, :id, :email, :fname, :lname
#json.projects do
  json.array! @projects do |project|
    json.extract! project, :id, :title, :description
  end
#end
