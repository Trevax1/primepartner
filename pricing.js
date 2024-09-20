// JavaScript to update the price dynamically based on the number of learners selected
const basicPricePerLearner = 89.70;
const paygPricePerLearner = 164.50;
const premiumPricePerLearner = 329.00;

function updatePrice(plan) {
    let learners;
    let totalPrice;

    if (plan === 'basic') {
        learners = document.getElementById('basic-learners').value;
        totalPrice = (basicPricePerLearner * learners).toFixed(2);
        document.getElementById('basic-learners-value').innerText = learners;
        document.getElementById('basic-total').innerText = `£${totalPrice}`;
        document.getElementById('basic-button-total').innerText = `£${totalPrice}`;
    } else if (plan === 'payg') {
        learners = document.getElementById('payg-learners').value;
        totalPrice = (paygPricePerLearner * learners).toFixed(2);
        document.getElementById('payg-learners-value').innerText = learners;
        document.getElementById('payg-total').innerText = `£${totalPrice}`;
        document.getElementById('payg-button-total').innerText = `£${totalPrice}`;
    } else if (plan === 'premium') {
        learners = document.getElementById('premium-learners').value;
        totalPrice = (premiumPricePerLearner * learners).toFixed(2);
        document.getElementById('premium-learners-value').innerText = learners;
        document.getElementById('premium-total').innerText = `£${totalPrice}`;
        document.getElementById('premium-button-total').innerText = `£${totalPrice}`;
    }
}
