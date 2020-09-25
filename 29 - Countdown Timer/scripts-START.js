 let countdown
 let timeDisplay = document.querySelector('.display__time-left')
 let endTime = document.querySelector('.display__end-time')
 let buttons = document.querySelectorAll('[data-time]')

function timer(seconds){
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds*1000
    displayTimeLeft(seconds)
    displayEndTime(then)
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000)

        if(secondsLeft <  0){
            clearInterval(countdown)
            return
        }
        displayTimeLeft(secondsLeft)
    },1000 )
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60)
    const remainderSeconds = seconds%60
    const display = `${minutes}:${remainderSeconds < 10 ?'0':''}${remainderSeconds}`
    timeDisplay.textContent = display
    console.log(seconds)
}

function displayEndTime(timestamp){
    // console.log("yohohoho")
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes =  end.getMinutes()
    endTime.textContent =  `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0':''}${minutes }`
}
// console.log(endTime)
function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds )
}

buttons.forEach(b => b.addEventListener('click',startTimer))
document.customForm.addEventListener('submit', function(e){
    e.preventDefault()
    const mins = this.minutes.value
    timer(mins*60)
    this.reset()
})