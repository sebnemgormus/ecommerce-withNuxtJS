<template>
  <div class="promotion-block">
    <picture class="promo-banner">
      <source media="(min-width: 48rem)" :srcset="banner" />
      <img :src="banner" alt="Banner Görseli" class="promo-img-banner" /> 
    </picture>
    <div class="promo-content-wrapper container"> 
      <picture class="promo-graphic-left">
        <source media="(min-width: 48rem)" :srcset="promotionleft" />
        <img :src="promotionleft" alt="Sol Görsel" class="promo-img promo-img-left" /> 
      </picture>
      <div class="promo-content">
        <div class="text-group">
            <p class="promo-title">EN SEVDİĞİNİZ ÜRÜNLER</p>
            <h2 class="promo-headline">TEK TIKLA KAPINIZDA!</h2>
        </div>
        <span class="discount">60 %</span>
        <span class="discount-label">DISCOUNT</span>
        <button class="shop-btn">SHOP NOW</button>
      </div>
      <picture class="promo-graphic-right">
        <source media="(min-width: 48rem)" :srcset="promotionright" />
        <img :src="promotionright" alt="Sağ Görsel" class="promo-img promo-img-right" /> 
      </picture>
    </div>
  </div>
</template>

<script setup>

import promotionleft from '@/assets/images/promotionleft.png'; 
import promotionright from '@/assets/images/promotionright.png';
import banner from '@/assets/images/banner.png'; 

</script>

<style scoped>

.promotion-block {
  width: 100%;
  position: relative; 
  overflow: hidden; 
  padding: 0 1rem; 
  background-color: #aed9e0; 
  display: flex;
  justify-content: center;
}


.promo-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
}

.promo-img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.promo-content-wrapper {
  width: 100%;
  max-width: 380px; 
  position: relative; 
  display: flex;
  flex-direction: column;
  z-index: 5; 
  padding-top: 4rem;
  padding-bottom: 4rem;
}


.promo-graphic-left,
.promo-graphic-right {
    position: absolute;
    transform: translateX(-50%);
    z-index: 7; 
}

.promo-graphic-right {
    left: 50%;
    width: 65%; 
    top: 3%;
}

.promo-graphic-left {
    left: 82%;
    bottom: 2rem;
    width: 92%;
    bottom: 1.5rem;
}

.promo-img {
    display: block; 
    width: 100%;
    height: auto;
    object-fit: contain;
}


.promo-content {
  background-color: white; 
  padding: 3rem 0rem 3rem 2rem; 
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-top: 9rem;
  text-align: center;
  z-index: 6; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%; 
}

.text-group {
    margin-bottom: 0.3rem;
}

.promo-title {
  font-size: 14px;
  color: #00106B;
  margin-bottom: 0.2rem;
  font-weight: 400;
  text-align: left;
  font-family: 'Roboto', sans-serif;
}

.promo-headline {
  font-size: 16px;
  font-weight: 700;
  color: #00106B;
  text-align: left;
}

.discount {
  display: block;
  font-size: 34px;
  font-weight: 700;
  margin-top: 0.5rem;
  color: #00106B;
  line-height: 1.1;
  text-align: left;
  font-family: 'Rubik', sans-serif;
}

.discount-label {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #00106B;
  margin-bottom: 0.7rem;
  text-align: left;
  font-family: 'Rubik', sans-serif;
}

.shop-btn {
  display: flex;
  background-color: #00B1B3;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 0;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s;
}
.shop-btn:hover {
  background-color: #00808a;
}

/* Desktop */ 

@media (min-width: 48rem) {

  .promotion-block {
    height: 20rem;
    padding: 0;
    background-color: #aed9e0;
  }

  .promo-banner {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .promo-img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover !important; 
  }

  .promo-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.3fr 1fr;
    max-width: 1200px;
    height: 100%;
    position: relative;
    z-index: 5;
  }

  .promo-graphic-left,
  .promo-graphic-right {
    position: static;
    transform: none;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .promo-graphic-right { 
    z-index: 999999;
  }

  .promo-graphic-right img{ 
    z-index: 999999;
    margin-right: 18rem;
  }


 .promo-graphic-left {
    width: 80%;     
    height: auto;
  }

  .promo-img-left {
    width: 170%;
    height: 100%;
    object-fit: contain;
    margin-left: 8rem;
  }

  .promo-graphic-right {
    width: 60%;     
    height: auto;
  }

  .promo-img-right {
    width: 110%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .promo-graphic-left { grid-column: 1 / 2; }
  .promo-graphic-right { grid-column: 3 / 4; }

  .promo-content {
    grid-column: 2 / 3;
    padding: 0rem 0.5rem 0rem 2rem;
    height: 96%;
    margin-top: -1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    box-shadow: none;
    width: 72%;
    background-color: white;
    z-index: 6;
  }

  .shop-btn {
    padding: 11px 10px;
    width: 38%;
  }

  .promo-banner {
    display: inline-block;
  }

  .discount-label, .discount {
  font-size: 34px;

  }
}

</style>