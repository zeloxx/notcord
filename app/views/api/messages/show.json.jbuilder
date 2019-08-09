json.set! @message.id do
    json.extract! @message, :id, :author_id, :channel_id, :body
    json.created_at(@message.created_at.strftime('%d/%m/%Y %-l:%M%P'))
end