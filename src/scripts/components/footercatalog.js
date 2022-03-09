class FooterCatalog extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
            Copyright © 2021 - Cardozo List
        </footer>
      `;
  }
}

customElements.define('footer-catalog', FooterCatalog);
