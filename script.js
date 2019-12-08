// Write your JavaScript code here!
window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) { 
         const missionTarget = document.getElementById("missionTarget")
         function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
         let index = getRandomInt(6)
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`
      })
   })
   let form = document.getElementById("launchForm")
   let formValidation = function () {
      let pilotName = document.querySelector("input[name=pilotName]")
      let copilotName = document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass")
      if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
         alert("Additional fields required")
         event.preventDefault()
      }
      else if (isNaN(pilotName.value) !== true || isNaN(copilotName.value) !== true || isNaN(fuelLevel.value) !== false || isNaN(cargoMass.value) !== false) {
         alert("Incorrect values, please check the values entered")
         event.preventDefault()
      }
      else if (fuelLevel.value < 10000) {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch `
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
         document.getElementById("launchStatus").style.color = "red"
         event.preventDefault()
      }
      else if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off`
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
         document.getElementById("launchStatus").style.color = "red"
         event.preventDefault()
      }
      else {
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`
         document.getElementById("launchStatus").style.color = "green"
         alert("Shuttle is ready for launch")
      } 
   }
   form.addEventListener("submit", formValidation)




      

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
