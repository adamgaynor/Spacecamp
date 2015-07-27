json.extract! @discussion, :id, :title, :content, :author_id
json.comments do
	json.array! @discussion.comments.includes(:author) do |comment|
		json.is_author comment.author.id == current_user.id
		json.author_fname comment.author.fname
		json.author_lname comment.author.lname
		json.extract! comment, :content, :updated_at
	end
end
