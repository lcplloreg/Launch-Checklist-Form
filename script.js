window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
       <li> Name: ${json[3].name} </li>
       <li> Diameter: ${json[3].diameter} </li>
       <li> Star: ${json[3].star} </li>
       <li> Distance from Earth: ${json[3].distance} </li>
       <li> Number of Moons: ${json[3].moons} </li>
       </ol>
       <img src=${json[3].image}></img>
       `});
   });

   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuelLevelValue = Number(fuelLevel.value);
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargoMassValue = Number(cargoMass.value);
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
        
      }  else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Please enter a valid amount.")
      } else {
         faultyItems.style.visibility = "visible";
            
         if(fuelLevelValue < 10000 && cargoMassValue > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
            copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready.`;
            cargoStatus.innerHTML = "Too much mass for takeoff.";
            fuelStatus.innerHTML = "Not enough fuel for the journey.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            console.log("if");
         } else if(fuelLevelValue > 10000 && cargoMassValue > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
            copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready.`;
            fuelStatus.innerHTML = "Enough fuel for the journey.";
            cargoStatus.innerHTML = "Too much mass for takeoff.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            console.log("else if");
         } else if(fuelLevelValue > 10000 && cargoMassValue < 10000) {
            launchStatus.innerHTML = "Ready for launch.";
            fuelStatus.innerHTML = "Enough fuel for the journey.";
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";
            launchStatus.style.color = "green";
            console.log("else if");
         }
      }
   });
});