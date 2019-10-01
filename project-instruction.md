database.yml
production=
    production:
        <<: *default
        database: notcord_production
        username: notcord
        password: <%= ENV['NOTCORD_DATABASE_PASSWORD'] %>

development=
    production:
        <<: *default
        adapter: postgresql
        host: db
        username: postgres
        # we don't need to specify a password
        password:


channels.jsx
production=
    createSocket() {
        let cable = Cable.createConsumer('wss://notcord.herokuapp.com/cable');
    }
development=
    createSocket() {
        let cable = Cable.createConsumer('ws://localhost:3000/cable');
    }