class Endboss extends CollidableObject {
    energy = 100;
    world;
    unlockBoss;
    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    
    
    
    ]

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    
    ]

    IMAGES_ATTACK =[
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',        
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
]
    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
        
    ]



    
   
    constructor(){

     

        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = 4600;
        this.y = 50;
        this.width = 200;
        this.height = 420;
        this.animate();
    }

    animate() {


        setInterval(() => { 
            
            if(this.energy == 0){
              this.playAnimation(this.IMAGES_DEAD);
            }    
             else if(this.isHurt()){
                console.log('Endboss hit')
                this.playAnimation(this.IMAGES_HURT);
             }
             else if(this.kickAttack == true){
                this.playAnimation(this.IMAGES_ATTACK)
             }
            else if (this.kickAttack == false) {
                
                this.playAnimation(this.IMAGES_WALKING)
            }  {
            
        }}, 200);



        
        setInterval(() =>{
            if(world.character.x > 3800){
                this.unlockBoss = true;
                console.log(this.unlockBoss)           
            }  if (this.unlockBoss == true){
                this.moveLeft();
            }
        }, 1000/60);

        setInterval(() =>{
            if(this.unlockBoss == true){
                this.jumpAttack();
                // this.playAnimation(this.IMAGES_ATTACK)
                this.kickAttack = true;
                setTimeout(() => {
                    this.kickAttack = false;
                    console.log('unlockboss =' , this.unlockBoss) 
                }, 1000);
            }
        },2000);
    
        
    }

        
    
}


