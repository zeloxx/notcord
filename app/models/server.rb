# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  icon_url    :string           not null
#  invite_code :string           not null
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord
    validates :owner_id, :icon_url, :invite_code, :name, presence: true
    
    after_initialize :ensure_icon_url
    after_initialize :ensure_invite_code

    has_many :users
    has_many :channels  

    def ensure_icon_url
        self.icon_url ||= "https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png"
    end

    def ensure_invite_code
        self.invite_code ||= SecureRandom::urlsafe_base64(8);
    end
end
