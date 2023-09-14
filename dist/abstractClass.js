"use strict";
class TakePhoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    //method
    getReelTime() {
        //comlex calc
        return 8;
    }
}
//cannot implement in abstract
class Instagrams extends TakePhoto {
    getsaia() {
        console.log("Method not implemented.");
    }
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
}
//you can create objects from the class who is inheriting it bro
const hc = new Instagrams("test", "test1", 5);
hc.getReelTime();
