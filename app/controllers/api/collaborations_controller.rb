class Api::CollaborationsController < ApplicationController

  def create
    project = current_user.owned_projects.find(params[:project_id])
    @collaboration = project.collaborations.new(collaboration_params)
    if @collaboration.save
      render json: @collaboration
    else
      render json: @collaboration.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @collaboration =
      current_user.owned_project_collaborations.find(params[:id])
    @collaboration.destroy
    render json: @collaboration
  end

  private

  def collaboration_params
    params.require(:collaboration).permit(:user_id)
  end
end
