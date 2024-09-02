function updateSubscriptionPrice() {
    const learners = document.getElementById('learners').value;
    const pricePerUser = 35;
    const total = learners * pricePerUser;
    document.getElementById('subscription-total').textContent = `£${total.toFixed(2)}`;
    document.getElementById('subscription-button-total').textContent = `£${total.toFixed(2)}`;
    updateLearnersValue();
}

function updatePayAsYouGoPrice() {
    const credits = document.getElementById('credits').value;
    const pricePerCredit = 4.5;
    const total = credits * pricePerCredit;
    document.getElementById('payasyougo-total').textContent = `£${total.toFixed(2)}`;
    document.getElementById('payasyougo-button-total').textContent = `£${total.toFixed(2)}`;
    updateCreditsValue();
}

function updateLearnersValue() {
    const learners = document.getElementById('learners').value;
    document.getElementById('learners-value').textContent = learners;
}

function updateCreditsValue() {
    const credits = document.getElementById('credits').value;
    document.getElementById('credits-value').textContent = credits;
}
