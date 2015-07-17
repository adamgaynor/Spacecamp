class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
    render :index
  end

  def show
    @project = current_user.projects.find(params[:id])
    render :show
  end

  def create
    @project = current_user.projects.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
