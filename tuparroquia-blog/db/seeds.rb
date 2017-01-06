# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(1..3).each do |i|
	post = Post.new()
	post.title = "Post entry #{i}"
	post.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis est aliquid atque error fugit saepe dicta, facilis possimus nisi. Accusantium atque saepe corporis, facere quo, est officiis ipsam natus."
	post.save
end
