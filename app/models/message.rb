# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  channel_id :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
    validates :author_id, :channel_id, :body, presence: true

    belongs_to :channel
    belongs_to :author,
    class_name: :User

    after_create_commit do
        ChatMessageCreationEventBroadcastJob.perform_later(self)
    end
end
