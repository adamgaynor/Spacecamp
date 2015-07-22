class Api::SessionsController < ApplicationController

  def show
    @user = current_user
  end

end
