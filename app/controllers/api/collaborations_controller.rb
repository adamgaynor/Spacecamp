class Api::CollaborationsController < ApplicationController

  def create

  end

  private

  def collaboration_params
    params.require(:collaboration).permit(:project_id, :user_id)
  end
end
