const navbar = () => {
  return `<div id="navbar">
    <h3><a href="/">Home</a></h3>

    <div class="options">
      <h3><a href="jewellery.html">Jewellery</a></h3>
      <h3><a href="electronics.html">Electronics</a></h3>
      <h3><a href="#">Register</a></h3>
      <h3><a href="#">Login</a></h3>
    </div>
  </div>`;
};

//default will be used only when there is one function
//otherwise we had to use multiple objects

export default navbar;