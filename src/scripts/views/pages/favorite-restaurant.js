import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';
 
const FavoriteRestaurant = {
  async render() {
    return `
    <div class="content">
      <div class="trendingresto">
          <h1 class="trendingresto__label">Favorite Restaurant</h1>
          <div id="posts" class="posts">
          </div>
      </div>
    </div>
  `;
  },
 
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#posts');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
        Kamu belum menyukai Restaurant manapun.
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default FavoriteRestaurant;
