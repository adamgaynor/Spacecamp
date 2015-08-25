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
		@discussion.summary = ''
		@discussion.summary = generate_summary(@discussion.content) unless @discussion.content.nil?

		if @discussion.save
			render json: @discussion
		else
			render json: @discussion.errors.full_messages, status: :unprocessable_entity
		end
	end

	def show
		@discussion = current_user.discussions.find(params[:id])
		render :show
	end

	def destroy
		@discussion = current_user.discussions.find(params[:id])
		if @discussion.destroy
			render json: @discussion
		else
			render json: @discussion.errors.full_messages, status: :unprocessable_entity
		end
	end

	private

	def discussion_params
		params.require(:discussion).permit(:title, :content, :project_id)
	end

	def generate_summary(content)
		summary = content.slice(0, 130)
		if summary.length == 130
			summary += "..."
		end
		summary
	end
end
