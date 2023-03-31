function generatePassword(){

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


    // Generar la contraseña aleatoria
    let password = '';
    for (let i = 0; i < 15; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').value = password;

};

function copyPassword(){

    let password = document.getElementById('password').value;

    // Copiar la contraseña
    navigator.clipboard.writeText(password).then(function() {
        // Mensaje de confirmacion
        alert('La contraseña ha sido copiada al portapapeles')
    }, function(){
        alert('No se pudo copiar la contraseña al portapapeles')
    });
}