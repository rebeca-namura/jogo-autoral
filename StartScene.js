class StartScene extends Phaser.Scene {
	constructor(){
		super({ key: 'StartScene' })
	}

	preload() {
		this.load.image('bg', 'assets/bg-fundomar.jpg');
		
	}


	create() {
		this.add.image(widthGame/2, heightGame/2, 'bg').setScale(3);
        this.add.text(650, heightGame/2, 'Clique para começar', { fontSize: '60px', fill: '#0f0' });
        this.input.on('pointerdown', () => {
		this.scene.stop('StartScene')
		this.scene.start('GameScene1')
		})
	}

	update() {
		
}
}