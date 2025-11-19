<template>
  <section class="hero-slider">
    <button 
      class="prev-btn" 
      @click="prevSlide" 
      aria-label="Önceki Slayt" 
      :disabled="currentSlideIndex === 0"
    >
      <img 
        :src="leftIcon" 
        alt="Önceki" 
        :class="{'is-disabled-icon': currentSlideIndex === 0}" 
      />
    </button>
    <button class="next-btn" @click="nextSlide" aria-label="Sonraki Slayt">
      <img :src="rightIcon" alt="Sonraki" />
    </button>
    <div class="container">
      <div class="slider-wrapper">
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="slide" 
          :class="{ active: currentSlideIndex === index }"
        >
          <div class="slide-image">
            <img :src="slide.imageUrl" :alt="slide.title" />
          </div>
          <div class="slide-content">
            <p class="slide-subtitle">{{ slide.subtitle }}</p>
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-description" v-html="slide.description"></p>
            <button class="shop-now-btn">SHOP NOW</button>
          </div>
        </div>

        <div class="slider-indicators">
          <span 
            v-for="(slide, index) in slides" 
            :key="index" 
            class="indicator" 
            :class="{ active: currentSlideIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import sliderImage from '~/assets/images/slider.png';
import leftIcon from '~/assets/icons/leftarrow.svg';
import rightIcon from '~/assets/icons/rightarrow.svg';

const slides = ref([
  {
    subtitle: 'NATURALS BY WATSONS',
    title: 'The new 2021 collection',
    description: 'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    imageUrl: sliderImage 
  },
  {
    subtitle: 'NATURALS BY WATSONS',
    title: 'The new 2021 collection',
    description: 'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    imageUrl: sliderImage 
  },
  {
    subtitle: 'NATURALS BY WATSONS',
    title: 'The new 2021 collection',
    description: 'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    imageUrl: sliderImage 
  },
]);

const currentSlideIndex = ref(0);

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--;
  }
};

const goToSlide = (index) => {
  currentSlideIndex.value = index;
};
</script>

<style scoped>

.hero-slider {
  background-color: #f2f0ff;
  overflow: hidden;
  position: relative;
  --container-max-width: 1200px;
  --side-padding: calc((100vw - var(--container-max-width)) / 2);
}

.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  gap: 1.5rem;
  transition: transform 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateX(100%);
}

.slide.active {
  position: relative;
  opacity: 1;
  transform: translateX(0);
  z-index: 1;
}

.slide:not(.active) {
  pointer-events: none;
}

.slide-image {
  width: 100%;
  max-width: 300px;
}

.slide-image img {
  width: 100%;
  display: block;
}

.slide-content {
  text-align: left;
}

.slide-subtitle {
  font-size: 12px;
  color: #8493A8;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.slide-title {
  font-size: 24px;
  font-weight: 700;
  color: #2A2A48;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.slide-description {
  font-size: 16px;
  color: #485363;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.shop-now-btn {
  background-color: #FF27AD;
  width: 100%;
  color: white;
  border: none;
  padding: 0.6rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-bottom: 2rem;
}

.shop-now-btn:hover {
  background-color: #F1129C;
}

.prev-btn,
.next-btn {
  display: none;
}

.slider-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #505357;
  width: 10px;
  height: 10px;
}

/* TABLET */
@media (min-width: 48rem) {

  .hero-slider {
    padding: 1.5rem 0 2.5rem 0;
  }

.slide {
    flex-direction: row-reverse; 
    justify-content: space-between;
    text-align: left;
  }

  .slide-content {
    max-width: 55%;
  }

  .slide-image {
    max-width: 40%;
  }

  .slide-image img {
    max-height: 400px;
    object-fit: contain;
  }

  .slide-title {
    font-size: 34px;
  }

  .shop-now-btn {
    width: 28%;
    padding: 0.8rem 2rem;
  }

  .prev-btn,
  .next-btn {
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 20;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .prev-btn:hover:not(:disabled),
  .next-btn:hover {
    background-color: #ECECEC;
  }

  .prev-btn img,
  .next-btn img {
    width: 20px;
    height: 20px;
    filter: none;
    transition: filter 0.3s ease;
  }

  .is-disabled-icon {
    filter: invert(82%) sepia(6%) saturate(399%) hue-rotate(188deg) brightness(94%) contrast(91%);
  }

  .prev-btn:disabled {
    cursor: default;
    background-color: transparent !important;
  }

  .prev-btn:disabled img {
    filter: invert(82%) sepia(6%) saturate(399%) hue-rotate(188deg) brightness(94%) contrast(91%) !important;
  }

.prev-btn {
    left: max(1rem, var(--side-padding));
  }

  .next-btn {
    right: max(1rem, var(--side-padding));
  }

  .slider-indicators {
    bottom: 2.7rem;
    left: 2.5%;
    gap: 0.75rem;
  }
}

/* Desktop */
@media (min-width: 64rem) {

  .slide-content {
    max-width: 53%;
  }

  .slide-image {
    max-width: 45%;
  }

  .prev-btn {
    left: 2.5%;
  }
  .next-btn {
    right: 2.5%;
  }
}

</style>
