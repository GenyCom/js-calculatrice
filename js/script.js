// Sélection des éléments du DOM
const operationZoneText = document.getElementById("operation-text-zone");
const operationDisplay = document.getElementById("display-area");
const buttonOperations = document.querySelectorAll(".buttons-grid button");

// Initialiser la zone d'opérations
function init() {
    operationZoneText.value = '';
    operationDisplay.textContent = '';
}

// Ajouter un caractère à la zone d'opérations
function taper(char) {
    operationZoneText.value += char;
}

// Calculer l'expression
function calculerExpression() {
    const expr = operationZoneText.value;
    
    // Détecter l'opérateur
    let operator = null;
    if (expr.includes("+")) operator = "+";
    else if (expr.includes("-")) operator = "-";
    
    // Cas simple : pas d'opérateur
    if (!operator) {
        return parseFloat(expr) || 0;
    }
    
    // Cas avec opérateur
    const parts = expr.split(operator);
    const x = parseFloat(parts[0]) || 0;
    const y = parseFloat(parts[1]) || 0;

    let numberResult;
    if (operator === "+") numberResult = x + y;
    if (operator === "-") numberResult = x - y;

    return numberResult;
}

// Gestion des clics sur les boutons
buttonOperations.forEach(button => {
    button.addEventListener("click", (event) => {
        const char = event.target.textContent;

        if (char === "Vider") {
            init();
            return;
        }

        if (char === "=") {
            const result = calculerExpression();
            operationDisplay.textContent = result; // Affiche le résultat
            return;
        }

        taper(char);
        operationDisplay.textContent = operationZoneText.value; // Affiche la zone de texte actuelle
    });
});
