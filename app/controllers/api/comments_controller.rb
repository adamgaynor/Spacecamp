class Api::CommentsController < ApplicationController
	def create
		current_discussion =
			current_user.discussions.find(params[:comment][:discussion_id])
		@comment = current_user.authored_comments.new(comment_params)
		if @comment.save
			summary = generate_summary(@comment.content)
			@comment.discussion.update(summary: summary)
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
	end


	private

	def comment_params
		params.require(:comment).permit(:content, :discussion_id)
	end

	def generate_summary(content)
		summary = content.slice(0, 130)
		if summary.length == 130
			summary += "..."
		end
		summary
	end

end
