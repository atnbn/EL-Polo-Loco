class LittelChicken extends CollidableObject {
    y = 360; // height position
    height = 85; // img size
    width = 55;   // Horizontal Size
    energy = 20;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png',

    ]


    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    ]
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png')
        this.loadImages(this.IMAGES_WALKING); // loads the array
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 3000; // Calculaits the spawn from the chicken
        this.speed = 0.20 + Math.random() * 0.25; // Speed from Chicken
        this.animate();
    }
    animate() {
        
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); //60 FPS

      
            setInterval(() => {
                if (this.energy == 0) {
                    this.playAnimation(this.IMAGES_DEAD);
                }else{
                this.playAnimation(this.IMAGES_WALKING);
            }}, 200);


        }}