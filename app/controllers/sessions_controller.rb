class SessionsController < ApplicationController

  skip_before_action :require_login!, only: [:new, :create]

  def new
  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = "Invalid login details"
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  def omniauth
    @user = User.find_or_create_by_auth_hash(auth_hash)
    if @user
      login!(@user)
      redirect_to root_url
    end
  end
  
  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
