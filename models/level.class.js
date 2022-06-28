class Level {
    // character = new Character(); // wird anstatt in World in level definiert
    level_end_x =  4400;
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    constructor(backgroundObjects, enemies, endboss, clouds  ,bottles , coins) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.bottles = bottles;
        this.coins = coins;
    }
}