let clock = ()=> {
    let today = new Date()
    let hrs = today.getHours()
    let mins = today.getMinutes()
    let secs = today.getSeconds()
    let period = 'AM'

    if (mins<10){
        mins='0'+mins
    }
    if (secs<10){
        secs='0'+secs
    }
    if (hrs>=12){
        period='PM'
        hrs=hrs-12
    }
    if (hrs<10){
        hrs='0'+hrs
    }
    if (hrs==00){
        hrs=12
    }

    let time = `${hrs}:${mins}:${secs} ${period}`

    let displayClock = document.querySelector('.digitalClock')
    displayClock.innerHTML = time
    setTimeout(clock,1000)

    const body = document.querySelector('body')

    if (period==='AM' && hrs>6){
        body.classList.add('day')
    } else if (period==='PM' && hrs<6){
        body.classList.add('noon')
    } else if (period==='PM' && hrs>6){
        body.classList.add('night')
    }
}

clock()

let date = ()=> {
    let today = new Date()

    let monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    
    let month = monthList[today.getMonth()]
    let currentDate = today.getDate()
    let year = today.getFullYear()

    let completeDate = `${month} ${currentDate}, ${year}`

    let displayDate = document.querySelector('.digitalDate')
    displayDate.innerHTML = completeDate
}

date()

let dayOfWeek = ()=> {
    let dayOfWeekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ]

    let today = new Date()
    let currentDay = dayOfWeekList[today.getDay()]
    let dayOfWeek = document.querySelector('.dayOfWeekDisplay')
    dayOfWeek.innerHTML = currentDay

}

dayOfWeek()




