class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :owner_id, null: false
      t.string :icon_url, null: false
      t.string :invite_code, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
