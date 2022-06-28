class Chicken extends CollidableObject {
    y = 335; // height position
    height = 100; // img size
    width = 75;   // Horizontal Size
    energy = 20;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',

    ]
    
    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ]



    chicken_sound = new Audio ('audio/chicken.mp3');
    soundStop = false;
    dead_sound = new Audio('audio/464623_7787874-lq.mp3')



    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.loadImages(this.IMAGES_WALKING); // loads the array
        this.loadImages(this.IMAGES_DEAD);
        this.x = 400 + Math.random() * 4000; // Calculaits the spawn from the chicken
        this.speed = 0.15 + Math.random() * 0.25; // Speed from Chicken
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); //60 FPS

       

        

        setInterval(() => {
            // this.dead_sound.pause()
            if (this.energy == 0) {
                this.dead_sound.play();
                this.soundStop = true;
                this.playAnimation(this.IMAGES_DEAD);
                if (this.soundStop == true) {
                    this.dead_sound.pause();
                }
            }else{
            this.playAnimation(this.IMAGES_WALKING);
        }}, 200);


    }


    
}