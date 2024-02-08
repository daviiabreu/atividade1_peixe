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

var peixe;
var tubarao;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixe_turquesa.png');
    this.load.image('coral', 'assets/coral.png');
    this.load.image('barco', 'assets/barco.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5).setOrigin(2, 7);
    this.add.image(450, 450, 'coral').setScale(0.5).setOrigin(0, 0.25);
    this.add.image(500, 500, 'barco').setScale(0.8).setOrigin(1.4, 0.5);
    
    tubarao =  this.add.image(133, 126, 'tubarao')
    peixe = this.add.image(400, 300, 'peixe').setOrigin(1, 1);

    tubarao.setFlip(true, false);
    peixe.setFlip(true, false);
}

function update() {
    
    peixe.x = this.input.x * 1.8;
    peixe.y = this.input.y * 1.8;

    tubarao.x = this.input.x;
    tubarao.y = this.input.y;
}