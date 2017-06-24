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

var pointer = 0;

var scoreArray = [50,100,150,200,300,310,450,560,600,650,700,750,800,850,900,1100,1200,1300,1400,1410,1450,1460,1480,1530,1560,1570,1590,1610,1700,1710,1720,1740,1780,1800,1830,1880,1950,2000,2010,2020,2050,2070,2090,2130,2140,2190,2240,2300,2310,2320,2340,2360,2400,2420,2440,2500,2550,2600,2700,2800,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4030,4060,4100,4150,4200,4250,4300,4350,4400,4450,4500,4550,4600,4700,4800,4900,5000];


function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = "#4488AA";


    dots = game.add.group();
    dots.enableBody = true;

    block = game.add.sprite(400, 300, 'block');
    game.physics.arcade.enable(block);
    block.body.collideWorldBounds = true;

    scoreText = game.add.text(16, 16, '(score 0)', { fontSize: '32px', fill: '#000' });

    cursors = game.input.keyboard.createCursorKeys();
    
}

function update() {

    game.physics.arcade.overlap(block, dots, collectDot, null, this);

    block.body.velocity.x = 0;
    block.body.velocity.y = 0;

    var speed = 200;

    if (cursors.left.isDown) {
        block.body.velocity.x -= speed;
    }
    if (cursors.right.isDown) {
        block.body.velocity.x += speed;
    }
    if (cursors.up.isDown) {
        block.body.velocity.y -= speed;
    }
    if (cursors.down.isDown) {
        block.body.velocity.y += speed;
    }

    if (block.body.velocity.y != 0 && block.body.velocity.x != 0) {
    	block.body.velocity.y *= 0.707;
    	block.body.velocity.x *= 0.707;
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

	var messageArray = [
	'(score '+score+')',
	'aufgrund der überraschend großen Nachfrage\nwurden auch die nachrichten in diesem update\nüberarbeitet (score '+score+')',
	'gleich vorweg ... es würd mich wundern wennst\nalle nachrichten nur durch spielen herausfinden\nwürdest mx (score '+score+')',
	'falls dus doch sehen solltest dann is das ende\nmit ###FINISH### gekennzeichnet und es kommen\ndanach keine neuen nachrichten mehr (score '+score+')',
	'logischerweise sieht man aber ohne nachschauen\nnicht wie viele punkte notwendig sind um bis ans\nende zu kommen (score '+score+')',
	'auch werden die intervalle zwischen den einzelnen\nnachrichten mehr (score '+score+')',
	'oder auch weniger ... (score '+score+')',
	'aber für gewöhnlich schon mehr (score '+score+')',
	'an deiner stelle würd ich mich jetzt langsam\nfragen wie viel zeit ich wirklich investiert habe\num diese nachrichten zu schreiben (score '+score+')',
	'oder ob ich iwann einfach anfange einen blödsinn\nzu schreiben (score '+score+')',
	'fifnwöaiföiwafejwkejffjeiafjiuöwiefj (score '+score+')',
	'oder ob ich einfach nur mehr smileys\nanzeigen lass(score '+score+')',
	':) (score '+score+')',
	':-) (score '+score+')',
	'/:-) (score '+score+')',
	'nachdem dieses schreiben doch bissl zeit in\nanspruch nimmt würd ich einmal sagen\ndass für längere zeit keine neuen nachrichten\nmehr kommen damit sichs ein bissl ausgleicht\n(score '+score+')',
	'so nachdem du bis jetzt durchgehalten hast\nhast dir eine kleine belohnung verdient\nmehr dazu gleich (score '+score+')',
	'wie wärs mit einem denkspiel innerhalb\nvon diesem spiel (score '+score+')',
	'merk dir einfach die buchstaben/zeichen nach der\nreihe ... sie ergeben einen satz (score '+score+')',
	'hoffe du hast dich mental darauf vorbereiten können\naja btw die intervalle verändern sich jetzt dann\nwieder ein bissl damits nicht so einfach ist\n(score '+score+')',
	'nächste runde ist start (score '+score+')',
	'M (score '+score+')',
	'A (score '+score+')',
	'X (score '+score+')',
	'_ (score '+score+')',
	'D (score '+score+')',
	'S (score '+score+')',
	'T (score '+score+')',
	'_ (score '+score+')',
	'W (score '+score+')',
	'I (score '+score+')',
	'R (score '+score+')',
	'D (score '+score+')',
	'_ (score '+score+')',
	'D (score '+score+')',
	'A (score '+score+')',
	'S (score '+score+')',
	'_ (score '+score+')',
	'N (score '+score+')',
	'I (score '+score+')',
	'C (score '+score+')',
	'H (score '+score+')',
	'T (score '+score+')',
	'_ (score '+score+')',
	'F (score '+score+')',
	'A (score '+score+')',
	'D (score '+score+')',
	'_ (score '+score+')',
	'O (score '+score+')',
	'I (score '+score+')',
	'O (score '+score+')',
	'I (score '+score+')',
	'O (score '+score+')',
	'I (score '+score+')',
	'. (score '+score+')',
	'und hast du dir das im kopf\nmerken können? (score '+score+')',
	'btw der javascript code für diese textnachrichten\nis so grausig, dass am überlegen bin ob ich das\nnicht gscheiter mach ... (score '+score+')',
	'hmmm (score '+score+')',
	'vorher war hier eine nachricht die beschreibt\ndass ich es so lasse, aber ich muss\ndas jetzt doch ändern weil ich paar probleme\ndadurch bekomm lol (score '+score+')',
	'jetzt kommen wir langsam zu dem punkt\nwo ich mich frag wie lange ich das\nwirklich machen sollte (score '+score+')',
	'bzw wie dedicated du wirklich bist ... (score '+score+')',
	'ich muss schon sagen alle achtung (score '+score+')',
	'sofern du so weit spielen solltest (score '+score+')',
	'und nicht einfach den sourcecode anschaust\n(score '+score+')',
	'langsam is es so weit (score '+score+')',
	'ich weiß nicht mehr wirklch was ich\nschreiben soll (score '+score+')',
	'|.      | (score '+score+')',
	'|..     | (score '+score+')',
	'|...    | (score '+score+')',
	'|....   | (score '+score+')',
	'|.....  | (score '+score+')',
	'|...... | (score '+score+')',
	'|.....  | (score '+score+')',
	'|...... | (score '+score+')',
	'|.......| (score '+score+')',
	'|.......| (score '+score+')',
	'|h......| (score '+score+')',
	'|ha.....| (score '+score+')',
	'|hah....| (score '+score+')',
	'|haha...| (score '+score+')',
	'|haha..x| (score '+score+')',
	'|haha.mx| (score '+score+')',
	'|haha mx| (score '+score+')',
	'oioioi ... wie man sieht kennt meine\nkreativität keine grenzen (score '+score+')',
	'schön lansgam kommen wir dann zu\neinem ende (score '+score+')',
	'rate/comment/subscribe/follow (score '+score+')',
	'also dann (score '+score+')',
	'herr hauser (score '+score+')',
	'/offline\n###FINISH###\n(score '+score+')'];

	if (score >= scoreArray[pointer] && pointer < (scoreArray.length)){
		pointer++;
	}
	scoreText.text = messageArray[pointer];

}
