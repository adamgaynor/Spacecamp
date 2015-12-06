class Api::ProjectsController < ApplicationController

  def index
    @events = current_user.events
    render json: @events
  end

  def show
    @event = current_user.events.find(params[:id])
    render json: @event
  end

end
