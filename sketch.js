
let tablero

let anchoCasilla = 60

let anchoCanvas = anchoCasilla * 8

function setup() {

	createCanvas(anchoCanvas, anchoCanvas)

	background(255, 255, 255)

	tablero = new Array(8)
		  

	for (let i = 0; i < tablero.length; i++) { 
		tablero[i] = new Array(8)
	} 



	let y = 0

	for (let i = 0; i < 8; i++) { 

		let x = 0

		for (let j = 0; j < 8; j++) { 

			let claro = ((j+i) % 2 == 0)

			tablero[i][j] = new Casilla(x,y,anchoCasilla, claro)

			x+=anchoCasilla

		} 

		y+=anchoCasilla
	}  

}

function draw() {

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {

			tablero[i][j].mostrar()

		}
	}

}


function Casilla(x,y,ancho, claro){

	this.ancho = ancho

	this.x = x

	this.y = y

	this.claro = claro

	this.mostrar = () => {

		if(this.claro){
			fill(159, 144, 176)
		}else{
			fill(131, 78, 148)
		}

		noStroke()

		rect(this.x, this.y, this.ancho, this.ancho)	


	}

}
