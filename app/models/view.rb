class View < ApplicationRecord
  validates :question_id, uniqueness: { scope: :user_id }
  validates :question_id, :user_id, presence: true

  belongs_to(:question, foreign_key: :question_id, class_name: :Question)
  belongs_to(:user, foreign_key: :user_id, class_name: :User)
end
