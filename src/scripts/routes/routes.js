import ListRestaurant from '../views/pages/list-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/favorite-restaurant': FavoriteRestaurant,
  '/detail/:id': Detail,
};
 
export default routes;
