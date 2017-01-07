class AddColumnToPosts < ActiveRecord::Migration[5.0]
  def change
  	add_column :posts, :creator, :string
  end
end
