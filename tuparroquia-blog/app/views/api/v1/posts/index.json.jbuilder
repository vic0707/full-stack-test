json.array! @posts do |post|
  json.extract! post, :id, :title, :subtitle, :content, :creator
end