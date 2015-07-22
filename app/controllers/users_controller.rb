class UsersController < ApplicationController

  skip_before_action :require_login!, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = "Invalid user information"
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    @projects = Project.where(owner_id: @user.id)

  end

  private

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :avatar)
  end
end
