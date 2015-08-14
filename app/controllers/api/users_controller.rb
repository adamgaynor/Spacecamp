class Api::UsersController < ApplicationController
  wrap_parameters false

  def index
    @users = User.all
  end

  def show
    @user = current_user
  end

  def update
    @user = current_user
    user_params2 = user_params
    user_params2.delete("avatar") if user_params2["avatar"] == "undefined"
    

    # user_params
    if @user.update(user_params2)
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :avatar)
  end
end
