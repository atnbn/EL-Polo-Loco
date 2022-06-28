class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementB<ID('image')<img id ="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    /**
         * 
         * @param {Array} arr - ['img/image1.png', 'img/image2.png',...] 
         */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)'
            this.imageCache[path] = img;
        });
    }

//     drawFrame(ctx) {
//         if (
//             this instanceof Character || 
//             this instanceof Chicken || 
//             this instanceof Bottles || 
//             this instanceof Coins || 
//             this instanceof LittelChicken || 
//             this instanceof ThrowableObject ||
//             this instanceof Endboss
//             ) {
//                 ctx.beginPath();
//                 ctx.lineWidth = '5';
//                 ctx.strokeStyle = 'blue';
//                 ctx.rect(this.x, this.y, this.width, this.height);
//                 ctx.stroke();
//         }
// }












    Fullscreen(){
        canvas.requestFullscreen();
    }




}







