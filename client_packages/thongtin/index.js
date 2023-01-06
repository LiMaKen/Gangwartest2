// by CommanderDonkey & ByTropical

let browser = null;

mp.keys.bind(0x79, false, function () {
    if (browser != null) {
        browser.destroy();
        browser = null;
        return
    }
    browser = mp.browsers.new("package://thongtin/cef/index.html");

    mp.players.forEach(
        (player) => {
            browser.execute('createUser("' + player.id + '","' + player.name + '", "' + player.getHealth() + '", "' + player.getArmour() + '")');
        }
    );

})