Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  get "/auth/:provider/callback", to: "sessions#omniauth"

  namespace :api, defaults: { format: :json } do
    #resource :current_user, only: [:show]
    resource :session, only: [:show]
    resources :users, only: [:index, :show, :update]
    resources :projects, except: [:new, :edit] do
      resources :users, only: [:index]
      resources :collaborations, only: [:create]
      resources :discussions, only: :index
    end
    resources :todo_lists, only: [:show, :create, :update, :destroy] do
      resources :todo_items, only: [:index]
    end
    resources :todo_items, only: [:show, :create, :update, :destroy]
    resources :discussions, only: [:show, :update, :destroy, :create]
    resources :comments, only: [:create, :update, :destroy]
    resources :collaborations, only: [:destroy]
  end
end
