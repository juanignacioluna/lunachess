
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