// Initialize Variables below
let date = 	"Monday 2019-03-18";
let time = ("10:05:34 AM");
let astronautCount =	(8);
let astronautStatus = 	("ready");
let averageAstronautMassKg = (80.7);
let preparedForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
console.log ("not ready");
preparedForLiftOff = false;
};
// add logic below to verify all astronauts are ready
if(astronautStatus !== "ready"){
    console.log ("not ready");
  preparedForLiftOff = false;

}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
