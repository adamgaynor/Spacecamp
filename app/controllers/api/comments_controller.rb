class Api::CommentsController < ApplicationController
	def create
		current_discussion =
			current_user.discussions.find(params[:comment][:discussion_id])
		@comment = current_user.authored_comments.new(comment_params)
		if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
	end


	private

	def comment_params
		params.require(:comment).permit(:content, :discussion_id)
	end
end
