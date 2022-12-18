// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let container = document.getElementById('missionTarget');
   

   
          container.innerHTML =`
          
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
           };
   
   





    function validateInput(testInput) {
       let number = Number(testInput)
       if (number === "") {
        return "Empty"
       } else if (!isNaN(number)) {
        return "Is a Number";
       } else {
        return "Not a Number"
       } 
    };



       
    function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
        let faultyItems = document.getElementById('faultyItems');
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus');

      // Validate the input values
        let pilotValidation = validateInput(pilot);
        let copilotValidation = validateInput(copilot);
        let fuelLevelValidation = validateInput(fuelLevel);
        let cargoLevelValidation = validateInput(cargoLevel);
      
        // Update the shuttle requirements based on the validation results
       if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelLevelValidation === "Not a Number" || cargoLevelValidation === "Not a Number"){
        alert('Make sure to enter valid information for each fields')
       }else if(pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoLevelValidation === "Empty"){
        alert('All fields must have data.')
       }else{ faultyItems.style.visibility = "visible"
        pilotStatus.innerHTML = `${pilot} is ready for launch!` 
        copilotStatus.innerHTML = `${copilot} is ready for launch!`
        let launchStatus = document.getElementById('launchStatus')
          if (cargoLevel > 10000 && fuelLevel < 10000) {
            launchStatus.style.color = "red"
            launchStatus.innerHTML = 'Not ready to launch!'
            fuelStatus.innerHTML = 'Fuel level is too low.'
            cargoStatus.innerHTML = 'Cargo mass is too high.'
          } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            launchStatus.style.color = "red"
            launchStatus.innerHTML = 'Not ready to launch!'
            fuelStatus.innerHTML = 'Fuel level high enough for launch.'
            cargoStatus.innerHTML = 'Cargo mass is too high.'

          } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
            launchStatus.style.color = "red"
            launchStatus.innerHTML = 'Not ready to launch!'
            fuelStatus.innerHTML = 'Fuel level is too low.'
            cargoStatus.innerHTML = 'Cargo mass low enough for launch.'
          } else {
            launchStatus.style.color = "green"
            launchStatus.innerHTML = 'Ready to launch!'
            fuelStatus.innerHTML = 'Fuel level high enough for launch.'
            cargoStatus.innerHTML = 'Cargo mass low enough for launch.'
       }
      
      }
      

      }
               


async function myFetch() {
    let planetsReturned;
    let planetArray = 'https://handlers.education.launchcode.org/static/planets.json'
    planetsReturned = await fetch(planetArray).then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.random() * planets.length;
  
  // Round the random index down to the nearest integer to get a valid index for the planets array.
    let index = Math.floor(randomIndex);
  
  // Return the planet at the randomly-selected index.
  return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
