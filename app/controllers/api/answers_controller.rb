class Api::AnswersController < ApplicationController
  def create 
    author_id = current_user.id
    question_id = user_params[:question_id]
    body = user_params[:body]

    @answer = Answer.new(body: body, author_id: author_id, question_id: question_id)

    if @answer.save 
      render :show
    else
      render json: ["Something's wrong!"], status: 404         
    end
  end

  private

  def user_params
    params.require(:answer).permit(:body, :question_id)
  end
end
