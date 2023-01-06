//CONFIG START

const timer = 5; //MINUTES WHEN THE CAR DESPAWNS IF INACTIVE

//CONFIG END

//OBJ CAN ALSO BE THE DATABASE REQUEST
//YOU CAN DELETE THIS IN YOUR CODE
const OBJ = {
    "vehicles": [
      {
        "id": 1,
        "ownerID": 1,
        "model": "neon",
        "posX": -4.481,
        "posY": 13.702,
        "posZ": 70.97,
        "spawned": 1,
        "numberplate": "Hello"
      },
      {
        "id": 2,
        "ownerID": 1,
        "model": "bati",
        "posX": 13.04,
        "posY": 18.588,
        "posZ": 70.594,
        "spawned": 1,
        "numberplate": "There"
      }
    ]
  }
  


  //THE SPAWN OF THE VEHICLES
 



  //INTERVAL EVENT CAN ALSO BE A CRONJOB
  setInterval(() => {
    mp.vehicles.forEach(
        (veh) => {
            const vp = veh.position;
            
            if(parseFloat(vp.x).toFixed(6) == parseFloat(veh.getVariable('posX')).toFixed(6)) {
                //THE POSITION X IS THE SAME IS IT WAS 5 MINUTES AGO, SO THE VEHICLE IS INACTIVE!
                veh.destroy(); //DESTROYS THE VEHICLE

                /*
                    YOUR CODE HERE:
                    UPDATE DATABASE WITH YOUR VEHICLE TO SPAWNED 0 OR DESPAWNED OR WHATEVER!
                    YOU GET THE VEHICLE ID WITH "veh.data.id"
                */

            } else {
                //THE POSITION X IS NOT THE SAME, SO THE VEHICLE IS ACTIVE!
                veh.setVariable("posX", vp.x); //SET THE NEW POSITION OF THE VEHICLE
            }
        }
    );
  }, timer * 60000); //HERE IS THE TIMER HARDCODED, YOU CAN CHANGE IT ON TOP!