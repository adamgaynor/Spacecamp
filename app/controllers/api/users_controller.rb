class Api::UsersController < ApiController

  def show
    @user = current_user
    render json: @user
  end

end
