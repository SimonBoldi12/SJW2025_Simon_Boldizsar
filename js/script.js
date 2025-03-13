import { data } from "./data";

let gyumolcs = document.getElementById("gyumolcsok")
let vissza = document.getElementById("vissza")
let btn = document.getElementById("szamit")

btn.addEventListener("click", () => {
    if(gyumolcs.value == "banan"){
        document.getElementById("zsir").innerHTML = fruits[0].fat
        document.getElementById("rost").innerHTML = fruits[0].fiber
        document.getElementById("kal").innerHTML = fruits[0].calory
        document.getElementById("feh").innerHTML = fruits[0].protein
        document.getElementById("szen").innerHTML = fruits[0].carbohydrate
    }
    vissza.addEventListener("click",() => {
        document.getElementById("szam").value.innerHTML = ""
    })
})