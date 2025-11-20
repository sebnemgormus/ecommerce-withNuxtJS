<template>
  <div class="category-card" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="card-content">
      <div class="card-inner-box">
        <h3 class="card-title-inner">{{ title }}</h3>
        <div class="card-description-block">
          <p>{{ description }}</p>
          <button class="browse-button">BROWSE</button>
        </div>
      </div>
      <h3 class="card-title-default">{{ title }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>

.category-card {
  position: relative;
  width: 100%; 
  padding-top: 56.25%; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.category-card:active {
  transform: scale(0.98); 
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  transition: background-color 0.3s ease;
}

.card-title-default {
  display: none;
}

.card-inner-box {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 6px;
  width: 80%;
  max-width: 300px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1; 
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card-title-inner {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #2A2A48; 
}

.card-description-block p {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    color: #485363;
}

.browse-button {
  background-color: #0099A8;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
}

/* Desktop */

@media (min-width: 48rem) {
 
  .card-content {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .card-inner-box {
    opacity: 0; 
    transform: translateY(10px);
  }
  
  .card-title-default {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin: 0; 
    opacity: 1; 
    transition: opacity 0.3s ease;
  }

  .category-card:hover .card-title-default {
    opacity: 0; 
  }

  .category-card:hover .card-inner-box {
    opacity: 1; 
    transform: translateY(0);
  }
}
</style>