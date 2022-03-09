class HeroCatalog extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <p class="hero__tagline">Cardozo List menyediakan list restoran terbaik.</p>
            </div>
        </div>
      `;
  }
}

customElements.define('hero-catalog', HeroCatalog);
