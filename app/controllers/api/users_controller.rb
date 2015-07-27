class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :avatar)
  end
end
