class View < ApplicationRecord
  validates :question_id, presence: true

  belongs_to(:question, foreign_key: :question_id, class_name: :Question)

end
