function ProductListing() {
  return (
    <div class="homepage_main_container">
      {/* <!-- NavBar --> */}
      <nav class="nav-bar white mb-0">
        <div class="nav-innerContainer font-clr">
          <h2 class="nav-heading mr-4 font-resize">Plant.</h2>
        </div>

        <div class="nav-innerContainer font-clr width-auto">
          <input class="nav_searchBar" type="text" />
          <span class="searchBar_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div class="nav-innerContainer nav-icon-container width-reset inherit-clr mr-1">
          <div class="flex-col-center">
            <a class="font-clr" href="./wishlist.html">
              <i class="fa-solid fa-heart"></i>
            </a>
            <small>Wishlist</small>
          </div>

          <div class="flex-col-center">
            <a class="font-clr" href="./login.html">
              <i class="fa-solid fa-user"></i>
            </a>
            <small>Profile</small>
          </div>

          <div class="flex-col-center">
            <a class="font-clr nav-icon" href="./cartManagement.html">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <small>Cart</small>
          </div>
        </div>
      </nav>

      {/* <!-- hero banner image--> */}
      <section class="productlisting_banner_container"></section>

      <section class="productlisting_main_content_container d-flex">
        {/* <!-- filter sidebar --> */}
        <div class="productlisting_sidebar">
          <div class="d-flex products_filter_section">
            <h2>Filters</h2>
            <button class="btn custom_clear_btn">Clear</button>
          </div>
          <div class="mb-2">
            <h4 class="products_sidebar_title">Category</h4>
            <div class="products_sidebar_inputbox">
              <input type="checkbox" />
              <label class="ml-1" for="">
                Indoor Plants
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="checkbox" />
              <label class="ml-1" for="">
                Outdoor Plants
              </label>
            </div>

            <div>
              <input type="checkbox" />
              <label class="ml-1" for="">
                Office Plants
              </label>
            </div>
          </div>
          <div class="mb-2">
            <h4 class="products_sidebar_title">Price</h4>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                $100 - 200$
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                $200 - $300
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                $300 - $400
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                $400 - $500
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                Above $500
              </label>
            </div>
          </div>

          <div>
            <h4 class="products_sidebar_title">Rating</h4>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                4 Star &#38; above
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                3 Star &#38; above
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                2 Star &#38; above
              </label>
            </div>

            <div class="products_sidebar_inputbox">
              <input type="radio" />
              <label class="ml-1" for="">
                1 Star &#38; above
              </label>
            </div>
          </div>

          {/* <!-- sidebar promotion banner image --> */}
          <div>
            <img
              class="productlisting_promotion_banner"
              src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/slider-banner1.jpg?v=1580892429"
              alt="sale banner"
            />
          </div>
        </div>

        {/* <!-- All product card container --> */}
        <div class="productlisting_products_container">
          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Outdoor</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Air purifier</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmsWaw_vIJSZMcYul2VQS2zWeVdW-oJvijaOARcY8aoqBP1p-TIwBi6J_06bkQXJiL4E&usqp=CAU"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Succulent</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://cdn.shopify.com/s/files/1/0317/0687/3992/products/232-large_default.jpg?v=1580435931"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Succulent</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Outdoor</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Air purifier</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmsWaw_vIJSZMcYul2VQS2zWeVdW-oJvijaOARcY8aoqBP1p-TIwBi6J_06bkQXJiL4E&usqp=CAU"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Succulent</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://cdn.shopify.com/s/files/1/0317/0687/3992/products/232-large_default.jpg?v=1580435931"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Succulent</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>

          <div class="card-basic card_custom_width">
            <div class="badge-container">
              <img
                class="card-img"
                src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
                alt="plant"
              />
              <span class="card-withBadge">New</span>

              <div class="">
                <h3 class="card-heading pri_clr">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Outdoor</small>
              </div>

              <p class="card-description text-bold pri_clr">₹ 10,999</p>
            </div>

            <div class="card-footer">
              <button class="btn custom_btn">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      {/* <!-- Footer --> */}
      <footer>
        <ul class="footer_list_items">
          <li>
            <a class="mr-1 footer_link inherit-clr" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="/customer-service">
              Customer Service
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="/subscription">
              Subscription
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="/contact-us">
              Contact Us
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="/category">
              Category
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="./productListing.html">
              All Product
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="./cartManagement.html">
              My Cart
            </a>
          </li>
          <li>
            <a class="mr-1 ml-1 inherit-clr" href="./wishlist.html">
              My Wishlist
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default ProductListing;
