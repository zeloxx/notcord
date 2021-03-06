Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :channels, only: [:create, :index, :destroy]
    resources :direct_message_channel_users, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :destroy, :update]
    resources :servers, only: [:create, :index, :destroy] do

      collection do
        post 'join'
      end

      collection do 
        delete 'leave'
      end

    end
    resources :users, only: [:index, :create]

    resources :server_users, only: [:create, :index, :destroy]
  end

  mount ActionCable.server => '/cable'
  
  root "static_pages#root"
end
