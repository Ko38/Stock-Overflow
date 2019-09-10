class Api::UsersController < ApplicationController
   
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show 
    else 
      flash[:errors] = @user.errors.full_messages
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
