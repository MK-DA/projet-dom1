// Sélectionner tous les boutons +
let plusButtons = document.querySelectorAll(".fa-plus-circle");

// Sélectionner tous les boutons -
let minusButtons = document.querySelectorAll(".fa-minus-circle");

// Sélectionner tous les boutons supprimer
let deleteButtons = document.querySelectorAll(".fa-trash-alt");

// Sélectionner tous les boutons cœur
let heartButtons = document.querySelectorAll(".fa-heart");

// BOUTON +

plusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Trouver la quantité de l'article
        let quantity = button.parentElement.querySelector(".quantity");

        // Transformer la quantité en nombre
        let value = parseInt(quantity.textContent);

        // Ajouter 1
        value = value + 1;

        // Afficher la nouvelle quantité
        quantity.textContent = value;

        // Mettre à jour le prix total
        calculateTotal();
    });
});

// BOUTON -

minusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let quantity = button.parentElement.querySelector(".quantity");

        let value = parseInt(quantity.textContent);

        // Ne pas descendre en dessous de 0
        if (value > 0) {

            value = value - 1;

            quantity.textContent = value;
        }

        // Mettre à jour le prix total
        calculateTotal();
    });
});

// BOUTON SUPPRIMER

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Supprimer tout l'article
        button.closest(".card-body").remove();

        // Mettre à jour le prix total
        calculateTotal();
    });
});

// BOUTON COEUR

heartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Ajouter ou enlever la classe "liked"
        button.classList.toggle("liked");

    });
});

// CALCUL DU TOTAL

function calculateTotal() {

    // Récupérer tous les produits
    let products = document.querySelectorAll(".card");

    let total = 0;

    products.forEach(function(product) {

        // Récupérer le prix
        let priceText = product.querySelector(".unit-price").textContent;

        // Enlever le "$"
        let price = parseFloat(priceText);

        // Récupérer la quantité
        let quantity = parseInt(
            product.querySelector(".quantity").textContent
        );

        // Calculer le prix de l'article
        total = total + (price * quantity);
    });

    // Afficher le total
    document.querySelector(".total").textContent = total + " $";
}

// Calculer le total au démarrage
calculateTotal();