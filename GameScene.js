class GameScene1 extends Phaser.Scene {
	constructor(){
		super({ key: 'GameScene1' })
	}




	preload() {
		this.load.image('bg', 'assets/bg-fundomar.jpg');
		this.load.image('plataforma', 'assets/plat.png');
		this.load.image('concha', 'assets/concha1.png');
		this.load.spritesheet('peixe', 'assets/sprite-peixe.png',  { frameWidth: 256, frameHeight: 256 });
	}


	create() {
		this.add.image(widthGame/2, heightGame/2, 'bg').setScale(3);
		this.plataforma = this.physics.add.staticImage(700, 800, 'plataforma').setScale(1);

		this.concha = this.physics.add.image(widthGame/2, 0, 'concha').setScale(0.1);
		this.concha.setCollideWorldBounds(true);
		this.concha.setBounce(0.7);
		this.physics.add.collider(this.concha, this.plataforma);
	
		this.player = this.physics.add.sprite(300, 500, 'peixe').setScale(0.5);
		this.player.body.setSize(230, 150);
		this.player.body.setCollideWorldBounds(true);

		this.anims.create({
			key: 'nadar',
			frames: this.anims.generateFrameNumbers('peixe', { start: 0, end: 5 }),
			frameRate: 8,
			repeat: -1
		  })

		 this.player.anims.play('nadar', true);
		 this.cursors = this.input.keyboard.createCursorKeys();
		 this.physics.add.collider(this.player, this.plataforma);

		this.physics.world.setBounds(0, 0, widthGame, heightGame);	
		
		
		this.physics.add.overlap(this.player, this.concha, function () {
            // Torna a moeda invisível
            this.concha.setVisible(false);

            // Define uma nova posição para a moeda
            var posicaoConchaY = Phaser.Math.RND.between(50, 650);
            this.concha.setPosition(posicaoConchaY, 100);

            // Atualiza a pontuação e o placar
            pontuacao ++;
            placar.setText('Conchas:' + pontuacao);

            // Torna a moeda visível novamente
            this.concha.setVisible(true);
            });
	}

	update() {
		if (this.cursors.left.isDown) {
			this.player.setVelocityX(-220)
			this.player.anims.play('nadar', true)
			this.player.setFlipX(true)
		  } else if (this.cursors.right.isDown) {
			this.player.setVelocityX(220)
			this.player.anims.play('nadar', true)
			this.player.setFlipX(false)
		  } else {
			this.player.setVelocityX(0)
			this.player.anims.play('nadar', true)
		  }

		  if (this.cursors.up.isDown) {
			this.player.setVelocityY(-220)
			this.player.anims.play('nadar', true)
			
		  } else if (this.cursors.down.isDown) {
			this.player.setVelocityY(220)
			this.player.anims.play('nadar', true)
			
		  } else {
			this.player.anims.play('nadar', true)
		  }
		}
		
}
