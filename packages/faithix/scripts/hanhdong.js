mp.events.add("playerWeaponChange", (player, oldWeapon, newWeapon) => {
   //gọi hoạt động tới máy khách
    player.call(`Weapon Anim`,newWeapon,player);
   

 });
 mp.events.add("syncAnim", (player, dict, anim) => {
    //500 - phạm vi
    let streamRange = 500.0;
    mp.players.forEachInRange(player.position, streamRange, (targetPlayer) => {
        targetPlayer.call("synAnimFromPlayer", [player, anim, dict]);
    });
})