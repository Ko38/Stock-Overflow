class Api::UsersController < ApplicationController

  def index 
    @users = User.all 
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show 
    else 
      # flash[:errors] = @user.errors.full_messages
      render json: [@user.errors.full_messages], status: 400   
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
