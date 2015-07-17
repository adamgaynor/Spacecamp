class Api::DiscussionsController < ApplicationController
	def index
    @project = current_user.projects.find(params[:project_id])
    @discussions = @project.discussions
    render :index
  end
end
