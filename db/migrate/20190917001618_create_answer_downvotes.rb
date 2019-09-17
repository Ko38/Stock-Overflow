class CreateAnswerDownvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_downvotes do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :answer_downvotes, [:answer_id, :user_id], unique: true
  end
end
