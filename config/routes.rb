Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :channels, only: [:create, :index, :destroy]
    resources :direct_message_channel_users, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy, :update]
    resources :servers, only: [:create, :index, :destroy]
    resources :users, only: [:create]

    resources :server_users, only: [:create, :index, :destroy]
  end

  root "static_pages#root"
end
