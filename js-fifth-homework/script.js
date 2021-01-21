const secondInMilliseconds = 1000
const currentTimeSelector = document.querySelector('.currentTime')

function displayCurrentTime(currentTimeSelector) {
    setInterval( () => {
        const time = new Date();
        currentTimeSelector.innerHTML = getTimeString(time, true);
    }, secondInMilliseconds);
}

function getTimeString(time, withSeconds) {
    let addZeroIfNeed = (value) => {
        return value >= 10 ? value : `0${value}`
    }

    if (withSeconds === true) {
        return `${addZeroIfNeed(time.getHours())}:${addZeroIfNeed(time.getMinutes())}:${addZeroIfNeed(time.getSeconds())}`;
    }

    return `${addZeroIfNeed(time.getHours())}:${addZeroIfNeed(time.getMinutes())}`;
}


class Alarm {
    constructor() {
        this.allAlarms = {}

        this.hoursSelector     = document.querySelector('.hours')
        this.minutesSelector   = document.querySelector('.minutes')
        this.allAlarmsSelector = document.querySelector('.allAlarms__list')

        this.addButton = document.querySelector('.add')
        this.stopButton = document.querySelector('.stop')

        this.ringtone = new Audio("./ringtone.mp3")

        this.displayAllAlarmsList()
        this.alarmIfNeed()
    }

    displayAllAlarmsList() {
        setInterval(
            () => {
                let allAlarmsHtml = ""

                const sortedAlarms = Object.keys(this.allAlarms).sort(
                    function(firstAlarm, secondAlarm){
                        return new Date(firstAlarm).getTime() - new Date(secondAlarm).getTime();
                    }
                )

                sortedAlarms.forEach(
                    (alaramTime) => {
                        allAlarmsHtml += `<li class="alarmsList__row">${getTimeString(new Date(alaramTime), false)}</li>`
                    }
                )

                this.allAlarmsSelector.innerHTML = allAlarmsHtml
            }
        )
    }

    alarmIfNeed() {
        setInterval(
            () => {
                if (this.allAlarms.length === 0) {
                    return
                }

                const currentTime = new Date()
                const sortedAlarms = Object.keys(this.allAlarms).sort(
                    function(firstAlarm, secondAlarm){
                        return new Date(firstAlarm).getTime() - new Date(secondAlarm).getTime();
                    }
                )
                const nearestAlarm = new Date(sortedAlarms[0])

                if ((currentTime.getHours() === nearestAlarm.getHours()) && (currentTime.getMinutes() === nearestAlarm.getMinutes()) && (currentTime.getSeconds() === nearestAlarm.getSeconds())) {
                    this.stopButton.style.display = "block"

                    this.ringtone.play()
                    
                    delete this.allAlarms[sortedAlarms[0]]
                }

            }, secondInMilliseconds
        )
    }

    stopAlarm () {
        this.ringtone.pause()
        this.ringtone.currentTime = 0
        this.stopButton.style.display = "none"
    }

    addAlarm() {
        const currentTime = new Date()
        const alarmTimeObject = this.getAlarmTimeFromDocument(currentTime)

        if (alarmTimeObject === undefined) {
            alert("invalid time")
            return
        }

        this.allAlarms[alarmTimeObject] = true
    }

    getAlarmTimeFromDocument(currentTime) {
        const alarmTime = currentTime
        const hours = Number(this.hoursSelector.value)
        const minutes = Number(this.minutesSelector.value)

        if (!this.validateInputTime(currentTime, hours, minutes)) {
            return undefined
        }

        alarmTime.setHours(hours)
        alarmTime.setMinutes(minutes)
        alarmTime.setSeconds(0)
        alarmTime.setMilliseconds(0)

        return alarmTime
    }

    validateInputTime(currentTime, hours, minutes) {
        if (Number(hours) > currentTime.getHours()) {
            return true
        }

        if (Number(hours) === currentTime.getHours() && (Number(minutes) > currentTime.getMinutes())) {
            return true
        }

        return false
    }
}


function main() {
    displayCurrentTime(currentTimeSelector)

    const legendaryAlarm = new Alarm()

    legendaryAlarm.addButton.addEventListener('click', () => {legendaryAlarm.addAlarm()})
    legendaryAlarm.stopButton.addEventListener('click', () => {legendaryAlarm.stopAlarm()})

}

main()
