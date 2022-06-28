class Character extends CollidableObject {
    y = 80;
    height = 250;
    width = 130;
    speed = 8.0;



    
    
    
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    
    
    
    
    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
        
    ];
    




    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ]




    
        IMAGES_DEAD = [
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
            
        ]
    
    
        IMAGES_STAYING = [
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
        ]
    
   
    
    
    
    
    world;

    walking_sound = new Audio('audio/running.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    game_sound = new Audio ('audio/Game-music.mp3');
    gameover_sound = new Audio('audio/gameover.mp3');
    

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_STAYING);
        this.applyGravity();
        this.animate();
        
    }
    animate() {
        
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight()
                this.otherDirection = false;
                this.walking_sound.play()
            }
            
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft()
                this.walking_sound.play();
                this.otherDirection = true;
            }
            
            if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jump_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        setInterval(() => {
            // if(this.energy > 0){
            //     this.game_sound.play()
            // }
            if(this.isDead()){
                this.playAnimation(this.IMAGES_DEAD);
                // this.game_sound.pause()
                this.gameover_sound.play();

            }   else if(this.isHurt()){
                this.playAnimation(this.IMAGES_HURT); 
            }
            
            else if(this.isAboveGround()){
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                this.playAnimation(this.IMAGES_WALKING);
            } else{
                this.playAnimation(this.IMAGES_STAYING);
            }
            
        }, 100);
    }
    
    jump() {
        this.speedY = 30;
    }

    stamp(){
        this.enemy.energy -=   5;
     }
 
     isStamping(enemy) { //world.js
        // console.log(super.getBottomPos() - enemy.getTopPos());
        return super.getBottomPos() - enemy.getTopPos() <= 45.5;
    }
}
