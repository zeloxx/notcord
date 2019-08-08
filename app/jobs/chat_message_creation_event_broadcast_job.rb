class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable
      .server
      .broadcast('chat_channel',
                 id: message.id,
                 author_id: message.author_id,
                 channel_id: message.channel_id,
                 created_at: message.created_at.strftime('%H:%M'),
                 body: message.body)
  end
end
