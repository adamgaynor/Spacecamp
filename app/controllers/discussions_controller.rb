class DiscussionsController < ApplicationController
  def index
    @project = current_user.projects.find(params[:project_id])
    @project_id = @project.id
    @discussions = @project.discussions
    render :index
  end

  def show
    @discussion = current_user.discussions.find(params[:id])
		render :show
  end
end
