class Api::QuestionsController < ApplicationController
  def index 
    @questions = Question.all

    render :index
  end

  def create 
    author_id = current_user.id 
    title = user_params[:title]
    body = user_params[:body]

    @question = Question.new(title: title, body: body, author_id: author_id)

    if @question.save 
      render :show
    else
      render json: ["Something's wrong!"], status: 404         
    end
  end

  private

  def user_params
    params.require(:question).permit(:title, :body)
  end
end
