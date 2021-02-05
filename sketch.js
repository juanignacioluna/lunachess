
let tablero

let anchoCasilla = 60

let anchoCanvas = anchoCasilla * 8

let imgAlfilNegro, imgAlfilBlanco, imgReyNegro, imgReyBlanco, imgCaballoNegro, imgCaballoBlanco

let imgPeonNegro, imgPeonBlanco, imgReinaNegra, imgReinaBlanca, imgTorreNegra, imgTorreBlanca

function preload() {
	imgAlfilNegro = loadImage('alfil-negro.png')
	imgAlfilBlanco = loadImage('alfil-blanco.png')
	imgReyNegro = loadImage('rey-negro.png')
	imgReyBlanco = loadImage('rey-blanco.png')
	imgCaballoNegro = loadImage('caballo-negro.png')
	imgCaballoBlanco = loadImage('caballo-blanco.png')
	imgPeonNegro = loadImage('peon-negro.png')
	imgPeonBlanco = loadImage('peon-blanco.png')
	imgReinaNegra = loadImage('reina-negra.png')
	imgReinaBlanca = loadImage('reina-blanca.png')
	imgTorreNegra = loadImage('torre-negra.png')
	imgTorreBlanca = loadImage('torre-blanca.png')
}

function setup(){

	createCanvas(anchoCanvas, anchoCanvas)

	background(255, 255, 255)

	tablero = new Array(8)
		  

	for (let i = 0; i < tablero.length; i++) { 
		tablero[i] = new Array(8)
	} 


	let y = 0

	for (let i = 0; i < 8; i++) { 

		let x = 0

		let pieza, tipo, color

		for (let j = 0; j < 8; j++) { 

			let claro = ((j+i) % 2 == 0)

			if(i>=2&&i<=5){
				pieza=null
			}else if(i==6||i==1){

				tipo = "peon"

				switch (i) {
					case 1:
						color="negro"
						break;
					case 6:
						color="blanco"
						break;
				}

				pieza = new Pieza(x,y,anchoCasilla,tipo,color)

			}else{

				if(i==0){
					color="negro"
				}else{
					color="blanco"
				}

				switch (j) {
					case 0:
					case 7:
						tipo="torre"
						break;
					case 1:
					case 6:
						tipo="caballo"
						break;
					case 2:
					case 5:
						tipo="alfil"
						break;
					case 3:
						tipo="reina"
						break;
					case 4:
						tipo="rey"
						break;
				}

				pieza = new Pieza(x,y,anchoCasilla,tipo,color)

			}

			tablero[i][j] = new Casilla(x,y,anchoCasilla,claro, pieza)

			x+=anchoCasilla

		} 

		y+=anchoCasilla
	}  

}

function draw(){

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {

			tablero[i][j].mostrar()

			if(tablero[i][j].pieza){
				tablero[i][j].pieza.mostrar()
			}
			

		}
	}

}

function Pieza(x,y,ancho,tipo,color,fila,columna) {

	this.ancho = ancho

	this.x = x

	this.y = y

	this.tipo = tipo

	this.color = color

	this.fila = fila

	this.columna = columna

	this.img

	switch (this.tipo) {
		case 'peon':
			if(this.color=="blanco"){
				this.img=imgPeonBlanco
			}else{
				this.img=imgPeonNegro
			}
			break;
		case 'torre':
			if(this.color=="blanco"){
				this.img=imgTorreBlanca
			}else{
				this.img=imgTorreNegra
			}
			break;
		case 'caballo':
			if(this.color=="blanco"){
				this.img=imgCaballoBlanco
			}else{
				this.img=imgCaballoNegro
			}
			break;
		case 'alfil':
			if(this.color=="blanco"){
				this.img=imgAlfilBlanco
			}else{
				this.img=imgAlfilNegro
			}
			break;
		case 'reina':
			if(this.color=="blanco"){
				this.img=imgReinaBlanca
			}else{
				this.img=imgReinaNegra
			}
			break;
		case 'rey':
			if(this.color=="blanco"){
				this.img=imgReyBlanco
			}else{
				this.img=imgReyNegro
			}
			break;
	}

	this.mostrar = () => {

		image(this.img, this.x, this.y, this.ancho, this.ancho)

	}

}


function Casilla(x,y,ancho,claro,pieza) {

	this.ancho = ancho

	this.x = x

	this.y = y

	this.claro = claro

	this.pieza = pieza

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
