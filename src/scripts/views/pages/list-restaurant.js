import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';
 
const ListRestaurant = {
  async render() {
    return `
    <div class="content">
        <div class="trendingresto">
            <h1 class="trendingresto__label">Trending Now</h1>
            <div class="posts" id="posts">
            </div>
        </div>
    </div>
  `;
  },
 
  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default ListRestaurant;
