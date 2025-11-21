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
            <input type="text" id="firstName" required maxlength="50">
          </div>
          <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" required maxlength="50">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" required maxlength="100">
          </div>
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              placeholder="+90 (5_ _ ) _ _ _ - _ _ _ _"
              required
              maxlength="15"
              pattern="^\+90\s\(\d{3}\)\s\d{3}-\d{4}$"
            >
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
          <textarea
            id="address"
            rows="3"
            placeholder="Enter neighborhood, street, avenue and other information"
            required
            maxlength="250"
          ></textarea>
        </div>
      </form>
    </div>
    <div class="section-container payment-section">
      <div class="payment-header">
        <h3 class="section-title">
          <span v-html="PaymentIcon" class="title-icon"></span>
          Payment details
        </h3>
      </div>
      <div class="payment-content-wrapper">
        <div class="payment-image">
          <img :src="CardContainer" alt="Payment" />
        </div>
        <div class="payment-method-block">
          <div class="form-group">
            <label for="cardHolderName">Card Holder Name *</label>
            <input type="text" id="cardHolderName" required maxlength="100">
            <p class="required-fields-note">Full name on card</p>
          </div>
          <div class="form-group">
            <label for="cardNumber">Card Number *</label>
            <input type="text" id="cardNumber" required maxlength="16" pattern="\d{13,16}">
            <p class="required-fields-note">Enter digits without spaces</p>
          </div>
          <div class="form-row expire-date-cvv">
            <div class="form-group new-group">
              <label for="expiryDate">Expiry Date *</label>
             <input
                type="text"
                id="expiryDate"
                v-model="expiryDate"
                @input="formatExpiryDate"
                maxlength="5"
                required
                placeholder="MM/YY"
            />
            </div>
            <div class="form-group cvv-group">
              <label for="cvv">CVV *</label>
              <div class="input-with-icon">
                <input type="text" id="cvv" required maxlength="3" pattern="\d{3,4}">
                <span class="cvv-help-icon">
                  ?
                  <span class="cvv-tooltip">CVV, kartınızın arkasındaki 3 haneli güvenlik kodudur.</span>
                </span>
              </div>
            </div>
          </div>

          <p class="required-fields-note" style="margin-bottom: 1rem;">* Required fields</p>
          <button class="pay-now-btn">PAY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import CheckoutIcon from '~/assets/icons/checkout.svg?raw'
import PaymentIcon from '~/assets/icons/payment.svg?raw'
import CardContainer from '~/assets/images/Cardcontainer.png'

import { ref } from 'vue'

const expiryDate = ref("")

const formatExpiryDate = () => {
  let val = expiryDate.value.replace(/\D/g, "") 
  if (val.length > 2) {
    val = val.slice(0, 2) + "/" + val.slice(2, 4)
  }
  expiryDate.value = val
}

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

.payment-section {
  display: flex;
  flex-direction: column;
}

.payment-content-wrapper {
  display: flex;
  flex-direction: column; 
  gap: 1.5rem;
  margin-top: 1.5rem; 
}

.payment-image img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 500;
    color: #2A2A48;
    margin-top: 0;
    margin-bottom: 2px;
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

.cvv-group {
  position: relative; 
}

.input-with-icon {
  position: relative;
  display: flex; 
  align-items: center;
}

.input-with-icon input {
  flex-grow: 1; 
  padding-right: 35px; 
}

.cvv-help-icon {
  right: 21px; 
  margin-top: 20px;
  transform: translateY(-50%);
  background-color: #f0f0f0; 
  border-radius: 50%; 
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  z-index: 10; 
  position: relative; 
}

.cvv-tooltip {
  visibility: hidden; 
  width: 200px; 
  background-color: #555;
  color: #fff; 
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 11; 
  bottom: 125%; 
  left: 50%;
  margin-left: -100px; 
  opacity: 0; 
  transition: opacity 0.3s; 
  font-size: 12px;
  line-height: 1.4;
}

.cvv-tooltip::after {
  content: "";
  position: absolute;
  top: 100%; 
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.cvv-help-icon:hover .cvv-tooltip {
  visibility: visible;
  opacity: 1;
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
        padding-bottom: 6px;
    }

    .section-container {
        margin-top: 2.5rem;
        margin-bottom: 2rem;
    }
    
    .section-container:not(.payment-section) .form-row {
        flex-direction: row; 
        gap: 20px;
    }
    
    .payment-section {
        flex-direction: column; 
    }
    
    .payment-content-wrapper {
        flex-direction: row-reverse; 
        align-items: flex-start;
        gap: 40px; 
    }

    .payment-image {
        flex: 1; 
        max-width: 50%;
        display: flex;
        justify-content: flex-end; 
    }

    .payment-method-block {
        flex: 1; 
        margin-top: 0;
    }

    .payment-image img {
        width: 100%; 
        max-width: 350px; 
        height: auto;
        margin-top: 2rem;
    }

    .form-group {
        flex: 1; 
        width: auto;
        margin-top: 15px; 
    }

    .pay-now-btn {
        width: 100%;
    }
}

</style>