# https://www.twilio.com/blog/2014/09/gmail-api-oauth-rails.html

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['CLIENT_ID'], ENV['CLIENT_SECRET']
end
