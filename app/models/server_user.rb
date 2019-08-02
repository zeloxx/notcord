# == Schema Information
#
# Table name: server_users
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  server_id      :integer          not null
#  is_admin       :boolean          default(FALSE), not null
#  username_alias :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ServerUser < ApplicationRecord
    belongs_to :server
    belongs_to :user
end
