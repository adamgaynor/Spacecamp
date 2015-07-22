json.extract! @user, :id, :email, :fname, :lname
json.avatar asset_path(@user.avatar.url(:thumb))
