class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;
    speed = 0.15;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png')

        this.x = 0 + Math.random() * 500;
        this.animate();

    }
    animate(){      
        this.moveLeft();
    }


    moveLeft(){
                                    // Diese Funktion beweget die Bilder in einem gewissen Intervall
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/ 60) // <---- Hier wird die Intervalldauer eingegeben
    }
}


