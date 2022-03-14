import { Navbar, Footer, VerticalCard, HeroBanner, PromotionBanner } from "../../components/index";

function LandingPage() {
  return (
    <div class="homepage_main_container">
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- hero banner image --> */}
      <HeroBanner />

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

      <VerticalCard />
      <VerticalCard />
      <VerticalCard />
      <VerticalCard />
      <VerticalCard />
      <VerticalCard />
      <VerticalCard />
      <VerticalCard />

      {/* <!-- promotion banner images --> */}
      <PromotionBanner />

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
