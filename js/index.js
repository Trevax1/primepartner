document.addEventListener('DOMContentLoaded', function() {
    // Initialize the display of all plans
    updateSubscriptionPrice();
    updatePayAsYouGoPrice();
    updateLearnersValue();
    updateCreditsValue();
    updatePremiumPrice();
    updatePremiumLearnersValue();
    
    // Event listeners for input changes
    document.getElementById('learners').addEventListener('input', function() {
        updateLearnersValue();
        updateSubscriptionPrice();
        updatePayAsYouGoPrice();
    });

    document.getElementById('credits').addEventListener('input', updateCreditsValue);

    document.getElementById('premium-learners').addEventListener('input', function() {
        updatePremiumLearnersValue();
        updatePremiumPrice();
    });
});

// Function to update the subscription price
function updateSubscriptionPrice() {
    const learnersInput = document.getElementById('learners').value;
    const coursePrice = 2.99; // Price per course
    const totalPrice = (coursePrice * 30 * learnersInput).toFixed(2); // 30 courses per learner
    
    document.getElementById('subscription-total').textContent = `£${totalPrice}`;
    document.getElementById('subscription-button-total').textContent = `£${totalPrice}`;
}

// Function to update the pay-as-you-go price
function updatePayAsYouGoPrice() {
    const credits = document.getElementById('credits').value;
    const pricePerCourse = 3.29; // Price per course
    const totalPrice = (credits * pricePerCourse).toFixed(2);
    
    document.getElementById('payasyougo-total').innerText = `£${totalPrice}`;
    document.getElementById('payasyougo-button-total').innerText = `£${totalPrice}`;
}

// Function to update learners value display
function updateLearnersValue() {
    const learners = document.getElementById('learners').value;
    document.getElementById('learners-value').textContent = learners;
}

// Function to update credits value display
function updateCreditsValue() {
    const credits = document.getElementById('credits').value;
    document.getElementById('credits-value').textContent = credits;
}

// Function to update the premium price
function updatePremiumPrice() {
    const premiumLearners = document.getElementById('premium-learners').value;
    const pricePerUser = 50; // Set the price per learner for the Premium plan
    const total = premiumLearners * pricePerUser;

    document.getElementById('premium-total').textContent = `£${total.toFixed(2)}`;
    document.getElementById('premium-button-total').textContent = `£${total.toFixed(2)}`;
}

// Function to update the premium learners value display
function updatePremiumLearnersValue() {
    const premiumLearners = document.getElementById('premium-learners').value;
    document.getElementById('premium-learners-value').textContent = premiumLearners;
}
