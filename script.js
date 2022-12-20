// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form")
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let pilotValue = pilot.value;
        let copilot = document.querySelector("input[name=copilotName]");
        let copilotValue = copilot.value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuelLevelValue = fuelLevel.value;
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let cargoLevelValue = cargoLevel.value;

        
        formSubmission(document, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);

    });

   let listedPlanets ;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let randomPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);

   });
   
});