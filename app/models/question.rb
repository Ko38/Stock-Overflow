class Question < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to(:author, foreign_key: :author_id, class_name: :User)
  has_many(:answers, foreign_key: :question_id, class_name: :Answer)
end