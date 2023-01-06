var sharedVariables = {
    localPlayer: mp.players.local,
    selectionActive: false,
    garageActive: false,
    drawFiringMode: false
};

const npc = [];

const toLoad = [
    "scripts/welcome",
    "scripts/death",
    "scripts/firing",
    "scripts/killfeed",
    "scripts/animsync",
    "scripts/cayo",
	"scripts/minimap",
    "scripts/misc",
    "scripts/garage",
    "scripts/weaponSelect",
	"scripts/chitay",
	//"scripts/noclip",
	"scripts/battatchuot",
	"scripts/theten",
	"scripts/menuquanao",
	"scripts/playerblips",
	"scripts/fly",
	"scripts/spawnProtection",
	"scripts/xoaobject"
	
];
require("speedometer/script.js");
require('daocayo.js');
require('thongtin');
require("hud/hud.js");
require('39hz/index.js');

toLoad.forEach((file) => {
    try {
        require(file);
    } catch (e) {
        mp.gui.chat.push(`Failed to load "${file}".`);
    }
});

//Waffendmg
mp.game.ped.setAiWeaponDamageModifier(0.75);

const date = new Date();

function syncTime() {
    mp.game.time.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
}
setInterval(syncTime, 100);

//garagenpc
mp.events.add("loadnpcs:client", (element) => {
    npc[element.fraktion] = mp.peds.new(mp.game.joaat(element.ped), new mp.Vector3(element.x, element.y, element.z), element.heading, (streamPed) => {streamPed.setAlpha(0);}, 0);
});


//radio off
mp.events.add("render", () => {

    if (mp.players.local.vehicle) {
        mp.game.audio.setRadioToStationName("OFF");
        mp.game.audio.setUserRadioControlEnabled(true);
    }

});
