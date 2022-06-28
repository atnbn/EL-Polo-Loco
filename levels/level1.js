let level1;

// start_music = new Audio('audio/Game-music.mp3');
button_sound = new Audio('audio/button.mp3');
function initLevel() {
    StartGame();

    level1 = new Level(
        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 5),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 5),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 5),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 5),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 6),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 6),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 6),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 6),


            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 7),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 7),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 7),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 7)
        ],
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new LittelChicken(),
            new LittelChicken(),
            new LittelChicken(),
            new LittelChicken(),
            new LittelChicken(),
            new LittelChicken(),

        ],
        [
            new Endboss()
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud()
        ],
        [
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),



        ],
        [
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            
        ],




    );
    function StartGame() {
        document.getElementById('startButton').classList.add('d-none');
        document.getElementById('start-img').classList.add('d-none');
        this.button_sound.play();
    }




}
