class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :caption
      t.text :body
      t.references :photo
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

