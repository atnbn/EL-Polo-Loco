class MovableObject extends DrawableObject {
        x = 120;
        y = 280;


        speed = 0.15;
        otherDirection = false;
        speedY = 0;
        acceleration = 2.5;
        energy = 100;
        lastHit = 0;

        applyGravity() {
                setInterval(() => {
                        if (this.isAboveGround() || this.speedY > 0) {
                                this.y -= this.speedY;
                                this.speedY -= this.acceleration;
                        }


                }, 1000 / 25);
        }

        isStamping(enemy) { //world.js
                return super.getBottomPos() - enemy.getTopPos() <= 20;
        }
        isAboveGround() {
                if (this instanceof ThrowableObject) {   // Throwable object should always fall
                        return true;
                } else {
                        return this.y < 180;
                }
        }
        // loadImage ('img/test.png)
        isCollidingObjects(mo) {
                return this.x + this.width > mo.x &&
                        this.y + this.height > mo.y &&
                        this.x < mo.x &&
                        this.y < mo.y + mo.height;
        }



        
        stop() {
                setInterval(() => {
                    this.x == this.speed;
                }, 1000 / 60);
            }


        hitEndboss(){
                this.energy -= 25;
                if(this.energy < 0){
                        this.energy = 0;
                } else this.lastHitEndboss = new Date().getTime();
        }




        hit() {
                this.energy -= 20;
                if (this.energy < 0) {
                        this.energy = 0;
                } else {
                        this.lastHit = new Date().getTime();
                }
        }

        collecting() {
                this.bottleAmount + 1;
                console.log(bottleAmount);
        }

        isHurt() {
                let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
                timepassed = timepassed / 1000; // Difference in s

                return timepassed < 1;

        }

        isDead() {
                return this.energy == 0;

        }

        playAnimation(images) {
                let i = this.currentImage % images.length // let i = 6 % 6; => 0, Rest 1 // i = 0, 1, 2, 3, 4, 5, 0 
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
        }


        moveRight() {
                this.x += this.speed;


        }

        moveLeft() {
                this.x -= this.speed;
                
        }

        jumpAttack(){
                // Chickens Jumps Forward
                this.y -= 15
                this.x -= 15
                setTimeout(() => {
                        this.y += +5   
                        this.x -= 5  
              }, 400);
               setTimeout(() => {
                       this.y += +5    
                       this.x -= 5  

               }, 300);

               setTimeout(() => {
                       this.y += +5
                       this.x -= 5  

               }, 200);
        }


        jump() {
                this.speedY = 30;
        }


        getBottomPos() {
                return this.y + this.height;
        }

        getTopPos() {
                return this.y;
        }





}