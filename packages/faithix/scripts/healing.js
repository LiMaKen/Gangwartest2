mp.events.add("heal", (player) => {
    const dist = "amb@code_human_cower@male@idle_a";
    const name = "idle_b";
    const speed = 1;
    const flag = 33;
    if (player.vehicle) {
        player.outputChatBox(`!{red}Hệ Thống: Bạn không thể sự dụng hộp sơ cứu trong phương tiện.`);
        return player.notify
    // ('~r~Ban Khong The Su Dung Hop So Cuu Trong Phuong Tien!');
};
    if (player.health >= 100) {
        player.outputChatBox(`!{red}Hệ Thống: Bạn không thể sự dụng hộp sơ cứu khi sức khỏe là tối đa.`);
        return player.notify
    }
    if (player.healused >= 5) {
        player.outputChatBox(`!{red}Hệ Thống: Bạn Đã sử dụng tối đa hộp sơ cứu.`);
        return player.notify
    }
    player.playAnimation(dist, name, speed, flag);
    player.setVariable("animData", `${dist}%${name}%${flag}`);
    setTimeout(() => {
        player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
        player.setVariable("animData", null);
        player.notify("Da Su Dung x" + player.healused + " Hop So Cuu");
        player.health = 100;
        player.armour = 50;
    }, 4000);
    player.healused = player.healused += 1;
});
mp.events.add("hanhdong", (player) => {
	const dist = "amb@code_human_cower@male@idle_a";
    const name = "idle_b";
    const speed = 1;
    const flag = 33;
   player.playAnimation(dist, name, speed, flag);
	player.setVariable("animData", `${dist}%${name}%${flag}`);
    setTimeout(() => {
        player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
        player.setVariable("animData", null);
    }, 4000);
});
/*mp.events.add("armor", (player) => {
    const dist = "anim@heists@narcotics@funding@gang_idle";
    const name = "gang_chatting_idle01";
    const speed = 1;
    const flag = 33;
    if (player.vehicle) return player.notify('~r~Im Auto Rüstung ziehen?!');
    if (player.armourused >= 6) return player.notify('~r~Keine Rüstung mehr verfügbar');
    player.playAnimation(dist, name, speed, flag);
    player.setVariable("animData", `${dist}%${name}%${flag}`);
    setTimeout(() => {
        player.playAnimation("rcmcollect_paperleadinout@","kneeling_arrest_get_up", 1, 33);
        player.setVariable("animData", null);
        player.notify("Rüstung " + player.armourused + " x benutzt");
        player.armour = 100;
    }, 4000);
    player.armourused = player.armourused += 1;
});*/