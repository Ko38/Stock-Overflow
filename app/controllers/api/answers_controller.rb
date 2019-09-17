class Api::AnswersController < ApplicationController
  def create 
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
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
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
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
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
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
  
  def upvote 
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
    answer_id = params[:id]
    user_id = current_user.id
    
    @answer = Answer.find(answer_id)
    upvote = AnswerUpvote.find_by(answer_id: answer_id, user_id: user_id) 
    if upvote
      upvote.destroy
      render :show
      return
    end
    downvote = AnswerDownvote.find_by(answer_id: answer_id, user_id: user_id)
    if downvote
      downvote.destroy
    end

    upvote = AnswerUpvote.new(answer_id: answer_id, user_id: user_id)
    
    if upvote.save 
      render :show
    else
      render json: ["Something's wrong!"], status: 404
    end
  end

  def downvote 
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
    answer_id = params[:id]
    user_id = current_user.id
    @answer = Answer.find(answer_id)

    downvote = AnswerDownvote.find_by(answer_id: answer_id, user_id: user_id) 
    if downvote
      downvote.destroy
      render :show
      return
    end

    upvote = AnswerUpvote.find_by(answer_id: answer_id, user_id: user_id)
    if upvote 
      upvote.destroy
    end

    downvote = AnswerDownvote.new(answer_id: answer_id, user_id: user_id)
    if downvote.save 
      render :show
    else
      render json: ["Something's wrong!"], status: 404
    end
  end

  private

  def user_params
    params.require(:answer).permit(:body, :question_id, :answer_id)
  end
end
