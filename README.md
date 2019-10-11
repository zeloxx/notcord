## NOTCORD
[Live Site](https://notcord.herokuapp.com/) 

## OVERVIEW
Notcord is a full-stack clone application inspired by [Discord](https://discordapp.com/) Where users can create "servers" and invite their friends to send text messages to each other in realtime!

## TECHNOLOGIES
* React - front-end JavaScript library
* Redux - JavaScript library for state management
* Ruby on Rails - server-side web application model–view–controller (MVC) framework
* Ruby on Rails Action Cable - websockets for live chat functionality
* PostgreSQL - relational database for storing my application's data
* Sassy CSS (SCSS)
* jQuery - JavaScript library used for AJAX requests
* Jbuilder - rendering and formatting JSON responses from my API
* Webpack - JavaScript module bundler
    
![splash](https://i.ibb.co/6r2qyxS/splash.png)

## FEATURES
* User authentication
* error handling
![errors](https://i.ibb.co/Sw90Fpk/custom-errors.png)
* Servers - create, leave, join
![servers](https://i.ibb.co/jv38LX1/create-join-server.png)
* Channels - create, delete
* Server user-list
* Realtime text chat with other users
![live-chat](https://i.ibb.co/2Z55sJQ/notcord-herokuapp-com-5.png)

The following code snippet is called in `componentDidMount()` inside the React component that displays user messages. This code allows my front end to communicate with my backend using Rails Action Cable to open a WebSocket connection that allows messages to be sent to and from the server in real-time.
```javascript
createSocket() {
        let cable = Cable.createConsumer('wss://notcord.herokuapp.com/cable');
        this.chats = cable.subscriptions.create({
            channel: 'ChatChannel'
        }, {
                connected: () => { },
                received: this.updateChatLogs(),
                create: function (body, channelId, authorId) {
                    this.perform('create', {
                        body: body,
                        channel_id: channelId,
                        author_id: authorId,
                    });
                }
            });
    }
```

## COMING SOON!
* Direct Messaging
* Image uploading to AWS for server icons and user avatars
* Username aliasing
