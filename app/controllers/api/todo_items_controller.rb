class Api::TodoItemsController < ApplicationController

  def create
    current_list =
      current_user.to_do_lists.find(params[:to_do_list_id])
    return if current_list.nil?
    @item = current_list.to_do_items.new(item_params)
    @item.order = params[:order]
    if @item.save
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    current_list =
      current_user.to_do_lists.find(params[:to_do_list_id])
    @item = current_list.find(params[:id])
    if @item.save(update_params)
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:todo_item).permit(:description)
  end

  def update_params
    params.require(:todo_item).permit(:description, :order, :completed)
  end
end
