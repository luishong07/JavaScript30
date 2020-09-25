const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
 

function togglePlay(){
    //alternative way  
    // const method = video.paused ? 'play' : 'paused'
    // video[method]()

    if(video.paused){
        video.play()
    }
    else{
        video.pause()
    }
} 
function updateButton(){
    const icon = this.paused  ? '►' : '❚ ❚'
    toggle.textContent = icon
    console.log("Do the thing")
}

function skip(){
    console.log("Skip the thing",this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    console.log(this.value)
    video[this.name] = this.value
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.flexBasis = `${percent}%`

}

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration
    video.currentTime = scrubTime
    console.log(e)
}
video.addEventListener('timeupdate',handleProgress)
video.addEventListener('click',togglePlay) 
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
toggle.addEventListener('click',togglePlay) 
skipButtons.forEach(b => b.addEventListener('click',skip))
ranges.forEach(r => r.addEventListener('change',handleRangeUpdate))
progress.addEventListener('click',scrub)
let mousedown = false
progress.addEventListener('mousemove',(e )=> mousedown && scrub(e))
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup' ,()=> mouseup = false )


