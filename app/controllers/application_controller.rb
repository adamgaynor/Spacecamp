class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :require_login!

  helper_method :current_user, :logged_in?

  private

  def login!(user)
    session[:session_token] = user.reset_token!
  end

  def logout!
    current_user.reset_token!
    session[:session_token] = nil
  end

  def current_user
    return if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login!
    redirect_to new_session_url unless logged_in?
  end
end
