document.addEventListener('DOMContentLoaded', () => {
    $('#mainForm').submit((e) => {
        // on vérifie juste les champs, pas besoin d'envoyer
        e.preventDefault();

        // récupérer les champs
        const password = $('#password').val();
        const passwordConfirm = $('#passwordConfirm').val();
        
        if (password !== passwordConfirm) {
            // vérifier si les champs sont les mêmes
            alert('Les mots de passe ne correspondent pas');
            $('#password').focus();
            e.preventDefault();
        }
        else if (password.length < 6) {
            // vérifier si le mot de passe est assez long
            alert('Le mot de passe doit contenir au moins 6 caractères');
            $('#password').focus();
            e.preventDefault();
        }
        else if (!/\d/.test(password)) {
            // vérifier si le mot de passe contient un chiffre
            alert('Le mot de passe doit contenir au moins un chiffre');
            $('#password').focus();
            e.preventDefault();
        }
    });
});