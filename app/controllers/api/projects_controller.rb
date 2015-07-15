class Api::ProjectsController < ApplicationController
  def index
    @user = current_user
    #@projects = current_user.projects
    render :index
  end

  def show
    @project = current_user.projects.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
