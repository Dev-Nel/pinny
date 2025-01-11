function generatePIN() {
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pin-display').textContent = pin;
}