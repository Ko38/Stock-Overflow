class Api::SessionsController < ApplicationController
  def create
    username_or_email = params[:user][:usernameOrEmail]
    password = params[:user][:password]

    @user = User.find_by_credentials(username_or_email, password)

    if @user
      login(@user)
      render :show 
    else
      render json: ["Wrong credintials"], status: 404         
    end
  end

  def destroy

    if logged_in?
      logout
      render json: {}
    else
      render json: ["some error happend"], status: 404
    end
  end
end
