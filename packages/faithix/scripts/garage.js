const garage_config = require("../garage_config.json");
const teams = require("../team_config");
const database = require("../corestuff/mysql").getPool();

garage_colshapes = [];


function entercolshapehandler(player,shape) {
    player.setVariable("shapedata", shape);
}

function leavecolshapehandler(player) {
    player.setVariable("shapedata", null);
}

mp.events.add("playerEnterColshape", entercolshapehandler);
mp.events.add("playerExitColshape", leavecolshapehandler);

database.query("SELECT * from colshapes", (error, result) => {
    if(error) throw error;
    
    for(let i = 0; i < result.length; i++){
        garage_colshapes[result[i].id] = mp.colshapes.newSphere(result[i].x, result[i].y, result[i].z, result[i].size, result[i].dim );
        garage_colshapes[result[i].id].styletype = "garage";
        garage_colshapes[result[i].id].frak = result[i].frak;
    };
});
// ballas
mp.markers.new(36, new mp.Vector3(102.81621551513672, -1959.047607421875, 20.796850204467773), 3.0, {
    "color": [255, 0, 0, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
});
mp.labels.new(`An ~b~E~w~ De mo Gara`, new mp.Vector3(102.81621551513672, -1959.047607421875, 20.796850204467773 + 1), {
    "color": [255, 255, 0, 255],
    "dimension": 0,
    "drawDistance": 100.0,
    "font": 4
});

mp.blips.new(106, new mp.Vector3(84.15628814697266, -1966.693115234375, 20.939178466796875),
    {
        name: 'Ballas',
        scale: 1,
        color: 27,
        alpha: 255,
        drawDistance: 100,
        shortRange: true,
        rotation: 0,
        dimension: 0
    });
// grove
mp.markers.new(36, new mp.Vector3(-187.02259826660156, -1535.1624755859375, 33.73418426513672 ), 3.0, {
"color": [255, 0, 0, 255],
"direction": 0,
"dimension": 0,
"visible": true
});
mp.labels.new(`An ~b~E~w~ De mo Gara`, new mp.Vector3(-187.02259826660156, -1535.1624755859375, 33.73418426513672 + 1), {
"color": [255, 255, 0, 255],
"dimension": 0,
"drawDistance": 100.0,
"font": 4
});

mp.blips.new(738, new mp.Vector3(-187.02259826660156, -1535.1624755859375, 33.73418426513672),
{
    name: 'Grove Street',
    scale: 1,
    color: 2,
    alpha: 255,
    drawDistance: 100,
    shortRange: true,
    rotation: 0,
    dimension: 0
});
//vagos
mp.markers.new(36, new mp.Vector3(347.2834167480469, -2037.449462890625, 21.938114166259766 ), 3.0, {
    "color": [255, 0, 0, 255],
    "direction": 0,
    "dimension": 0,
    "visible": true
    });
    mp.labels.new(`An ~b~E~w~ De mo Gara`, new mp.Vector3(347.2834167480469, -2037.449462890625, 21.938114166259766 + 1), {
    "color": [255, 255, 0, 255],
    "dimension": 0,
    "drawDistance": 100.0,
    "font": 4
    });
    
    mp.blips.new(310, new mp.Vector3(344.4190368652344, -2049.867431640625, 21.531719207763672),
    {
        name: 'The Vagos',
        scale: 1,
        color: 5,
        alpha: 255,
        drawDistance: 100,
        shortRange: true,
        rotation: 0,
        dimension: 0
    });
    // the lost MC
    mp.markers.new(36, new mp.Vector3(175.803955078125, -1656.381591796875, 29.803224563598633 ), 3.0, {
        "color": [255, 0, 0, 255],
        "direction": 0,
        "dimension": 0,
        "visible": true
        });
        mp.labels.new(`An ~b~E~w~ De mo Gara`, new mp.Vector3(175.803955078125, -1656.381591796875, 29.803224563598633 + 1), {
        "color": [255, 255, 0, 255],
        "dimension": 0,
        "drawDistance": 100.0,
        "font": 4
        });
        
        mp.blips.new(437, new mp.Vector3(175.803955078125, -1656.381591796875, 29.803224563598633),
        {
            name: 'The Lost MC',
            scale: 1,
            color: 51,
            alpha: 255,
            drawDistance: 100,
            shortRange: true,
            rotation: 0,
            dimension: 0
        });

mp.events.add("opengarage:server", (player) => {
    if(mp.players.exists(player)){
        if(player.getVariable("shapedata")){
            if((player.getVariable("shapedata").styletype === "garage")){
                player.call("opengarage:client");
            };
        };
    };
});

mp.events.add("spawncar:server", (player, args) => {
    var car;
    if(args == 1){car = "revolter"};
    if(args == 2){ car = "18Velar"};
    if(args == 3){car = "jugular"};
    if(args == 4){car = "schafterg"};
    if(args == 5){car = "kuruma"};
    if(args == 6){car = "bf400"};
    if(args == 7){car = "bati"};
    if(args == 8){car = "supervolito"};
	if(args == 9){car = "911turbos"};
    
    if(player.isffa === 0 && mp.players.exists(player)){
        if (args < 10) {
            let pos = garage_config[player.getVariable("shapedata").frak].spawnpoint_car
            let veh = mp.vehicles.new(mp.joaat(car),pos, {
                dimension: player.dimension
            });
			setTimeout( ()  => {
            veh.rotation = garage_config[player.getVariable("shapedata").frak].rotation_car;
			}, 10);
            veh.numberPlate = teams[player.currentTeam].Teamname;
            veh.setColor(teams[player.currentTeam].color, teams[player.currentTeam].color);
            veh.spawnedBy = player.name;
            veh.modelname = car;
            player.putIntoVehicle(veh, 0);
        }else if(args == 8){
            let pos = garage_config[player.getVariable("shapedata").frak].spawnpoint_heli;
            let veh = mp.vehicles.new(mp.joaat(car),pos)
            veh.dimension = player.dimension;
            veh.numberPlate = teams[player.currentTeam].Teamname;
            veh.setColor(teams[player.currentTeam].color, teams[player.currentTeam].color);
            veh.spawnedBy = player.name;
            veh.modelname = car;
			setTimeout( ()  => {
            veh.rotation = garage_config[player.getVariable("shapedata").frak].rotation_heli;
				}, 10);
            player.putIntoVehicle(veh, 0);
        }
    }
});