var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/tartaruga.png');
    this.load.image('coral', 'assets/coral.png');
    this.load.image('barco', 'assets/barco.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5).setOrigin(2, 7);
    this.add.image(450, 450, 'coral').setScale(0.5).setOrigin(0, 0.25);
    this.add.image(500, 500, 'barco').setScale(0.8).setOrigin(1.4, 0.5);
    

    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5);

    peixinho.setFlip(true, false);
}

function update() {
    
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}