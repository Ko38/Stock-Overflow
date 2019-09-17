
# json.extract! @question, :id, :title, :body, :author_id, :answers, :created_at, :updated_at, :upvotes, :downvotes
json.id @question.id
json.title @question.title
json.body @question.body
json.author_id @question.author_id
#json.answers @question.answers
json.answers do 
  json.array! @question.answers, :id, :question_id, :body, :author_id, :upvotes, :downvotes
end
json.created_at @question.created_at
json.updated_at @question.updated_at
json.upvotes @question.upvotes
json.downvotes @question.downvotes
json.view_count @question.views.length