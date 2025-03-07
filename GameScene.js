class GameScene1 extends Phaser.Scene {
	constructor(){
		super({ key: 'GameScene1' })
	}

	preload() {
		this.load.image('bg', 'assets/bg-fundomar.jpg');
		this.load.image('plataforma', 'assets/plat.png');
		this.load.spritesheet('peixe', 'assets/sprite-peixe.png',  { frameWidth: 256, frameHeight: 256 });

		
	}


	create() {
		this.add.image(widthGame/2, heightGame/2, 'bg').setScale(1.7);
		this.add.image(700, 800, 'plataforma').setScale(1);

		this.player = this.physics.add.sprite(300, 500, 'peixe').setScale(0.8)
		this.player.setCollideWorldBounds(true)

		this.anims.create({
			key: 'nadar',
			frames: this.anims.generateFrameNumbers('peixe', { start: 0, end: 5 }),
			frameRate: 8,
			repeat: -1
		  })

		 this.player.anims.play('nadar', true);
	}

	update() {
		
}
}