class Clock{
    $container;
    $time;
    $btnStart;
    $btnStop;
    $btnPause;
    timeInterval;
    constructor(){
        this.$container  = document.createElement("div");

        this.$time = document.createElement("span")
        this.$time.innerHTML = "00:00"

        this.$btnStart = document.createElement("button")
        this.$btnStart.innerHTML = "start"
        this.$btnStart.addEventListener("click",this.start)

        this.$btnStop = document.createElement("button")
        this.$btnStop.innerHTML = "stop"
        this.$btnStop.addEventListener("click",this.stop)

        this.$btnPause = document.createElement("button")
        this.$btnPause.innerHTML = "pause"
        this.$btnPause.addEventListener("click",this.pause)

        // this.$test1 = `<button>Hello</button>`

        this.seconds = 0
        this.minutes = 0
        this.timeInterval = null
        this.m = ""
        this.s = ""
    }
    start = ()=> {
        if(this.timeInterval){
            return
        }
        this.timeInterval = setInterval(()=>{
            this.seconds ++
            this.updateTime()
        },1000)
    }
    updateTime = ()=>{
        if(this.seconds > 59){
            this.minutes++
            this.seconds = 0
        }
        if(this.minutes <10){
            this.m = "0" + this.minutes
        }else{
            this.m = this.minutes
        }
        if(this.seconds <10){
            this.s = "0" + this.seconds
        }else{
            this.s = this.seconds
        }
        this.$time.innerHTML = `${this.m}:${this.s}`
    }
    stop = ()=>{
        if(this.timeInterval){
            clearInterval(this.timeInterval)
            this.timeInterval = null
            this.seconds = 0
            this.minutes = 0
            this.$time.innerHTML = `00:00`
        }
    }
    pause = ()=>{
        if(this.timeInterval){
            clearInterval(this.timeInterval)
            this.timeInterval = null
        }
    }
    render(){
        this.$container.appendChild(this.$time)
        this.$container.appendChild(this.$btnStart)
        this.$container.appendChild(this.$btnStop)
        // this.$container.innerHTML = this.$test1
        this.$container.appendChild(this.$btnPause)

        return this.$container
    }
}