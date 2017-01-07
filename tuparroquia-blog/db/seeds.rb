# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all


post1 = Post.new()
post1.title = "Aviso de la parroquia"
post1.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis est aliquid atque error fugit saepe dicta, facilis possimus nisi. Accusantium atque saepe corporis, facere quo, est officiis ipsam natus."
post1.creator = "José Ángel"
post1.subtitle = "Podran encontrar aqui toda la información de nuestros próximos eventos"
post1.save

post2 = Post.new()
post2.title = "Feliz año"
post2.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis est aliquid atque error fugit saepe dicta, facilis possimus nisi. Accusantium atque saepe corporis, facere quo, est officiis ipsam natus."
post2.creator = "Victor"
post2.subtitle = "Les deseamos un Feliz año 2017"
post2.save

post3 = Post.new()
post3.title = "Caminito de Belén"
post3.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis est aliquid atque error fugit saepe dicta, facilis possimus nisi. Accusantium atque saepe corporis, facere quo, est officiis ipsam natus."
post3.creator = "David"
post3.subtitle = "Vengan con nosotros en este camino"
post3.save