mp.events.add("Weapon Anim", (newweapon,player) =>{
            playAnim("reaction@intimidation@1h","intro");
})

function playAnim(dict, anim)
{
    mp.game.streaming.requestAnimDict("reaction@intimidation@1h");
    mp.players.local.taskPlayAnim("reaction@intimidation@1h", "intro", 8.0, 1.0,1110.0, 0+32+16, 0.0, false, false, false);
    mp.events.callRemote("syncAnim", dict, anim);
}
mp.events.add("syncAnimFromPlayer", (sourcePlayer, dict, anim) => {
    sourcePlayer.taskPlayAnim(dict, anim, 8.0, 1.0,1110.0, 0+32+16, 0.0, false, false, false);
})