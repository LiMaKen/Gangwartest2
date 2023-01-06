const database = require("../corestuff/mysql").getPool();
var date = require("moment");
var formatdate = date().format("MM/dd/yyyy h:mm:ss")
mp.events.add('playerSpawn', (player) => {
    player.armourused = 0;
    player.healused = 0;
    player.health = 100;
    player.armour = 50;
    if (player.spawnProtectionTimer) clearTimeout(player.spawnProtectionTimer);

    if (player.spawnProtectionSeconds = 5) {
        player.spawnProtectionTimer = setTimeout(() => {
            player.data.spawnProtection = false;
        
            player.notify("~q~~h~bao ve ket thuc.");

            clearTimeout(player.spawnProtectionTimer);
            player.spawnProtectionTimer = undefined;
        }, player.spawnProtectionSeconds * 1000);

        player.data.spawnProtection = true;
        player.notify(`~q~~h~Ban Duoc bao Ve ${player.spawnProtectionSeconds} giay.`);
    } 
        
    


    if (player.respawnTimer) {
    clearTimeout(player.respawnTimer);
    player.respawnTimer = undefined;
}
});


   
mp.events.add("playerJoin", (player) => {
    database.query("SELECT * FROM npc", (error, result) => {
        if(error) throw error;

        for(let i = 0; i < result.length; i++){
            player.call("loadnpcs:client", [result[i]]);
        }
    });
});


mp.events.add("playerJoin", (player) => {
	player.name = player.socialClub
    console.log(`[JOIN] ${player.name} joined. (ID: ${player.id} - SC: ${player.socialClub} - ${player.ip})`);
	mp.players.call("showNotification", [`<C>${player.name}</C> joined.`]);
    database.query("SELECT * FROM users WHERE socialclub=?", [player.socialClub], (error, result) => {
        if(error) throw error;
        if(result[0] === undefined || result[0] === null){
            // Create new user in Database
            database.query("INSERT INTO users SET socialclub=?", [player.socialClub]);
            player.kills = 0;
            player.deaths = 0;
            player.admin = 0;
           
            database.query("SELECT * FROM users WHERE socialclub=?", [player.socialClub], (error, result) => {
                player.sqlid = result[0].id;
            });
            console.info("Created SQL User for " + player.name);
        };

        if(result[0].id){
            //Load user from Database
            database.query("UPDATE users SET lastlogin=? WHERE socialclub=?", [formatdate, player.socialClub]);
            player.kills = result[0].kills;
            player.deaths = result[0].deaths;
            player.admin = result[0].admin;
            player.sqlid = result[0].id;
            console.info("Loaded SQL user for " + player.name);
        };

        setInterval(() => {
            database.query("UPDATE users SET kills=?, deaths=? WHERE socialclub=?",[player.kills, player.deaths, player.socialClub], (error, result) => {
                if(error) throw error;
            });
            player.outputChatBox("Account saved!");
        }, 300000);
    });
    
    player.dimension = 0;
    player.isffa = 0;
    player.inshape = null;
    player.armourused = 0;
    player.healused = 0;
    player.cayo = false;
});