window.addEventListener('DOMContentLoaded', function () {
        //EXO 2
    const euroInput = document.getElementById("euro");
    const dollarInput = document.getElementById("dollard");
    const ausDollarInput = document.getElementById("dollarsAustralien");

    // Taux de conversion
    const euroToDollar = 1.01;
    const euroToAus = 1.47;

    // Conversion depuis l'euro
    euroInput.addEventListener("input", function () {
        const euro = parseFloat(euroInput.value) || 0;
        dollarInput.value = (euro * euroToDollar).toFixed(2);
        ausDollarInput.value = (euro * euroToAus).toFixed(2);
    });

    // Conversion depuis le dollar US
    dollarInput.addEventListener("input", function () {
        const dollar = parseFloat(dollarInput.value) || 0;
        const euro = dollar / euroToDollar;
        euroInput.value = euro.toFixed(2);
        ausDollarInput.value = (euro * euroToAus).toFixed(2);
    });

    // Conversion depuis le dollar Australien
    ausDollarInput.addEventListener("input", function () {
        const aus = parseFloat(ausDollarInput.value) || 0;
        const euro = aus / euroToAus;
        euroInput.value = euro.toFixed(2);
        dollarInput.value = (euro * euroToDollar).toFixed(2);
    });

    //
});

