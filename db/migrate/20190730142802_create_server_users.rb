class CreateServerUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_users do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.boolean :is_admin, null: false, default: false
      t.string :username_alias, optional: true
      t.timestamps
    end
  end
end
