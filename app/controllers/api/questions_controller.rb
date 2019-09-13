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
    question_id = params[:id]
    title = user_params[:title]
    body = user_params[:body]

    @question = Question.find(question_id)
    if @question 
      @question.body = body
      @question.title = title
    end
    
    if @question.save && @question.author_id == @question.id
      render :show
    else
      render json: ["Something's wrong!"], status: 404
    end
  end

  def destroy 
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


  private

  def user_params
    params.require(:question).permit(:title, :body)
  end
end
