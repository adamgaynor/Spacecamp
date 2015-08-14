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
    @project = current_user.owned_projects.new(project_params)
    if @project.save
      create_owner_collaboration(@project.id, current_user.id)
      render json: @project
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @project = current_user.owned_projects.find(params[:id])
    if @project.destroy
      render json: @project
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

  def create_owner_collaboration(project_id, user_id)
    @collaboration = Collaboration.new(
      project_id: project_id,
      user_id: user_id
    )
    @collaboration.save
  end

end
