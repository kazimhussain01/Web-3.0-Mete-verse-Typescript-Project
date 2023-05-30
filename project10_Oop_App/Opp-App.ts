#! /usr/bin/env node
class Car {
    color! : string;
    hp! : string;
    model! : number;
    _license!: string;
    //Create Class in Constructor Function

    constructor(color: string, hp: string, model: number){
        this.color = color;
        this.hp = hp;
        this.model = model;
    }

    //Create Getter Setter
    get license(){
        return this._license
    }
    set license (val: string){
        this._license = val;
    }

    displayAll(){
        return `color: ${this.color}, hp: ${this.hp}, model: ${this.model}`
    }

    carGear(){
        console.log("Car Gear Change");
    }

    carStop(){
        return "Car is Stop"
    }
}

    //* Object Creates
    const culuts = new Car('Yellow', "1000cc", 1000);
    const civic = new Car('white', "1300cc", 1500);
    const Parado = new Car('Black', "2000cc", 3000);
    culuts.license = "cl2026";
    civic.license = "cv2026";
    Parado.license = "cl2026"

    //* Objects Call
    console.log(culuts.displayAll()+",","license" +" "+ culuts._license);
    console.log(civic.displayAll()+",","license" +" "+ civic._license);
    console.log(Parado.displayAll()+",","license" +" "+  Parado._license);
