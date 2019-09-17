class Api::QuestionsController < ApplicationController
  def index 
    @questions = Question.all
    
    render :index
  end

  def create 
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
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

  def show
    id = params[:id]

    @question = Question.find(id)
    
    if @question
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
    question_id = params[:id]
    title = user_params[:title]
    body = user_params[:body]

    @question = Question.find(question_id)
    if @question 
      @question.body = body
      @question.title = title
    end

    if @question.save && @question.author_id == current_user.id
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
      @question = Question.find(params[:id])
      if @question.author_id != current_user.id
        raise
      end
      @question.destroy
      render :show
    rescue
      render json: "Question doesn't exist", status: 422
    end
  end
  
  def upvote 
    if !logged_in?
      render json: ["You need to login!"], status: 404
      return 
    end
    question_id = params[:id]
    user_id = current_user.id
    
    @question = Question.find(question_id)
    upvote = QuestionUpvote.find_by(question_id: question_id, user_id: user_id) 
    if upvote
      upvote.destroy
      render :show
      return
    end
    downvote = QuestionDownvote.find_by(question_id: question_id, user_id: user_id)
    if downvote
      downvote.destroy
    end

    upvote = QuestionUpvote.new(question_id: question_id, user_id: user_id)
    
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
    question_id = params[:id]
    user_id = current_user.id
    @question = Question.find(question_id)

    downvote = QuestionDownvote.find_by(question_id: question_id, user_id: user_id) 
    if downvote
      downvote.destroy
      render :show
      return
    end

    upvote = QuestionUpvote.find_by(question_id: question_id, user_id: user_id)
    if upvote 
      upvote.destroy
    end

    downvote = QuestionDownvote.new(question_id: question_id, user_id: user_id)
    if downvote.save 
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
