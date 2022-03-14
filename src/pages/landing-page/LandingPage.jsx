import { Navbar } from "../../components/index";

function LandingPage() {
  return (
    <div class="homepage_main_container">
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- hero banner image --> */}
      <section class="homepage_banner_container">
        <div class="banner_content_container"></div>
      </section>

      {/* <!-- Product category section --> */}
      <section class="homepage_categories">
        <div class="categories_img_container">
          <img
            class="plant_img"
            src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/banner2-1.jpg?v=1580878417"
            alt="new plant"
          />
          <div class="info">
            <h2 class="categories_img_title">Indoor Plants!</h2>
            <p class="categories_img_subtitle_plant">Get 30% Off</p>
          </div>
        </div>
        <div class="categories_img_container">
          <img
            class="plant_img"
            src="https://cdn.shopify.com/s/files/1/0317/0687/3992/files/banner2-2.jpg?v=1580878425"
            alt="bestselling plant"
          />
          <div class="info info-bestselling">
            <h2 class="categories_img_title">Outdoor Plants</h2>
            <p class="categories_img_subtitle_plant">Get Exclusive Offer</p>
          </div>
        </div>
      </section>

      {/* <!-- category navigation tabs --> */}
      <section class="categories_navTab_container">
        <ul class="categories_navTabs_list">
          <li>
            <a
              class="categories_navLink categories_navLink1"
              href="/new-arrivals"
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a
              class="categories_navLink categories_navLink2"
              href="/bestsellers"
            >
              Best Sellers
            </a>
          </li>
          <li>
            <a class="categories_navLink categories_navLink2" href="/trending">
              Trending
            </a>
          </li>
        </ul>
      </section>

      {/* <!-- product card container  --> */}
      <section class="card_container">
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
      </section>

      {/* <!-- promotion banner images --> */}
      <section class="promotion_banner">
        <div>
          <img
            class="plant_img"
            src="https://cdn.shopify.com/s/files/1/1485/6894/files/home5_1_68ba45dd-a8d9-44c7-b875-d92445b1a16d.jpg?v=1520416289"
            alt="new plant"
          />
        </div>
        <div>
          <img
            class="plant_img"
            src="https://cdn.shopify.com/s/files/1/1485/6894/files/home5_2_9e0d4572-ae3e-4b72-bcea-e6aa191d2fbd.jpg?v=1520416299"
            alt="bestselling plant"
          />
        </div>
      </section>

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      {/* <!-- footer --> */}
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

export default LandingPage;
