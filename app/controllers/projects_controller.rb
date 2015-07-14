class ProjectsController < ApplicationController

  def index
    @projects = Project.where(owner_id: current_user.id)
  end

  def show
    @project = Project.find(params[:id])
    if @project.owner_id == current_user.id
      render :show
    else
      redirect_to user_url(current_user)
    end
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    if @project.save
      redirect_to project_url(@project)
    else
      flash.now[:errors] = "Invalid project information"
      render :new
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
