# Athlex — Landing page

Site web statique (landing page) pour la salle de sport Athlex.

Résumé
-------
Ce dépôt contient une page d'atterrissage simple et moderne pour une salle de sport locale nommée "Athlex". Le but est de présenter la salle, ses services, les coachs, les plannings et fournir des informations de contact (téléphone, Instagram, lien Google Maps).

Structure du dossier
--------------------
projects/Athlex/

- index.html          — page principale (one-page)
- css/style.css       — styles (thème sombre + accent jaune)
- js/main.js          — petit script (menu mobile, smooth scroll, reveal)
- images/             — logo, photos et plannings (inclus)
- README.md           — ce fichier

Comment voir le site
---------------------
1. Ouvre `projects/Athlex/index.html` dans ton navigateur (double-clic ou clic droit -> Open with Live Server si tu utilises l'extension VS Code Live Server).
2. Le site est entièrement statique (HTML/CSS/JS) — pas besoin d'installation.

Personnalisation rapide
-----------------------
- Modifier le logo / images : remplace les fichiers dans `projects/Athlex/images/` et garde les mêmes noms ou mets à jour les `src` dans `index.html`.
- Numéros de téléphone : ouvre `index.html` et cherche la section Contact pour remplacer les numéros.
- Lien Instagram : actuellement réglé sur `https://www.instagram.com/athlex_gym` — change-le dans `index.html` si nécessaire.
- Changer la couleur d'accent : édite la variable CSS `--accent` en haut de `css/style.css`.
- Ajouter une iframe Google Maps intégrée : remplace le lien dans la section Contact par un `<iframe>` embed (je peux le faire pour toi si tu veux).

Notes techniques
-----------------
- Mobile : le menu devient un bouton ☰ sur petits écrans.
- Animations : reveal simple via IntersectionObserver (fichier `js/main.js`).
- Licence / crédit : matériel fourni par l'utilisateur (logo et images). Vérifie que tu as les droits pour publier ces images.

Prochaines étapes possibles
--------------------------
- Ajouter une page de réservation / formulaire de contact.
- Ajouter des prix / forfaits et une section témoignages.
- Intégrer Google Analytics ou Pixel si nécessaire.

Contact
-------
Si tu veux que je fasse d'autres modifications (embeds, formulaires, design), dis-moi quoi et je l'ajoute.

---
Fait avec ❤️ pour Athlex — 2025
