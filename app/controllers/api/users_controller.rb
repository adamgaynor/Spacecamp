class UsersController < ApplicationController
  def index
    project = current_user.projects.find(params[:project_id]);
    @users = project.collaborators
  end
end
