class Coins extends CollidableObject {

    width = 100;
    height = 100;
    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ]

    coinsAmount = 0;

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES);
        this.y = 100 + Math.random() * 100;
        this.x = 500 + Math.random() * 3200;
        this.animate();
        this.setPercentage(0);
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 1) {
            return 1;
        } else if (this.percentage == 2) {
            return 2;
        } else if (this.percentage == 3) {
            return 3;
        } else if (this.percentage == 4) {
            return 4;
        } else if (this.percentage == 5) {
            return 5;
        } else {
            return 0;
        }


    }
 
}

