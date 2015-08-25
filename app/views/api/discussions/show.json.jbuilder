json.extract! @discussion, :id, :title, :content, :author_id
json.author_name @discussion.author.fname + " " + @discussion.author.lname
json.author_avatar @discussion.author.avatar
json.comments do
	json.array! @discussion.comments.includes(:author) do |comment|
		json.is_author comment.author.id == current_user.id
		json.author_fname comment.author.fname
		json.author_lname comment.author.lname
		json.author_avatar comment.author.avatar
		json.extract! comment, :id, :content, :updated_at
	end
end
