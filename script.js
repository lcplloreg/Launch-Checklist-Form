// Write your JavaScript code here!
<script>
   window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         }  else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
               alert("Please enter a valid amount.")
         } else
            (faultyItems.style.visibility = "visible");
               
            if(Number(fuelLevel.value) < 10000) {
               pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
               copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready.`;
               fuelStatus.innerHTML = "Not enough fuel for the journey.";
               launchStatus.innerHTML = "Shuttle not ready for launch.";
               launchStatus.style.color = "red";
            } else if(Number(cargoMass.value) > 10000) {
               faultyItems.style.visibility = "visible";
               pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
               copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready.`;
               cargoStatus.innerHTML = "Too much mass for takeoff.";
               launchStatus.innerHTML = "Shuttle not ready for launch.";
               launchStatus.style.color = "red";
            } else launchStatus.innerHTML = "Ready for launch.";
               launchStatus.style.color = "green";
            
      });
   });

// This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
       
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${JSON.name}</li>
   <li>Diameter: ${JSON.diameter}</li>
   <li>Star: ${JSON.star}</li>
   <li>Distance from Earth: ${JSON.distance}</li>
   <li>Number of Moons: ${JSON.moons}</li>
</ol>
<img src="${https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg}">
`;
});
}); 
</script>