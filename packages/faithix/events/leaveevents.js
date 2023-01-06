const database = require("../corestuff/mysql").getPool();

mp.events.add("playerQuit", (player, exitType, reason) => {
	player.name = player.socialClub;
	 mp.players.call("showNotification", [`<C>${player.name}</C> da thoat. (${exitType})`]);
    database.query("UPDATE users SET kills=?, deaths=? WHERE socialclub=?",[player.kills, player.deaths, player.socialClub], (error, result) => {
        if(error) throw error;
    });
    console.log("Saved Account for " + player.name);
});