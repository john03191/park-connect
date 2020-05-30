Rails.application.routes.draw do
  devise_for :users
  root "home#index"
  post '/home/guest_sign_in', to: 'home#new_guest'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  
  resources :shibahu, only: :index
  resources :kuragaike, only: :index
  resources :koutu, only: :index
  resources :handa, only: :index
  resources :horiuti, only: :index
  resources :denpa, only: :index
end