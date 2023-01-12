class Person {
    name;
    jin;
    undur;
    nas;
    huis;
    constructor() {
        this.gar = 3;
        this.hul = 8;
    }
}


class oyutan extends Person {
    constructor() {
        this.name = `Bagsh`;
        this.jin = 60;
        this.undur = 300;
        this.nas = 48;
        this.huis = `goku`;
    }
}

const suragch = new oyutan();
console.log(suragch)
