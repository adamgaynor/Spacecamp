Rails.application.routes.draw do
  resources :users, only: [:new, :create, :edit, :update, :show] do
    resources :projects, only: [:index, :new, :create]
  end
  resource :session, only: [:new, :create, :destroy]
  resources :projects, except: [:index, :new, :create]
end
