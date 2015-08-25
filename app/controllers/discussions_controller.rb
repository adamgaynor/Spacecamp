class DiscussionsController < ApplicationController
  def index
    @project = current_user.projects.find(params[:project_id])
    @project_id = @project.id
    @discussions = @project.discussions
    render :index
  end
end
