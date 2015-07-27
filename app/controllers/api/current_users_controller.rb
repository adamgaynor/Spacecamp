class Api::CurrentUsersController < ApplicationController
  def show
    @user = current_user
  end
end
