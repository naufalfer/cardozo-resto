/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Restaurant');
 
Before(({I}) => {
  I.amOnPage('/#/favorite-restaurant');
});

const firstCondition = 'Kamu belum menyukai Restaurant manapun.';
 
Scenario('showing empty list favorite restaurants', ({I}) => {
  I.dontSeeElement('#posts .post-item');
});

Scenario('liking one resto', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('#posts .post-item');
  I.wait(1);
  const firstResto = locate('#posts .post-item .post-item__content .post-item__title').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.wait(1);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');
  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('#posts .post-item');
  const likedRestoName = await I.grabTextFrom('#posts .post-item .post-item__content .post-item__title');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('Unliking one resto', async ({I}) => {
  I.see(firstCondition, '#posts');
  
  I.amOnPage('/');
  I.seeElement('#posts .post-item');
  I.wait(1);
  const firstResto = locate('#posts .post-item .post-item__content .post-item__title').first();
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('#posts .post-item');

  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');
  I.amOnPage('/#/favorite-restaurant');
  const noFavRestaurant = await I.grabTextFrom('#posts');
  assert.strictEqual(firstCondition, noFavRestaurant);
});

