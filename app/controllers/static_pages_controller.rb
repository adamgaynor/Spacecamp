class StaticPagesController < ApplicationController
  before_action :require_login!

  def root
    redirect_to new_session_url unless logged_in?
  end
end
