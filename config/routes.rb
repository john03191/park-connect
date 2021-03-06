Rails.application.routes.draw do
  devise_for :users
  root "tops#index"
  post '/home/guest_sign_in', to: 'home#new_guest'
  resources :users, only: [:index, :edit, :update]
  resources :homes, only: :index
  resources :posts
  resources :groups do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end