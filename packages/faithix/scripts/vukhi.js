const database = require("../corestuff/mysql").getPool();


vukhi_colshapes = [];




function entercolshapehandler(player,shape) {
    player.setVariable("shapedata", shape);
}

function leavecolshapehandler(player) {
    player.setVariable("shapedata", null);
}

mp.events.add("playerEnterColshape", entercolshapehandler);
mp.events.add("playerExitColshape", leavecolshapehandler);




database.query("SELECT * from colshapesvukhi", (error, result) => {
    if (error) throw error;

    for (let i = 0; i < result.length; i++) {
        vukhi_colshapes[result[i].id] = mp.colshapes.newSphere(result[i].x, result[i].y, result[i].z, result[i].size, result[i].dim);
        vukhi_colshapes[result[i].id].styletype = "guns";
        vukhi_colshapes[result[i].id].frak = result[i].frak;
    };
});

// shopguns vagos
mp.markers.new(1, new mp.Vector3(363.3938293457031, -2065.082275390625, 21.579654693603516 - 1), 1.0, {
    "color": [255, 0, 0, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
});
mp.labels.new(`An ~b~E~w~ De Mo Kho Vu Khi`, new mp.Vector3(363.3938293457031, -2065.082275390625, 21.579654693603516), {
    "color": [255, 255, 0, 255],
    "dimension": 0,
    "drawDistance": 100.0,
    "font": 4
});
// shopguns ballas
mp.markers.new(1, new mp.Vector3(84.81816101074219, -1967.3404541015625, 20.747446060180664 - 1), 1.0, {
    "color": [255, 0, 0, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
});
mp.labels.new(`An ~b~E~w~ De Mo Kho Vu Khi`, new mp.Vector3(84.81816101074219, -1967.3404541015625, 20.747446060180664), {
    "color": [255, 255, 0, 255],
    "dimension": 0,
    "drawDistance": 100.0,
    "font": 4
});
// shopguns grove
mp.markers.new(1, new mp.Vector3(-179.44723510742188, -1534.9200439453125, 34.353782653808594 - 1), 1.0, {
    "color": [255, 0, 0, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
});
mp.labels.new(`An ~b~E~w~ De Mo Kho Vu Khi`, new mp.Vector3(-179.44723510742188, -1534.9200439453125, 34.353782653808594), {
    "color": [255, 255, 0, 255],
    "dimension": 0,
    "drawDistance": 100.0,
    "font": 4
});
// shopguns lost MC
mp.markers.new(1, new mp.Vector3(183.7766571044922, -1654.8350830078125, 29.926143646240234 - 1), 1.0, {
    "color": [255, 0, 0, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
});
mp.labels.new(`An ~b~E~w~ De Mo Kho Vu Khi`, new mp.Vector3(183.7766571044922, -1654.8350830078125, 29.926143646240234), {
    "color": [255, 255, 0, 255],
    "dimension": 0,
    "drawDistance": 100.0,
    "font": 4
});

mp.events.add("openguns:server", (player) => {
    if (mp.players.exists(player)) {
        if (player.getVariable("shapedata")) {
            if ((player.getVariable("shapedata").styletype === "guns")) {
                player.call("openguns:client");
            };
        };
    };
});

