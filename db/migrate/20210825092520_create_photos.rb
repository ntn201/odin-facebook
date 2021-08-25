class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :url, null: false 
      t.references :owner, polymorphic: true

      t.timestamps
    end
  end
end
