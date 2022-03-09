class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="drawer" class="nav">
        <ul class="nav__list">
            <li class="nav__item nav__title"><a href="/">Cardozo List</a></li>
            <li class="nav__item"><a href="/">Home</a></li>
            <li class="nav__item"><a href="#/favorite-restaurant">Favorite</a></li>
            <li class="nav__item"><a href="https://www.linkedin.com/in/naufal-ferdy-sulaeman-43289a191/">About Us</a></li>
        </ul>
        </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);
