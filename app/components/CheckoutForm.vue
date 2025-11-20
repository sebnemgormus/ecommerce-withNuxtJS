<template>
  <div class="checkout-left">
    <div class="section-container">
        <h3 class="section-title">
            <span v-html="CheckoutIcon" class="title-icon"></span>
            Shipping details
        </h3>
        <form class="shipping-form">
            <div class="form-row">
                <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input type="text" id="firstName" required>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input type="text" id="lastName" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" placeholder="+90 (5_ _ ) _ _ _ - _ _ _ _" required>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="city">City *</label>
                    <select id="city" required class="custom-select">
                        <option value="">Please select</option>
                        <option value="istanbul">İstanbul</option>
                        <option value="ankara">Ankara</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="district">District *</label>
                    <select id="district" required class="custom-select" disabled>
                        <option value="">Please select</option>
                    </select>
                </div>
            </div>

            <div class="form-group full-width">
                <label for="address">Address *</label>
                <textarea id="address" rows="3" placeholder="Enter neighborhood, street, avenue and other information" required></textarea>
            </div>
        </form>
    </div>
    
    <div class="section-container">
        <h3 class="section-title">
            <span v-html="PaymentIcon" class="title-icon"></span>
            Payment details
        </h3>
        <div class="payment-method-block">
            <!-- <div class="card-preview">
                <div class="card-number-display">0000 0000 0000 0000</div>
                <div class="card-holder-display">Card Holder</div>
                <div class="card-exp-cvv">
                    <span>MM/YY</span>
                    <span class="cvv-box"></span>
                </div>
            </div> -->

            <div class="form-group">
                <label for="cardHolderName">Card Holder Name *</label>
                <input type="text" id="cardHolderName" required>
                <p class="required-fields-note">Full name on card</p>
            </div>
            
            <div class="form-group">
                <label for="cardNumber">Card Number *</label>
                <input type="text" id="cardNumber" required>
                <p class="required-fields-note">Enter digits without spaces</p>
            </div>

            <div class="form-row expire-date-cvv">
                <div class="form-group new-group">
                    <label for="expiryDate">Expiry Date *</label>
                    <input type="text" id="expiryDate" required placeholder="MM/YY">
                </div>
                <div class="form-group">
                    <label for="cvv">CVV *</label>
                    <input type="text" id="cvv" required placeholder="">
                </div>
            </div>
            <div>
                <p class="required-fields-note" style="margin-bottom: 1rem;">* Required fields</p>
                <p class="required-fields-note" style="margin-bottom: 1rem;">* Required fields</p>
            </div>
            <button class="pay-now-btn">
                PAY NOW
            </button>
        </div>
        </div>
  </div>
</template>

<script setup lang="ts">

import CheckoutIcon from '~/assets/icons/checkout.svg?raw'
import PaymentIcon from '~/assets/icons/payment.svg?raw'

</script>

<style scoped>

.checkout-left {
  padding: 0;
}

.section-container {
    background-color: #ffffff;
    padding: 0px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 500;
    color: #2A2A48;
    margin-top: 0;
    padding-bottom: 18px;
    margin-bottom: 8px;
}


.section-title .title-icon {
    display: flex; 
    align-items: center;
    line-height: 1; 
    padding: 8px; 
    background-color: #F8F8F8; 
    border-radius: 4px; 
}

.form-row {
    display: flex;
    flex-direction: column;
}

.form-row.expire-date-cvv {
    display: flex;
    flex-direction: row; 
    gap: 20px;
    margin-top: 1.5rem;
}

.form-row.expire-date-cvv .form-group {
    flex: 1 1 50%;
    width: auto; 
}


.new-group {
    flex: 1 1 50%; 
    margin-bottom: 15px;
    min-width: 0;
}

.form-group {
    flex: 1;
    margin-bottom: 15px;
    margin-top: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #2A2A48;
}

textarea {
    resize: none;
}

input[type="text"], 
input[type="email"], 
input[type="tel"],
textarea,
.custom-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: #2A2A48;
    background-color: #ffffff;
    transition: border-color 0.2s;
}

input:focus, textarea:focus, .custom-select:focus {
    border-color: #ecececaf;
    outline: none;
}

.custom-select {
    appearance: none; 
    
}

.payment-method-block {
    margin-top: 15px;
}

.card-preview {
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 20px;
}

.required-fields-note {
    font-size: 12px;
    font-weight: 400;
    color: rgba(42, 42, 72, 0.6);
    padding-top: 10px;
}

.pay-now-btn {
    width: 100%; 
    background-color: #ffc0f6; 
    color: white; 
    border: none; 
    border-radius: 4px; 
    padding: 10px 0;
    margin-top: 20px; 
    font-size: 14px; 
    font-weight: 700; 
    text-transform: uppercase;
    transition: background-color 0.2s;
}

/* Desktop */

@media (min-width: 48rem) { 
    .section-title {
        font-size: 20px;
        padding-bottom: 24px;
    }

    .section-container {
        margin-top: 2.5rem;
        margin-bottom: 2rem;
    }

    .form-row {
        flex-direction: row; 
        gap: 20px;
    }
    
    .form-group {
        flex: 1; 
        width: auto;
    }

    .pay-now-btn {
        width: 50%;
    }
}

</style>