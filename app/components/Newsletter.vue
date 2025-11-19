<template>
  <section class="newsletter-signup">
    <div class="container"> 
      <div class="newsletter-content">
        <h3 class="newsletter-title">Sign up to our newsletter</h3>
        <p class="newsletter-text">Be the first to hear about the latest offers.</p>
      </div>
      <div class="newsletter-form">
        <input 
          type="email" 
          placeholder="Your email address" 
          class="email-input"
          aria-label="Your email address"
        />
        <button class="subscribe-btn">SUBSCRIBE</button>
      </div>
    </div>
  </section>
</template>

<style scoped>

.newsletter-signup {
  background-color: #F2F0FF;
  padding: 1.5rem 0; 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center; 
}

.newsletter-content {
  margin-bottom: 1rem;
  text-align: left;
}

.newsletter-title {
  font-size: 20px;
  font-weight: 700;
  color: #2A2A48;
  margin-bottom: 0.5rem;
}

.newsletter-text {
  font-size: 14px;
  font-weight: 400;
  color: rgba(42, 42, 72, 0.36);
  margin-bottom: 0;
}


.newsletter-form {
  display: flex;
  flex-direction: row; 
  gap: 1rem;
}

.email-input {
  flex: 1;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ECECEC;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(42, 42, 72, 0.36);
}

.email-input::placeholder {
  color: #A0A0A0;
}

.email-input:focus{
    outline: none;

}

.subscribe-btn {
  flex:0 0 auto;
  background-color: #FF27AD;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-btn:hover {
  background-color: #F1129C;
}

/* Desktop */

@media (min-width: 48rem) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .newsletter-signup {
    padding: 3rem 0;
  }

  .newsletter-content {
    text-align: left;
    margin-bottom: 0;
    max-width: 45%; 
  }
  

  .newsletter-form {
    display: flex;
    flex-direction: row; 
    gap: 1rem; 
    max-width: 48%; 
    overflow: hidden;
  }

  .newsletter-title {
    font-size: 24px;
    margin-bottom: 1rem;
  }
  
  .newsletter-text {
    font-size: 16px;
  }

  .email-input {
    border-right: none;
    border-radius: 4px; 
    flex-grow: 1; 
    width: 50rem;
    
  }

  .subscribe-btn {
    width: auto; 
    border-radius: 4px; 
    padding: 0.75rem 1.5rem; 
  }
}
</style>