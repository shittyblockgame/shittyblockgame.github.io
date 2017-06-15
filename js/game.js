var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamediv', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('dot', 'assets/dot.png');
    game.load.spritesheet('block', 'assets/block.png', 48, 48);

}

var block;
var cursors;

var dots;
var dotCount = 0;
var score = 0;
var scoreText;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = "#4488AA";


    dots = game.add.group();
    dots.enableBody = true;

    block = game.add.sprite(400, 300, 'block');
    game.physics.arcade.enable(block);
    block.body.collideWorldBounds = true;

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    cursors = game.input.keyboard.createCursorKeys();
    
}

function update() {

    game.physics.arcade.overlap(block, dots, collectDot, null, this);

    block.body.velocity.x = 0;
    block.body.velocity.y = 0;

    if (cursors.left.isDown) {
        block.body.velocity.x = -150;
    }
    else if (cursors.right.isDown) {
        block.body.velocity.x = 150;
    }
    else if (cursors.up.isDown) {
        block.body.velocity.y = -150;
    }
    else if (cursors.down.isDown) {
        block.body.velocity.y = 150;
    }
   
   	if (dotCount <= 0) {
   		var dot = dots.create(Math.random() * 800, Math.random() * 600, 'dot');
   		dotCount++;
   	}

}

function collectDot (block, dot) {
	dot.kill();
	dotCount--;
	score += 10;
	if (score >= 100) {
		scoreText.text = 'oioioi max wird das nicht langsam fad\ndu hast eh schon ' + score + ' punkte ...';
	} else {
		scoreText.text = 'Score: ' + score;
	}
}
