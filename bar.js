class Bar {

    constructor(length, width, color, unit="px")
    {
        this.length = length;
        this.width = width;
        this.color = color;
        this.unit = unit;
    }

    make() {
        let element = document.createElement('div');
        element.style.height = `${this.length}${this.unit}`;
        element.style.width = `${this.width}${this.unit}`;
        element.style.backgroundColor = this.color;
        return element;
    }

}

let container = document.querySelector(".container");
container.appendChild(new Bar(50,300,"green").make());
container.appendChild(new Bar(50,450,"red").make());
container.appendChild(new Bar(50,550,"yellow").make());
container.appendChild(new Bar(5.5,50.5,"blue", "rem").make());