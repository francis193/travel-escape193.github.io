//declarando variables para los controles 
var txtNom=document.getElementById("txtNom");
var txtAp=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var txtCel=document.getElementById("txtCel");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
var mensajeerror=error.innerHTML;

//creamos un procedimiento para asignar la clase
function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+m+'</li>';
}




//creamos un procedimiento para validar 
function Validar(){
    //reiniciamos el error para que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese sus nombres");
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor ingrese numero celular");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Casilla de seguridad");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor ingrese numero celular");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Casilla de seguridad");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor ingrese numero celular");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Casilla de seguridad");
        txtCor.focus();
    }else if(txtCel.value=="" || txtCel.value==null){
        LlamarClase("Por favor ingrese numero celular");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Casilla de seguridad");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false &&rbOtr.checked==false){
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Casilla de seguridad");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Casilla de seguridad");
        chkEst.focus();
    }else{
        error.style.display='none';
    }
}
