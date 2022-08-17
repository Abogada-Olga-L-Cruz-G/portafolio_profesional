document.addEventListener("DOMContentLoaded", function () {
    const personas = [
        new Persona('Olga Lucia', 'Cruz Garzon'),
        new Persona('Contacto:', '311 873 16 64')        
    ];

    function mostrarPersonas() {
        console.log('Mostrar personas');
        let items = '';
        for (let persona of personas) {
            console.log(persona);
            items += `<li>${persona.getNombre()} ${persona.getApellido()}</li>`
        }

        document.getElementById('personas').innerHTML = items;
    }

    // Evento body
    const body = document.getElementById('body');
    body.addEventListener('load', mostrarPersonas());


    function agregarPersona() {
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');

        if (nombre.value != '' && apellido.value != '') {
            const persona = new Persona(nombre.value, apellido.value);
            personas.push(persona);

            mostrarPersonas();
            nombre.value = '';
            apellido.value = '';
            nombre.setAttribute("autofocus", "");
        } 
        

    }

    //Evento boton
    const boton = document.getElementById('agregar');
    boton.addEventListener('click', agregarPersona);
});
