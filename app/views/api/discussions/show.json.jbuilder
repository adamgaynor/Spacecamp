json.extract! @discussion, :id, :title, :content, :author_id
# json.comments do
# 	json.array! @discussion.comments do |comment|
# 		json.extract! comment, :content, :updated_at
# 		json.author_fname comment.author.fname
# 		json.author_lname comment.author.lname
# 	end
# end
