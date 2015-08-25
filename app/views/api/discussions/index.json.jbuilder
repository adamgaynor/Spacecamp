# json.array! @discussions, :id, :title, :content, :author_id
# json.author_avatar @discussion.author.avatar


json.discussions do
  json.array! @discussions.includes(:author) do |discussion|
    json.extract! discussion, :id, :title, :summary, :author_id, :updated_at
    json.author_name discussion.author.fname
    json.author_avatar discussion.author.avatar
    #json.extract! discussion.author, :fname
  end

end
