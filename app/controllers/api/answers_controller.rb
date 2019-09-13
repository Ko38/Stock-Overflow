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

  def update 
    answer_id = params[:id]
    body = user_params[:body]

    @answer = Answer.find(answer_id)
    if @answer 
      @answer.body = body
    end
    
    if @answer.save && @answer.author_id == current_user.id
      render :show
    else
      render json: ["Something's wrong!"], status: 404
    end
  end

  def destroy 

    begin
      @answer = Answer.find(params[:id])
      if @answer.author_id != current_user.id
        raise
      end
      @answer.destroy
      render :show
    rescue
      render json: "Answer doesn't exist", status: 422
    end
  end

  private

  def user_params
    params.require(:answer).permit(:body, :question_id, :answer_id)
  end
end
