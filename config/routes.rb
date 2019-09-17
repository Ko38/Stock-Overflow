Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :sessions
    resources :questions
    resources :answers
    post "questions/:id/upvote", to: "questions#upvote"
    post "questions/:id/downvote", to: "questions#downvote"
    post "answers/:id/upvote", to: "answers#upvote"
    post "answers/:id/downvote", to: "answers#downvote"
  end
  
end
