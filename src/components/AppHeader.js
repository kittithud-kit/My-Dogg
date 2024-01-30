import "./AppHeader.css";

function AppHeader() {
  return (
    <header class="top-header">
      <a class="menu-item brand" href="index.js">
        My Dog
      </a>
      <a class="menu-item" href="index.js">
        Home
      </a>
      <a
        class="menu-item"
        target="_blank"
        href="https://www.pedigree.co.th/our-products"
      >
        animal feed
      </a>
      <a
        class="menu-item"
        target="_blank"
        href="https://th.shein.com/Pet-Clothing-c-2875.html"
      >
        accessories
      </a>
      <a
        class="menu-item"
        target="_blank"
        href="https://www.kaidee.com/c62-pet"
      >
        Pets
      </a>
    </header>
  );
}
export default AppHeader;
