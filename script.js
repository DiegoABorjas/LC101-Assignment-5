// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm")
   let preventDefault = function() {
      let pilotName = document.querySelector("input[name=pilotName]")
      let copilotName = document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass")
      if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
         alert("Additional fields required")
         event.preventDefault()
      }
      if (isNaN(pilotName.value) !== true || isNaN(copilotName.value) !== true || isNaN(fuelLevel.value) !== false || isNaN(cargoMass.value) !== false) {
         alert("Incorrect values, please check the values entered")
         event.preventDefault()
      }
   }
   let updateList = function() {
      let pilotName = document.querySelector("input[name=pilotName]")
      let copilotName = document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass")
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch `
      if (fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
         event.preventDefault()

      }
   }
   form.addEventListener("submit", preventDefault)
   form.addEventListener("submit", updateList)

      




})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
