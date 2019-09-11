json.array! @questions do |question|
  json.id question.id
  json.title question.title
  json.author_id question.author_id
  json.body question.body
  json.created_at question.created_at
  json.updated_at question.updated_at
end