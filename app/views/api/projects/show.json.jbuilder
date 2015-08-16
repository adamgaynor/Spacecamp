json.extract! @project, :id, :title, :description, :owner_id
json.current_user_id current_user.id
json.toDoLists do
  json.array! @project.to_do_lists.includes(:to_do_items) do |list|
    json.extract! list, :id, :title, :description, :created_at
    json.toDoItems do
      json.array! list.to_do_items do |item|
        json.extract! item, :id, :description, :order, :to_do_list_id, :completed, :assigned_user_id
      end
    end
  end
end

json.discussions do
  json.array! @project.discussions.includes(:author) do |discussion|
    json.extract! discussion, :id, :title, :summary, :author_id, :updated_at
    json.author_name discussion.author.fname
    json.author_avatar discussion.author.avatar
    #json.extract! discussion.author, :fname
  end

end

json.collaborations do
  json.array! @project.collaborations do |collaboration|
    json.extract! collaboration, :id, :project_id, :user_id
  end
end


json.collaborators do
  json.array! @project.collaborators do |collaborator|
    json.extract! collaborator, :id, :fname, :lname
  end
end
