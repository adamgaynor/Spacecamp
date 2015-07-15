json.extract! @project, :id, :title, :description
json.toDoLists do
  json.array! @project.to_do_lists do |list|
    json.extract! list, :id, :title, :description, :created_at
  end
end
