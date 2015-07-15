class Api::ToDoListsController < ApplicationController
  def index
    @project = current_user.projects.find(params[:project_id])
    @lists = @project.to_do_lists
    render :index
  end

  def show
    @list = current_user.to_do_lists.find(params[:id])
    render :show
  end

  def create
    #get project_id in the form
    current_project = current_user.projects.find(params[:project_id])
    @list = current_project.to_do_lists.new(project_params)
    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
