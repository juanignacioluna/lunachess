

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