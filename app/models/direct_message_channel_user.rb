# == Schema Information
#
# Table name: direct_message_channel_users
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DirectMessageChannelUser < ApplicationRecord
    
end
