import { Navbar, Footer } from "../../components/index";

function CartManagement() {
  return (
    <div class="homepage_main_container">
      {/* <!-- NavBar --> */}
      <Navbar />

      {/* <!-- hero banner image--> */}
      <section class="productlisting_banner_container"></section>

      <h2 class="cart_page_title">My Cart (3)</h2>

      <section class="cart_container d-flex productlisting_main_content_container">
        {/* <!-- Product items container --> */}
        <div class="cart_products_container d-flex">
          <div class="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
            <div class="Card-horizontalImage-text">
              <img
                class="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
                src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg"
                alt="plant"
              />
              <i class="fa-solid fa-xmark cart_card_closeicon"></i>

              <div class="ml-2 cart_card_content">
                <h3 class="card-heading">Indoor Aleovera Plant</h3>
                <small class="card-subHeading">Air purifier</small>
                <p class="card-description text-bold">₹ 800</p>

                <div class="d-flex cart_card_quantitycontainer">
                  <small>Quantity :</small>
                  <button class="btn cart_card_outlinebtn customstyle_btn">
                    +
                  </button>
                  <input class="cart_card_quantity_inp" type="text" value="1" />
                  <button class="btn cart_card_outlinebtn customstyle_btn">
                    -
                  </button>
                </div>

                <div class="d-flex mt-2 cart_card_btncontainer mb-2">
                  <button class="btn btn-text-icon cart_card_solidbtn cta-btn mr-1">
                    Remove from Cart
                  </button>
                  <button class="btn btn-text-icon cart_card_outlinebtn">
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
            <div class="Card-horizontalImage-text">
              <img
                class="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
                src="https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg"
                alt="plant"
              />
              <i class="fa-solid fa-xmark cart_card_closeicon"></i>

              <div class="ml-2 cart_card_content">
                <h3 class="card-heading">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Air purifier</small>
                <p class="card-description text-bold">₹ 1200</p>

                <div class="d-flex cart_card_quantitycontainer">
                  <small>Quantity :</small>
                  <button class="btn cart_card_outlinebtn customstyle_btn">
                    +
                  </button>
                  <input class="cart_card_quantity_inp" type="text" value="1" />
                  <button class="btn cart_card_outlinebtn customstyle_btn">
                    -
                  </button>
                </div>

                <div class="d-flex mt-2 cart_card_btncontainer mb-2">
                  <button class="btn btn-text-icon cart_card_solidbtn cta-btn mr-1">
                    Remove from Cart
                  </button>
                  <button class="btn btn-text-icon cart_card_outlinebtn">
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="card-basic Card-horizontalImage-textContainer cart_card_resize p-relative">
            <div class="Card-horizontalImage-text">
              <img
                class="card-img Card-horizontalImage-text-img Card-horizontalImage-text-img-Ecommerce cart_card_imgresize"
                src="https://cdn.shopify.com/s/files/1/0317/0687/3992/products/232-large_default.jpg?v=1580435931"
                alt="plant"
              />
              <i class="fa-solid fa-xmark cart_card_closeicon"></i>

              <div class="ml-2 cart_card_content">
                <h3 class="card-heading">Aleovera Indoor Plant</h3>
                <small class="card-subHeading">Succulent</small>
                <p class="card-description text-bold">₹ 999</p>

                <div class="d-flex cart_card_quantitycontainer">
                  <small>Quantity :</small>
                  <button class="btn cart_card_outlinebtn customstyle_btn">
                    +
                  </button>
                  <input class="cart_card_quantity_inp" type="text" value="1" />
                  <button class="btn cart_card_outlinebtn customstyle_btn">
                    -
                  </button>
                </div>

                <div class="d-flex mt-2 cart_card_btncontainer mb-2">
                  <button class="btn btn-text-icon cart_card_solidbtn cta-btn mr-1">
                    Remove from Cart
                  </button>
                  <button class="btn btn-text-icon cart_card_outlinebtn">
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Payment details card container --> */}
        <div class="cart_payment_receipt card-basic">
          <div class="b-bottom1 cart_pricedetails_section_gap">
            <h4>PRICE DETAILS</h4>
          </div>
          <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
            <p>Price (3 items)</p>
            <p>₹ 3,000</p>
          </div>

          <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
            <p>Discount</p>
            <p>− ₹3,660</p>
          </div>

          <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex">
            <p>Coupons for you</p>
            <p>− ₹100</p>
          </div>

          <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex b-bottom1">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>

          <div class="cart_pricedetails_section cart_pricedetails_section_gap d-flex b-bottom1">
            <h3>TOTAL AMOUNT</h3>
            <h3>₹837</h3>
          </div>

          <p class="cart_pricedetails_section_gap">
            You will save ₹3,760 on this order
          </p>

          <div class="cart_pricedetails_section_gap mb-1">
            <button class="btn cta-btn cart_pricedetails_section_gap width-100p">
              PLACE ORDER
            </button>
          </div>
        </div>
      </section>

      <div class="horizontal_rule_container">
        <hr class="horizontal_rule" />
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default CartManagement;
