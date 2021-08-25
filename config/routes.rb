Rails.application.routes.draw do
  root "posts#index"

  resources :posts, only: [:index, :create] do
    resources :comments, only: [:create]
    resources :likes, only: [:create, :destroy]
  end
  resources :friend_ships, only: [:create]
  resources :friend_requests, only: [:create]

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :users, only: [:show,:index] do
    resources :photos, only: [:new, :create, :edit, :destroy]
  end
  resources :photos, only: [:new, :create, :edit, :destroy]
end
