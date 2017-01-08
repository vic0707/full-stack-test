Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'post#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts, only: [ :index ]
    end
  end

end
