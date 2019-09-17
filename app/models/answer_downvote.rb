class AnswerDownvote < ApplicationRecord
  validates :answer_id, uniqueness: { scope: :user_id }
  validates :answer_id, :user_id, presence: true

  belongs_to(:answer, foreign_key: :answer_id, class_name: :Answer)
  belongs_to(:user, foreign_key: :user_id, class_name: :User)
end
