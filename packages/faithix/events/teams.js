const teams = require("../team_config");

mp.events.add("selectteam:server", (player, frak) => {
    player.currentTeam = frak;
    player.call("closefrakbrowser:client")
})

mp.events.add("requestSpawn:server",(player)=>{
    team = player.currentTeam
    player.spawn(teams[team].Spawnpos)  
    for(const val of teams[team].Clothes){
        player.setClothes(Number(val.id), Number(val.drawable), Number(val.texture),2)
    }
    for(const val of teams[team].Props){
        player.setProp(Number(val.id), Number(val.drawable), Number(val.texture))
    }
    player.isffa = 0;
    //player.call("weaponAuswahl");
 });
mp.events.add("selectweapon:server", (player, args) => { //3523564046
    if (args == 1) { weapons = [2578778090, 3523564046, 1649403952]}; //CompactRifle + Heavypistol + knife
    if (args == 2) { weapons = [2578778090, 3523564046, 2132975508]}; //BullpupRifle + Heavypistol + knife
    if (args == 3) { weapons = [2578778090, 3523564046, 1627465347]}; //Gusenberg + Heavypistol+ knife
    if (args == 4) { weapons = [2578778090, 3523564046, 2937143193]}; //AdvancedRifle + Heavypistol+ knife
    if (args == 5) { weapons = [2578778090, 3523564046, 100416529]}; //awp + CompactRifle+ knife

    if(mp.players.exists(player)){
        player.removeAllWeapons();
        for(let i in weapons){
            player.giveWeapon(weapons[i], 9999);
        };
    };
});