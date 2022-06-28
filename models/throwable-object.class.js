class ThrowableObject extends CollidableObject {

    IMAGES_THROWING = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ]



    IMAGES_SPLASHING = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ]

    splash = false;

    world;
    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png');
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_SPLASHING);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 55;
        this.speedY = 15;

        this.applyGravity();
        this.throw();
    }


    throw() {
        setInterval(() => {
            if (this.splash == true) {
                this.playAnimation(this.IMAGES_SPLASHING);
            } else {
                this.playAnimation(this.IMAGES_THROWING);
            }
        }, 100)

        setInterval(() => {
            this.x += 12.5;
        }, 25)

    }
}