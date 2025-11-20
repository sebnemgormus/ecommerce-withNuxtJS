<template>
  <div class="featured-categories">
    <h2 class="section-title">Featured categories</h2>
    <div class="cards-container">
      <CategoryCard 
        v-for="category in categories"
        :key="category.title"
        :title="category.title"
        :description="category.description"
        :image="category.image"
      />
    </div>
  </div>
</template>

<script>

import CategoryCard from './CategoryCard.vue';
import personalCareImage from '@/assets/images/personalcare.jpg'; 
import skinCareImage from '@/assets/images/skincare.jpg'; 
import makeUpImage from '@/assets/images/makeup.jpg'; 
import motherBabyImage from '@/assets/images/mother.jpg'; 

export default {
  name: 'FeaturedCategories',
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: [
        {
          title: 'Personal Care',
          description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
          image: personalCareImage 
        },
        {
          title: 'Skin Care',
          description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
          image: skinCareImage 
        },
        {
          title: 'Make - Up',
          description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
          image: makeUpImage 
        },
        {
          title: 'Mother & Baby',
          description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
          image: motherBabyImage 
        }
      ]
    }
  }
}

</script>

<style scoped>

.featured-categories {
  padding: 15px; 
  margin-top: 12px;
}

.section-title {
  display: flex; 
  align-items: center; 
  text-align: center;
  color: #0099A8;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.section-title::before,
.section-title::after {
  content: '';
  flex-grow: 1; 
  height: 1px; 
  background-color: #0099A81A; 
}

.section-title::before {
  margin-right: 1rem;
}

.section-title::after {
  margin-left: 1rem;
}

.cards-container {
  display: flex;
  flex-direction: column; 
  gap: 10px; 
}

/* Desktop */

@media (min-width: 48rem) {
  .featured-categories {
    padding: 30px 50px;
    max-width: 1200px;
    margin: 0 auto; 
  }
  
  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 55px;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
}

</style>