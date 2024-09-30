document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;

    const data = { firstName, lastName, email, guests };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Merci ! Votre réponse a été enregistrée.');
    })
    .catch((error) => {
        console.error('Erreur:', error);
    });
});
