function mensaje() {
	var nuevo_chat = document.getElementById('mensajes').value;
	document.getElementById('mensajes').value="";

	var div_contenedor = document.createElement('div');
	div_contenedor.classList.add('w-message', 'w-message-out');
	var div_mensaje = document.createElement('div');
	div_mensaje.classList.add('w-message-text');
	var p_mensaje = document.createElement('p')
	var nodo_mensaje = document.createTextNode(nuevo_chat);
	var div_hora = document.createElement('div');
	var nodo_hora = document.createTextNode('11:32');//aca va dato de hora actualizada buscar
	div_hora.classList.add('time');

	p_mensaje.appendChild(nodo_mensaje);
	div_mensaje.appendChild(p_mensaje);
	div_hora.appendChild(nodo_hora);
	div_mensaje.appendChild(div_hora);
	div_contenedor.appendChild(div_mensaje);
	conversacion.appendChild(div_contenedor);
	chat.appendChild(conversacion);

	/*chat.addEventListener("click", function(){
		contenedor.removeChild(container_div);*/

}
