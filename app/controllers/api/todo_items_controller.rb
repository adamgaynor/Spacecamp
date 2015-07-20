class Api::TodoItemsController < ApplicationController

  def show
    @item = current_user.to_do_items.find(params[:id])
    render json: @item
  end

  def create
    current_list =
      current_user.to_do_lists.find(params[:todo_item][:to_do_list_id])
    @item = current_list.to_do_items.new(item_params)
    if @item.save
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @item = current_user.to_do_items.find(params[:id])
    if @item.update_attributes(item_params)
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:todo_item).permit(:description, :order, :completed, :assigned_user_id)
  end
end
