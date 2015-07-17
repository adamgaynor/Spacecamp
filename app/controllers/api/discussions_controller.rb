class Api::DiscussionsController < ApplicationController
	def index
    @project = current_user.projects.find(params[:project_id])
    @discussions = @project.discussions
    render :index
  end

	def create
		current_project =
			current_user.projects.find(params[:discussion][:project_id])
		@discussion = current_project.discussions.new(discussion_params)
		@discussion.author_id = current_user.id
		if @discussion.save
			render json: @discussion
		else
			render json: @discussion.errors.full_messages, status: :unprocessable_entity
		end
	end

	private

	def discussion_params
		params.require(:discussion).permit(:title, :content, :project_id)
	end
end
