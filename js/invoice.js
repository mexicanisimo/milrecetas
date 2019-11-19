$(document).on('ready', funcMain);


function funcMain()
{
	$("#add_row").on('click',addIngrediente);
	$("#add_pasos").on('click',addPaso);
	$("#guardarReceta").on('click',guardarReceta);

	$("loans_table").on('click','.fa-eraser',deleteProduct);
	$("loans_table").on('click','.fa-edit',editProduct);

	$("body").on('click',".fa-eraser",deleteProduct);
	$("body").on('click',".fa-edit",editProduct);
}


function funcEliminarProductosso(){
	//Obteniendo la fila que se esta eliminando
	var a=this.parentNode.parentNode;
	//Obteniendo el array de todos loe elementos columna en esa fila
	//var b=a.getElementsByTagName("td");
	var cantidad=a.getElementsByTagName("td")
	console.log(a);

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function guardarReceta() {
	var nombreReceta=document.getElementById("nombreReceta").value;
	console.log(nombreReceta);
}


function deleteProduct(){
	//Guardando la referencia del objeto presionado
	var _this = this;
	//Obtener las filas los datos de la fila que se va a elimnar
	var array_fila=getRowSelected(_this);

	//Restar esos datos a los totales mostrados al finales
	//calculateTotals(cantidad, precio, subtotal, impuesto, totalneto, accioneliminar)
	calculateTotals(array_fila[3],array_fila[4],array_fila[5],array_fila[6],array_fila[7],2)

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function editProduct(){
	var _this = this;;
	var array_fila=getRowSelected(_this);
	console.log(array_fila[0]+" - "+array_fila[1]+" - "+array_fila[2]+" - "+array_fila[3]+" - "+array_fila[4]+" - "+array_fila[5]+" - "+array_fila[6]+" - "+array_fila[7]);
	//Codigo de editar una fila lo pueden agregar aqui
}



function getRowSelected(objectPressed){
	//Obteniendo la linea que se esta eliminando
	var a=objectPressed.parentNode.parentNode;
	//b=(fila).(obtener elementos de clase columna y traer la posicion 0).(obtener los elementos de tipo parrafo y traer la posicion0).(contenido en el nodo)
	var cantidad=a.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
	var medida=a.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
	var ingrediente=a.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;

	var array_fila = [cantidad, medida, ingrediente];

	return array_fila;
	//console.log(numero+' '+codigo+' '+descripcion);
}

function addIngrediente(){
	var ingrediente =[];
var cant=document.getElementById("cantidad").value;
var medida=document.getElementById("medida").value;
var ingrediente=document.getElementById("ingrediente").value;
if(cant!=0 && medida!=null && ingrediente!=null){
	newRowTable(cant, medida, ingrediente);
}else{
	alert("No puedes dejar campos vacios");
}
}



function addPaso(){
	var pasos = document.getElementById("pasos").value;
	if (pasos!=null && pasos != "") {
		newRowCard(pasos);
	}else{
		alert("no has agregado ningun paso");
	}
	
}


function newRowTable(cant, med, ing)
{
	var ingrediente=[];
	var arrayingredientes = [];
	
	ingrediente[0]=cant;
	ingrediente[1]=med;
	ingrediente[2]=ing;

	var name_table=document.getElementById("ingredientes");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    arrayingredientes.push(ingrediente);
   limpiarCampoIngrediente();

    cell1.innerHTML = '<p name="cant_f[]" class="non-margin">'+ingrediente[0]+'</p>';
    cell2.innerHTML = '<p name="med_p[]" class="non-margin">'+ingrediente[1]+'</p>';
    cell3.innerHTML = '<p name="ingre_p[]" class="non-margin">'+ingrediente[2]+'</p>';
    cell4.innerHTML = '<span class="icon fa-edit"></span><span class="icon fa-eraser"></span>';

}


function limpiarCampoIngrediente(){
	document.getElementById("cantidad").value="";
	//document.getElementById("medida").value="seleccionar";
	document.getElementById("ingrediente").value="";
}

function limpiarCampoPasos(){
	document.getElementById("pasos").value="";
}

function newRowCard(pasos)
{
	var procedimiento=[];
	procedimiento.push(pasos);
	//var pasos=document.getElementById("pasos").value;


	var name_table=document.getElementById("paso");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    limpiarCampoPasos();

    cell1.innerHTML = '<p name="cant_f[]" class="non-margin" >'+pasos+'</p>';
    cell2.innerHTML = '<span class="icon fa-edit"></span><span class="icon fa-eraser"></span>';

    
}

function format(input)
{
	var num = input.value.replace(/\,/g,'');
	if(!isNaN(num)){
		input.value = num;
	}
	else{ alert('Solo se permiten numeros');
		input.value = input.value.replace(/[^\d\.]*/g,'');
	}
}