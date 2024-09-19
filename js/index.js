document.addEventListener('DOMContentLoaded', function() {
    // Initialize the display of all plans
    updateSubscriptionPrice();
    updatePayAsYouGoPrice();
    updateLearnersValue();
    updateCreditsValue();
    updatePremiumPrice();
    updatePremiumLearnersValue();
    
    // Event listeners for input changes
    function updateLearnersValue() {
        const learnersInput = document.getElementById('learners');
        const learnersValue = document.getElementById('learners-value');
        learnersValue.textContent = learnersInput.value;
    }
    
    document.getElementById('credits').addEventListener('input', function() {
        updatePayAsYouGoPrice();
        updateCreditsValue();
    });
    document.getElementById('premium-learners').addEventListener('input', function() {
        updatePremiumPrice();
        updatePremiumLearnersValue();
    });
});

function updateSubscriptionPrice() {
    const learnersInput = document.getElementById('learners').value;
    const coursePrice = 2.99;
    const totalPrice = (coursePrice * 30 * learnersInput).toFixed(2);
    
    document.getElementById('subscription-total').textContent = `£${totalPrice}`;
    document.getElementById('subscription-button-total').textContent = `£${totalPrice}`;
}

function updatePayAsYouGoPrice() {
    const credits = document.getElementById('credits').value;
    const pricePerCredit = 4.5;
    const total = credits * pricePerCredit;
    document.getElementById('payasyougo-total').textContent = `£${total.toFixed(2)}`;
    document.getElementById('payasyougo-button-total').textContent = `£${total.toFixed(2)}`;
}

function updateLearnersValue() {
    const learners = document.getElementById('learners').value;
    document.getElementById('learners-value').textContent = learners;
}

function updateCreditsValue() {
    const credits = document.getElementById('credits').value;
    document.getElementById('credits-value').textContent = credits;
}

function updatePremiumPrice() {
    const premiumLearners = document.getElementById('premium-learners').value;
    const pricePerUser = 50; // Set the price per learner for the Premium plan
    const total = premiumLearners * pricePerUser;
    document.getElementById('premium-total').textContent = `£${total.toFixed(2)}`;
    document.getElementById('premium-button-total').textContent = `£${total.toFixed(2)}`;
}

function updatePremiumLearnersValue() {
    const premiumLearners = document.getElementById('premium-learners').value;
    document.getElementById('premium-learners-value').textContent = premiumLearners;
}
