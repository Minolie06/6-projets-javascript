const secondeDiv = document.querySelector('.seconde')
const minDiv = document.querySelector('.min')
const heureDiv = document.querySelector('.heure')

function miseEnPlace() {

    const now = new Date();

    //Secondes
    const seconds = now.getSeconds()
    const secDeg = ((seconds/60)*360) + 90
    secondeDiv.style.transform = `rotate(${secDeg}deg)`

    //Minutes
    const minutes = now.getMinutes()
    const minDeg = ((minutes/60)*360) + (seconds/60)*6 + 90
    minDiv.style.transform = `rotate(${minDeg}deg)`

    //Heures
    const hours = now.getHours()
    const heureDeg = ((hours/12)*360) + (minutes/60)*30 + 90
    heureDiv.style.transform = `rotate(${heureDeg}deg)`

}

setInterval(miseEnPlace, 1000)