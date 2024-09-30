const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware pour traiter les requêtes JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route pour gérer la soumission du formulaire
app.post('/submit', (req, res) => {
    const { firstName, lastName, email, guests } = req.body;
    const entry = `Nom: ${lastName}, Prénom: ${firstName}, Email: ${email}, Guests: ${guests}\n`;

    // Enregistrer les données dans un fichier texte
    fs.appendFile('invites.txt', entry, (err) => {
        if (err) {
            console.error('Erreur lors de l\'enregistrement des données:', err);
            res.status(500).json({ message: 'Erreur serveur, veuillez réessayer plus tard.' });
        } else {
            res.status(200).json({ message: 'Réponse enregistrée avec succès.' });
        }
    });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
