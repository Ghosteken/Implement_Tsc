abstract class TakePhoto {
    constructor(
        public cameramode: string,
        public filter: string,
    ) {

    }
    //method definitions
    abstract getsaia(): void
    //method
    getReelTime(): number{
        //comlex calc
        return 8
    }
}






//cannot implement in abstract
class Instagrams extends TakePhoto {
    getsaia(): void {
        console.log("Method not implemented.");
    }
    constructor(
        public cameramode: string,
        
        public filter: string,
        public burst: number,
    ) {
        super(cameramode, filter);
    }


}
//you can create objects from the class who is inheriting it bro
const hc = new Instagrams("test", "test1",5);
hc.getReelTime()
