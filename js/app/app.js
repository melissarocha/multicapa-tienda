

class Entrada {

	constructor(canti, prod) {

		this.producto = prod;
		this.canti = canti;
		this.importe = canti * prod.precio;
	}
}



class Dao {

	constructor (entity){}

	save(entity){ }

	delete(entity){ }

	update(entity){ }

	getAll(){ }

	getOne(id){ }
}


class Tienda
{

	constructor() {

		this.dao = new Dao(this.producto);
		this.usuario = new Usuario();
		this.productos = [];
		/*
			rest en el server que descargue los productos
		*/
	}


	getProduct(nom){

		for(i = 0; i< this.productos.length; i++)
			if(this.productos[i].nombre == nom)
				return this.productos[i];

		return dao.getOne(nom);

		return null;
	}


	addProd(prod){
		this.productos.push(prod);

		this.dao.save(prod);
	}


	addProdToCar(c, p){

		//var entrada = new Entrada(c, p);
		//entrada.canti = c;
		//entrada.producto = p;

		//this.usuario.carrito.addEntrada(entrada);

		//this.usuario.carrito.updateProd(entrada);

		this.upDateProdInCar(c, p);
	}

	upDateProdInCar(c, p){

		var entrada = new Entrada(c, p);
		this.usuario.carrito.updateProd(entrada);
	}



}


class Producto {

	constructor(nom, pre) {

		this.nombre = "";
		this.precio = 0.0;
	}
}



class Usuario {

	constructor(nom) {

		this.nombre = nom;
		this.carrito = new Carrito();
	}
}


class Carrito {

	constructor () {

		this.total = 0.0;
		this.subTotal = 0.0;
		this.iva = 0.0;
		this.listaEntradas = []; //son entradas
	}

	getListProdInCar()
	{

		return this.listaEntradas;
	}


	deleteProd(prod)
	{
		console.log("DELETE PROD", prod)
		if(prod != undefined)
		console.log("ENTRE IF");
			for(var i = 0; i < this.listaEntradas.length; i++){
				console.log("PROD NAME", prod);
				console.log("this.listaEntradas[i].producto.nombre", this.listaEntradas[i].producto.nombre);
				if(prod == this.listaEntradas[i].producto.nombre){
					console.log("ENTRE SEGUNDO IF");
					this.totalizar(this.listaEntradas[i].importe, -1);
					this.listaEntradas.splice(i, 1);
				}
			}

	}

	updateProd(e) {
		// this.deleteProd(e.producto);
		this.addEntrada(e);
	}

	totalizar(importe, signo){
	console.log("TOTALIZAR IMPORTE");
	console.log("THIS SUBTOTAL", this.subTotal);
console.log("THIS iva", this.iva);
console.log("THIS total", this.total);
			this.subTotal+= (importe * signo);
			this.iva = this.subTotal * 0.16;
			this.total = this.iva + this.subTotal;
			console.log("AFTER");
			console.log("THIS SUBTOTAL", this.subTotal);
		console.log("THIS iva", this.iva);
		console.log("THIS total", this.total);
	}

	addEntrada(e)
	{
		var aux = false;
		var index = 0;
		if(this.listaEntradas.length > 0){
			this.listaEntradas.forEach(function(entrada, i){
				if(entrada.producto === e.producto){
					entrada.canti ++;
					aux = false;
				}else{
					aux = true;
				}
			});

			if(aux){
				this.listaEntradas.push(e);
			}
		}else{
			this.listaEntradas.push(e);
		}



		this.totalizar(e.importe, 1);
	}
}
