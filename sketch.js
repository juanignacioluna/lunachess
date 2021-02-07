
let tablero

let anchoCasilla = 60

let anchoCanvas = anchoCasilla * 8

let imgAlfilNegro, imgAlfilBlanco, imgReyNegro, imgReyBlanco, imgCaballoNegro, imgCaballoBlanco

let imgPeonNegro, imgPeonBlanco, imgReinaNegra, imgReinaBlanca, imgTorreNegra, imgTorreBlanca

function preload() {
	imgAlfilNegro = loadImage('./assets/alfil-negro.png')
	imgAlfilBlanco = loadImage('./assets/alfil-blanco.png')
	imgReyNegro = loadImage('./assets/rey-negro.png')
	imgReyBlanco = loadImage('./assets/rey-blanco.png')
	imgCaballoNegro = loadImage('./assets/caballo-negro.png')
	imgCaballoBlanco = loadImage('./assets/caballo-blanco.png')
	imgPeonNegro = loadImage('./assets/peon-negro.png')
	imgPeonBlanco = loadImage('./assets/peon-blanco.png')
	imgReinaNegra = loadImage('./assets/reina-negra.png')
	imgReinaBlanca = loadImage('./assets/reina-blanca.png')
	imgTorreNegra = loadImage('./assets/torre-negra.png')
	imgTorreBlanca = loadImage('./assets/torre-blanca.png')
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





