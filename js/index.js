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

    const pricePerCourse = 3.29;

    function updateLearnersValue() {
        const learnersInput = document.getElementById('learners');
        const learnersValue = document.getElementById('learners-value');
        learnersValue.textContent = learnersInput.value;
    }
    
    function updateCreditsValue() {
        const credits = document.getElementById('credits').value;
        document.getElementById('credits-value').innerText = credits;
    }

    function updateSubscriptionPrice() {
        const learnersInput = document.getElementById('learners').value;
        const coursePrice = 2.99;
        const totalPrice = (coursePrice * 30 * learnersInput).toFixed(2);
        document.getElementById('subscription-total').textContent = `£${totalPrice}`;
        document.getElementById('subscription-button-total').textContent = `£${totalPrice}`;
    }

    function updatePayAsYouGoPrice() {
        const priceFor50Courses = 164.50; // Price for 50 courses
        const numberOfLearners = document.getElementById('learners').value;
        const totalPrice = (numberOfLearners * priceFor50Courses).toFixed(2);
        document.getElementById('payasyougo-total').innerText = `£${totalPrice}`;
        document.getElementById('payasyougo-button-total').innerText = `£${totalPrice}`;
        document.getElementById('learners-value').innerText = numberOfLearners; // Update displayed learners
    }

    function updatePremiumLearnersValue() {
        const learnersInput = document.getElementById('premium-learners');
        document.getElementById('premium-learners-value').textContent = learnersInput.value;
    }

    function updatePremiumPrice() {
        const learnersInput = document.getElementById('premium-learners').value;
        const totalPrice = (learnersInput * pricePerCourse).toFixed(2);
        document.getElementById('premium-total').textContent = `£${totalPrice}`;
        document.getElementById('premium-button-total').textContent = `£${totalPrice}`;
    }
});
