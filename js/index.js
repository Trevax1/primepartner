const pricingCalculator = {
    coursePrices: {
        subscription: 2.99,  // Price per course for Basic Subscription
        payAsYouGo: 3.29,    // Price per course for Pay-As-You-Go Plan
        premium: 50           // Price per learner for Premium Plan
    },
    init: function () {
        this.bindEvents();
        this.updatePrices();
    },
    bindEvents: function () {
        document.getElementById('learners').addEventListener('input', this.updatePrices.bind(this));
        document.getElementById('credits').addEventListener('input', this.updatePrices.bind(this));
        document.getElementById('premium-learners').addEventListener('input', this.updatePrices.bind(this));
    },
    updatePrices: function () {
        this.updateSubscriptionPrice();
        this.updatePayAsYouGoPrice();
        this.updatePremiumPrice();
    },
    updateSubscriptionPrice: function () {
        const learners = document.getElementById('learners').value;
        const totalPrice = (this.coursePrices.subscription * 30 * learners).toFixed(2); // 30 courses
        document.getElementById('subscription-total').textContent = `£${totalPrice}`;
        document.getElementById('subscription-button-total').textContent = `£${totalPrice}`;
        document.getElementById('learners-value').textContent = learners;
    },
    updatePayAsYouGoPrice: function () {
        const credits = document.getElementById('credits').value; // Using credits for Pay-As-You-Go
        const totalPrice = (credits * this.coursePrices.payAsYouGo).toFixed(2);
        document.getElementById('payasyougo-total').textContent = `£${totalPrice}`;
        document.getElementById('payasyougo-button-total').textContent = `£${totalPrice}`;
        document.getElementById('credits-value').textContent = credits; // Update displayed credits count
    },
    updatePremiumPrice: function () {
        const premiumLearners = document.getElementById('premium-learners').value;
        const total = (premiumLearners * this.coursePrices.premium).toFixed(2);
        document.getElementById('premium-total').textContent = `£${total}`;
        document.getElementById('premium-button-total').textContent = `£${total}`;
        document.getElementById('premium-learners-value').textContent = premiumLearners;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    pricingCalculator.init();
});
