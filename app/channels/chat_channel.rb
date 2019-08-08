class ChatChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    stream_from 'chat_channel'
  end

  def unsubscribed
    
  end

  def create(opts)
    # debugger
    Message.create(
      body: opts.fetch('body'),
      author_id: opts.fetch('author_id'),
      channel_id: opts.fetch('channel_id')
    )
  end
end
