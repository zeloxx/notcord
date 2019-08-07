class Api::UsersController < ApplicationController

  def index
    channel = Channel.find_by(id: user_params[:channel_id])
    @users = channel.users
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :channel_id)
  end
end
