json.extract! @project, :id, :title, :description
json.toDoLists do
  json.array! @project.to_do_lists do |list|
    json.extract! list, :id, :title, :description, :created_at
    json.toDoItems do
      json.array! list.to_do_items do |item|
        json.extract! item, :description, :order, :to_do_list_id, :completed
      end
    end
  end
end
