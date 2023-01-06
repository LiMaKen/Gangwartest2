let browser = null;
let browserToggle = false;


mp.keys.bind(0x45, true, () => {
    mp.events.callRemote("openguns:server")
});

mp.events.add("openguns:client", () => {
        if(browserToggle == false){
	        browser = mp.browsers.new('package://cef/weaponSelect.html');
                browserToggle = true;
                mp.gui.cursor.show(true, true);
        } else if (browserToggle == true){
                mp.gui.cursor.show(false, false);
                browser.destroy();
                browserToggle = false;  
                mp.gui.chat.activate(true);
        }
});

mp.events.add("closeWeapons", () => {
        browser.destroy();
        browserToggle = false;
        mp.gui.cursor.show(false, false);
        mp.gui.chat.activate(true);
});
mp.events.add("selectWeapons", (args) => {
        mp.events.callRemote("selectweapon:server", args); 
        browser.destroy();
        mp.gui.cursor.show(false, false);
        browserToggle = false;
        mp.gui.chat.activate(true);
});

