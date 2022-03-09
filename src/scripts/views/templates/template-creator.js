import CONFIG from '../../globals/config';
 
const createRestaurantDetailTemplate = (restaurant) => `
<article class="post-item">
  <h1 class="post-item__title">${restaurant.name}</h1>
  <div class="img_post">
  <img class="post-item__thumbnail lazyload" src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  </div>
  <div class="post-item__content">
    <p>⭐️${restaurant.rating}/5</</p>
    <p>${restaurant.city}</p>
    <p>${restaurant.address}</p>
    <p class="post-item__titleresto">Kategori Menu</p>
    <ul>
    ${restaurant.categories
      .map(
          (category) => `
          <li><span class="category">${category.name}</span></li>
        `,
      ).join('')}
    </ul>
    <p class="post-item__titleresto">Menu Makanan</p>
    <ul>${restaurant.menus.foods
      .map(
          (foods) => `
          <li><span class="foods">${foods.name}</span></li>
        `,
      ).join('')}
    </ul>
    <p class="post-item__titleresto">Menu Minuman</p>
    <ul>${restaurant.menus.drinks
      .map(
          (drinks) => `
          <li><span class="drinks">${drinks.name}</span></li>
        `,
      ).join('')}
    </ul>
    <p class="post-item__titleresto">Overview</p>
    <p>${restaurant.description}</p>
    <p class="post-item__titleresto">Review</p>
    <ul>${restaurant.customerReviews
      .map(
          (review) => `
          <div class="detail_review">
          <div class="review_header">
            <p class="review_name">&nbsp;${review.name}</p>
            <p class="review_date">Tanggal: ${review.date}</p>
          </div>
          <div class="review_content">
            Review: ${review.review}
          </div>
        </div>
        `,
      ).join('')}
    </ul>
  </div>
  </article>
`;
 
const createRestaurantItemTemplate = (restaurants) => `
<article class="post-item">
      <img class="post-item__thumbnail lazyload"
      data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurants.pictureId}"
      alt="${restaurants.name}">
      <div class="post-item__content">
        <p class="post-item__rating">
        ${restaurants.city} 
        </p>
        <p>⭐️${restaurants.rating}</p>
        <div class="post-item__title">
        <a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a>
        </div>
        <p class="post-item__description">${restaurants.description}</p>
    </div>
</article>
  `;
 
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

