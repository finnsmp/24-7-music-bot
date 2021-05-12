const ytdl = require("ytdl-core")
const u = require("./urls.json")

client.on("ready", () => {
    const voiceChannel = client.channels.cache.get(config.ch)
    voiceChannel.join().then(connection => {
        console.log("Joined voice channel")
        function play(connection) {
            const stream = ytdl(video_urls[Math.floor(Math.random() * u.list.length)], { filter: "audioonly" })
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
        
        play(connection)
    })
})
