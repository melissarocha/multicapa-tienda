
var listaProd = $("#listaProd");

var listaCarrito = $("#carrito");



function loadProdsInUi(arr, ti){

	$("#lbl_total").html("<strong>Total:</strong> " + ti.usuario.carrito.total);
	$("#lbl_iva").html("IVA: " + ti.usuario.carrito.iva);
	$("#lbl_subTotal").html("SubTotal: " + ti.usuario.carrito.subTotal);
	listaCarrito.html("No tienes productos en el carrito");

	for( i = 0; i < arr.length; i++)
	{

		listaProd.append(
			"<div class='col-sm-4'>" +
				"<div class='product-image-wrapper'>" +
					"<div class=single-products'>"+
							"<div class='productinfo text-center'>"+
								"<img src=" + arr[i].img +" alt='' />"+
								"<h2> $"+ arr[i].precio + "</h2>"+
								"<p>" + arr[i].nombre + "</p>" +
								'<button class="btn btn-default add-to-cart" prod="'+ arr[i].nombre +'" id="btnAdd' + i + '"> <i class="fa fa-shopping-cart"></i>Add to cart</button>' +
							"</div>"+

					"</div>"+
				"</div>"+
			"</div>"
		);

			$("#btnAdd" + i).click(function(){

			ti.addProdToCar(1, ti.getProduct($(this).attr("prod")));
			$("#lbl_total").html("<strong>Total:</strong> " + ti.usuario.carrito.total);
			$("#lbl_iva").html("IVA: " + ti.usuario.carrito.iva);
			$("#lbl_subTotal").html("SubTotal: " + ti.usuario.carrito.subTotal);

			listaCarrito.html("");
			//listaEntradas
			for (var x = 0; x < ti.usuario.carrito.listaEntradas.length; x++) {
				listaCarrito.append(
          "<li style='border-bottom:  2px dashed lightgray;margin-bottom: 15px;'>"+
            "<div >"+
              "<strong>"+ti.usuario.carrito.listaEntradas[x].producto.nombre+"</strong>"+
              "<p>Piezas:" + ti.usuario.carrito.listaEntradas[x].canti +"</p>"+
              "<p>Precio Unitario:" + ti.usuario.carrito.listaEntradas[x].producto.precio + "</p>"+
              "<p>Total:"+ (ti.usuario.carrito.listaEntradas[x].canti*ti.usuario.carrito.listaEntradas[x].producto.precio) +"</p>"+
							// '<button style="border:  none;color:  darkred;text-align: right;width:  100%;margin-bottom: 10px;"" prod="'+ ti.usuario.carrito.listaEntradas[x].producto.nombre +'" id="btnDelete' + x + '">Borrar</button>' +
            "</div>"+
          "</li>"
					);
			}
		});
	}
}


// -----------------------------------

loadProdsInUi(tienda.productos, tienda);

//------------------------------------
