class Question < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to(:author, foreign_key: :author_id, class_name: :User)
  has_many(:answers, foreign_key: :question_id, class_name: :Answer)
  has_many(:upvotes, foreign_key: :question_id, class_name: :QuestionUpvote)
  has_many(:downvotes, foreign_key: :question_id, class_name: :QuestionDownvote)
end