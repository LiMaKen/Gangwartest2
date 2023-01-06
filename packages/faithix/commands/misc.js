const teams = require("../team_config");
const database = require("../corestuff/mysql").getPool();

mp.events.addCommand("car",(player, vehName = "faggio")=>{
    if(player.isffa === 0 && mp.players.exists(player)){
        if (player) {
            let pos = player.position;
            let veh = mp.vehicles.new(mp.joaat(vehName),pos)
                veh.dimension = player.dimension;
                veh.numberPlate = teams[player.currentTeam].Teamname;
                veh.setColor(teams[player.currentTeam].color, teams[player.currentTeam].color);
                veh.spawnedBy = player.name;
                veh.modelname = vehName;
                player.putIntoVehicle(veh, -1);
        }
    }
});

mp.events.addCommand("team", (player, team) =>{
   // player.call("guiReady");
    
    if (undefined === teams[team]) {
        player.outputChatBox("!{RED}Hệ Thống: /team [Đội] ")
        player.outputChatBox("!{RED}Hệ Thống: Chọn Đội Bạn Muốn Thay Đổi: ")
        player.outputChatBox("TEAM:gf, ballas, lsv, lost")
    }
    else{
        player.currentTeam = team;
        player.position = teams[team].Spawnpos;
        for(const val of teams[team].Clothes){
            player.setClothes(Number(val.id), Number(val.drawable), Number(val.texture), 2)
        }
        for(const val of teams[team].Props){
            player.setProp(Number(val.id), Number(val.drawable), Number(val.texture))
        }
        player.outputChatBox("Bây giờ bạn đang ở trong team: " + teams[team].Teamname)
    }
});

mp.events.addCommand("fly", (player) => {
    if (mp.players.exists(player)) {
       // if (player.admin > 5) {
            player.call("flyModeStart");
        };
     //   if (player.admin < 5) {
           // player.outputChatBox("!{RED}Bố Tú Said : Có cái lồn quyền")
       // };
   // }
}) ;
mp.events.addCommand("cleanup", (player) => {
    mp.vehicles.forEach((vehicle) => { vehicle.destroy(); })
});

mp.events.addCommand('rep', (player) => {
    if (player.vehicle)
        player.vehicle.repair();
    else
        player.outputChatBox("Bạn không ở trong một chiếc xe!");
});

mp.events.addCommand("respawn", (player) => {
    player.health = 0;
})

mp.events.addCommand("loadmarker", (player, ffa) => {
    if(player.admin > 6){
        database.query("SELECT * FROM ffa_spawns WHERE ffa=?", [ffa], (error, result) => {
            if(error) throw error;

            result.forEach(element => {
                player.call("loadmarker:client", [element]);
            });
        });
    };
});

mp.events.addCommand("setspawn", (player, ffa) => {
    database.query("INSERT INTO ffa_spawns SET ffa=?, x=?, y=?, z=?", [ffa, player.position.x, player.position.y, player.position.z]);
    
    var element = {};
    
    element.ffa = ffa;
    element.x = player.position.x;
    element.y = player.position.y;
    element.z = player.position.z;

    player.call("loadmarker:client", [element]);
});

mp.events.addCommand("removemarker",(player) => {
    player.call("removemarker:client");
});

mp.events.addCommand("mod", (player, _, modtype, modindex) => {
    vehicle = player.vehicle;
    vehicle.setMod(parseInt(modtype), parseInt(modindex));
});

mp.events.addCommand("aduty", (player) => {
    if(mp.players.exists(player)){
        if(player.admin > 5){
            if(player.aduty === false || player.aduty === undefined){
                player.aduty = true;
                player.call("names");
                player.call("godmodeOn");
                player.alpha = 0;
                player.outputChatBox("ADuty aktiv");
                console.log("[ADUTY] " + player.name + " ist nun im ADuty!");
                return;
            };
            if(player.aduty === true){
                player.aduty = false;
                player.call("namesoff");
                player.call("godmodeOff");
                player.alpha = 255;
                player.outputChatBox("ADuty deaktiviert");
                console.log("[ADUTY] " + player.name + " ist nun nichtmehr im ADuty!");
                return;
            };
        };
    }
});
mp.events.addCommand('mau', (player,_, targetID) => {
		if (player.isLoggedIn && player.admin > 0) {
        targetID = Number(targetID);
        

        if (isNaN(targetID)) {
            player.outputChatBox("!{#FF8555}Hệ Thống: !{#FFFFFF}/hp [player ID]");
            return;
        }
    player.health = 100;
	
		}
});

mp.events.addCommand('giap', (player,_, targetID) => {
	if (player.isLoggedIn && player.admin > 0) {
        targetID = Number(targetID);
        

        if (isNaN(targetID)) {
            player.outputChatBox("!{#FF8555}Hệ Thống: !{#FFFFFF}/giap [player ID]");
            return;
        }
    player.armour = 100;
	
		}
});

mp.events.addCommand('kill', (player,_, targetID) => {
	if (player.isLoggedIn && player.admin > 0) {
        targetID = Number(targetID);
        

        if (isNaN(targetID)) {
            player.outputChatBox("!{#FF8555}Hệ Thống: !{#FFFFFF}/kill [player ID]");
            return;
        }
    player.health = 0;
	
		}
});
mp.events.addCommand('veh', (player, _, id, veh, color1, color2) => {
   
    
    if (!id || !veh)
        return player.outputChatBox('/veh [id] [model] [color1] [color2]');
    
    const target = mp.players.at(id);
    if (!target)
        return player.notify('~r~ID игрока не найден!');
    
    const pos = target.position;
    const adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x + 2, pos.y, pos.z));
    adminVeh.setColor(parseInt(color1), parseInt(color2));
    adminVeh.numberPlate = "SWG RP";  //Номер машины
    
    player.dim = player.id;
    setTimeout(() => target.putIntoVehicle(adminVeh, 0) , 150)
    player.notify('~g~ Заспавенно!');
    
}) 
