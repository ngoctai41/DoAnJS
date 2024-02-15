// Các dòng code đầu tiên sử dụng phương thức document.querySelector để lấy các phần tử trong DOM bằng 
// cách sử dụng các lớp CSS hoặc ID tương ứng.

const header = document.querySelector('.header');
const introduce = document.querySelector('.home__introduce');
const toggleHeaderIcon = document.querySelector('.header__toggle');
const toggleHeaderMenu = document.querySelector('.header__toggle--menu');
const overlayHome = document.querySelector('.home-overlay');
const cart = document.querySelector('.header__cart');
const headerBtn = document.querySelector('.header__btn');
const modalForm = document.querySelector('.home__modalform');
const homeFormLogin = document.querySelector('.home__form');
const loginUser = document.querySelector('.login');
const avatarUser = document.querySelector('.home__loginUser');
const loginToggle = document.querySelector('.header__toggle--btn');
const logout = document.querySelector('.logout');
const loader = document.querySelector('#loading');
const quantityNumber = document.querySelector('#cart-quantity').innerHTML;


// Dòng code toggleHeaderIcon.onclick định nghĩa hành động khi phần tử có lớp
//  .header__toggle được click. Khi click, nó sẽ thêm hoặc xoá lớp .
// active cho các phần tử toggleHeaderIcon, overlayHome, và toggleHeaderMenu.
toggleHeaderIcon.onclick = () => {
  toggleHeaderIcon.classList.toggle('active');
  overlayHome.classList.toggle('show');
  toggleHeaderMenu.classList.toggle('active');
};

// Hàm document.onclick được gọi khi có sự kiện click xảy ra trong trang. Nó kiểm tra phần tử 
// được click và thực hiện các hành động tương ứng, ví dụ như ẩn giỏ hàng, ẩn menu, hoặc ẩn form.
document.onclick = function (e) {
  // xoá ẩn giỏ hàng đi
  if (e.target.id == 'cannelCart') {
    document.querySelector('.header__cart--group').classList.remove('active');
  }
  // ẩn menu
  if (
    e.target.id !== 'header__toggle--menu' &&
    e.target.id !== 'header__toggle' &&
    e.target.id !== 'home__menu--btn' &&
    e.target.id !== 'breakfast' &&
    e.target.id !== 'dinner' &&
    e.target.id !== 'lunch' &&
    e.target.id !== 'fastfood'
  ) {
    toggleHeaderIcon.classList.remove('active');
    toggleHeaderMenu.classList.remove('active');
    overlayHome.classList.remove('show');
  }
  //ẩn form
  if (e.target.id == 'home__modalform') {
    homeFormLogin.classList.remove('active');
    modalForm.classList.remove('active');
  }
};


// Khi phần tử cart được click, sẽ thêm lớp .active cho phần tử .header__cart--group.
cart.onclick = () => {
  document.querySelector('.header__cart--group').classList.add('active');
};

// khi click vào login nó sẽ hiện ra bảng dang nhap tai khoan
headerBtn.onclick = () => {
  modalForm.classList.toggle('active');
  homeFormLogin.classList.toggle('active');
};
// khi click vào login toggle nó sẽ hiện ra bảng dang nhap tai khoan
loginToggle.onclick = () => {
  modalForm.classList.toggle('active');
  homeFormLogin.classList.toggle('active');
};

let URL = 'https://server-test-app-login.herokuapp.com/v1/api/auth/login';
// khi click vo nó sẽ kiểm tra nếu đúng tk thì đăng nhâp
loginUser.onclick = () => {
  let username = document.querySelector('#username').value;
  let pass = document.querySelector('#psw').value;
  let email = document.querySelector('#email').value;
  document.querySelector('.login').disabled = true;

  if (
    username == 'abc123' &&
    pass == 'abc123456' &&
    email == 'abc1234@gmaila.com'
  ) {
    alert('success');
    modalForm.classList.toggle('active');
    avatarUser.innerHTML = `
        <div class="home__avatarLogin">
        <img src="assets/img/avtlogin.jpg" alt="" />
           <a href="#!" class="logout">Log out</a>
      </div>
        `;

    loginToggle.innerHTML = `
        <div class="home__avatarLogin">
        <img src="assets/img/avtlogin.jpg" alt="" />
           <a href="#!" class="logout">Log out</a>
      </div>
        `;
    document.querySelector('.home__modalform').style.display = 'none';
    loginToggle.style.background = '#fff';
  } else {
    alert('not found account');
    document.querySelector('.login').disabled = false;
  }
};
//Khi click vô logout de dang xuat
// logout.onclick = () => {
//   loginToggle.innerHTML = 'Login';
// };
// Khi click vào các ô chọn buổi sáng hay trưa chiều tối sẽ thay dỗi background
const sessionFood = document.querySelector('.inputsessionFood');
//mảng
let allSession = document.getElementsByClassName('inputsessionFood');
for (let i = 0; i < allSession.length; i++) {
  allSession[i].onclick = () => {
    document.querySelector(`.${allSession[i].value}`).classList.toggle('color');
  };
}
// render slide author
const slideauthor = document.querySelector('#slideauthor');

slideauthor.innerHTML = `
<div class="swiper-slide">
                <div class="slideauthor">
                  <p class="home__testimonal--authordiscribe">
                    <span>"</span>
                    Lorem ipsum dolor sit amet consectetur. Eget vel turpis
                    sitdiam convallis nec non. Sollicitudin fringilla mauris
                    sollicitudin in.
                  </p>
                  <div class="home__testimonal--authorInfo">
                    <img src="assets/img/author1.png" alt="" />
                    <p class="home__testimonal--authordiscribe">Elina Crusie</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideauthor">
                  <p class="home__testimonal--authordiscribe">
                    <span>"</span>
                    Lorem ipsum dolor sit amet consectetur. Eget vel turpis
                    sitdiam convallis nec non. Sollicitudin fringilla mauris
                    sollicitudin in.
                  </p>
                  <div class="home__testimonal--authorInfo">
                    <img src="assets/img/author1.png" alt="" />
                    <p class="home__testimonal--authordiscribe">Elina Crusie</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slideauthor">
                  <p class="home__testimonal--authordiscribe">
                    <span>"</span>
                    Lorem ipsum dolor sit amet consectetur. Eget vel turpis
                    sitdiam convallis nec non. Sollicitudin fringilla mauris
                    sollicitudin in.
                  </p>
                  <div class="home__testimonal--authorInfo">
                    <img src="assets/img/author1.png" alt="" />
                    <p class="home__testimonal--authordiscribe">Elina Crusie</p>
                  </div>
                </div>
              </div>`;
// render ra các món ăn breakfast
const homeFood = document.querySelector('.home__menu--allFood');
const btnBreakfast = document.querySelector('.Breakfast');
const btnLunch = document.querySelector('.Lunch');
const btnDinner = document.querySelector('.Dinner');
const btnFastFood = document.querySelector('.Fastfood');
const loadMenu = document.querySelector('.home__menu--btn');

let URL1 = 'https://637725e35c47776512155915.mockapi.io/restaurant';
// hàm render ra thức ăn breakfast
function renderBreakfast(data) {
  displayLoading();
  var html = ``;
  for (let j = 0; j < 6; j++) {
    html += `<div class="home__cardFood">
              <img
                src="${data[j].thumbnail}"
                alt=""
                class="home__cardFoodImg"
              />
              <div class="home__cardFood--nameAndPrice">
                <p class="home__cardFood--name">${data[j].name}</p>
                <p class="home__cardFood--price">${data[j].price}</p>
              </div>
              <p class="home__cardFood--discribe">
               ${data[j].description}
              </p>
              <div class="home__cardFood--rateaddCart">
                <div class="home__cardFood--rate">
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star" ></span>
                  <span class="fa fa-star" ></span>
                </div>
                <button class="home__cardFood--btn" onclick ="showModalMenu('${data[j].description}','${data[j].thumbnail}',${data[j].rate},'${data[j].name}','${data[j].price}','${data[j].id}')">Add to Cart</button>
              </div>
            </div>`;
  }
  homeFood.innerHTML = html;
  // restart lại các btn khác
  restart();
  // dis nó đi để ko phải load thêm thức ăn
  btnBreakfast.disabled = true;
}
// hàm render ra thức ăn buổi trưa(lunch)
function renderLunch(data) {
  displayLoading();
  var html3 = ``;
  for (let j = 12; j < 18; j++) {
    html3 += `<div class="home__cardFood">
              <img
                src="${data[j].thumbnail}"
                alt=""
                class="home__cardFoodImg"
              />
              <div class="home__cardFood--nameAndPrice">
                <p class="home__cardFood--name">${data[j].name}</p>
                <p class="home__cardFood--price">${data[j].price}</p>
              </div>
              <p class="home__cardFood--discribe">
               ${data[j].description}
              </p>
              <div class="home__cardFood--rateaddCart">
                <div class="home__cardFood--rate">
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star" ></span>
                  <span class="fa fa-star" ></span>
                </div>
                <button class="home__cardFood--btn" onclick ="showModalMenu('${data[j].description}','${data[j].thumbnail}',${data[j].rate},'${data[j].name}','${data[j].price}','${data[j].id}')">Add to Cart</button>
              </div>
            </div>`;
  }
  homeFood.innerHTML = html3;
  // restart lại các btn khác
  restart();
  // dis nó đi để ko phải load thêm thức ăn
  btnLunch.disabled = true;
}
// hàm render ra thức ăn buổi tối(dinner)
function renderDinner(data) {
  displayLoading();
  var html4 = ``;
  for (let j = 18; j < 24; j++) {
    html4 += `<div class="home__cardFood">
              <img
                src="${data[j].thumbnail}"
                alt=""
                class="home__cardFoodImg"
              />
              <div class="home__cardFood--nameAndPrice">
                <p class="home__cardFood--name">${data[j].name}</p>
                <p class="home__cardFood--price">${data[j].price}</p>
              </div>
              <p class="home__cardFood--discribe">
               ${data[j].description}
              </p>
              <div class="home__cardFood--rateaddCart">
                <div class="home__cardFood--rate">
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star" ></span>
                  <span class="fa fa-star" ></span>
                </div>
                <button class="home__cardFood--btn" onclick ="showModalMenu('${data[j].description}','${data[j].thumbnail}',${data[j].rate},'${data[j].name}','${data[j].price}','${data[j].id}')">Add to Cart</button>
              </div>
            </div>`;
  }
  homeFood.innerHTML = html4;
  // restart lại các btn khác
  restart();
  // dis nó đi để ko phải load thêm thức ăn
  btnDinner.disabled = true;
}
// hàm render ra thức ăn nhanh(fast food)
function renderFastFood(data) {
  displayLoading();
  var html5 = ``;
  for (let j = 0; j < 6; j++) {
    html5 += `<div class="home__cardFood">
              <img
                src="${data[j].thumbnail}"
                alt=""
                class="home__cardFoodImg"
              />
              <div class="home__cardFood--nameAndPrice">
                <p class="home__cardFood--name">${data[j].name}</p>
                <p class="home__cardFood--price">${data[j].price}</p>
              </div>
              <p class="home__cardFood--discribe">
               ${data[j].description}
              </p>
              <div class="home__cardFood--rateaddCart">
                <div class="home__cardFood--rate">
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star" ></span>
                  <span class="fa fa-star" ></span>
                </div>
                <button class="home__cardFood--btn" onclick ="showModalMenu('${data[j].description}','${data[j].thumbnail}',${data[j].rate},'${data[j].name}','${data[j].price}','${data[j].id}')">Add to Cart</button>
              </div>
            </div>`;
  }
  homeFood.innerHTML = html5;
  // restart lại các btn khác
  restart();
  // dis nó đi để ko phải load thêm thức ăn
  btnFastFood.disabled = true;
}
// hàm loading ra tat ca cac mon an
function renderAllFood(data) {
  displayLoading();
  var html2 = ``;
  for (let j = 0; j < data.length; j++) {
    html2 += `<div class="home__cardFood">
              <img
                src="${data[j].thumbnail}"
                alt=""
                class="home__cardFoodImg"
              />
              <div class="home__cardFood--nameAndPrice">
                <p class="home__cardFood--name">${data[j].name}</p>
                <p class="home__cardFood--price">${data[j].price}</p>
              </div>
              <p class="home__cardFood--discribe">
               ${data[j].description}
              </p>
              <div class="home__cardFood--rateaddCart">
                <div class="home__cardFood--rate">
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star" ></span>
                  <span class="fa fa-star" ></span>
                </div>
                <button class="home__cardFood--btn" onclick ="showModalMenu('${data[j].description}','${data[j].thumbnail}',${data[j].rate},'${data[j].name}','${data[j].price}','${data[j].id}')">Add to Cart</button>
              </div>
            </div>`;
  }
  homeFood.innerHTML = html2;
  html2 = '';
  restart();
  loadMenu.disabled = true;
}
// render lần đầu liên ko cần click
function rendersomeFood(data) {
  var html6 = ``;
  for (let j = 0; j < 9; j++) {
    html6 += `<div class="home__cardFood">
              <img
                src="${data[j].thumbnail}"
                alt=""
                class="home__cardFoodImg"
              />
              <div class="home__cardFood--nameAndPrice">
                <p class="home__cardFood--name">${data[j].name}</p>
                <p class="home__cardFood--price">${data[j].price}</p>
              </div>
              <p class="home__cardFood--discribe">
               ${data[j].description}
              </p>
              <div class="home__cardFood--rateaddCart">
                <div class="home__cardFood--rate">
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star checked" ></span>
                  <span class="fa fa-star" ></span>
                  <span class="fa fa-star" ></span>
                </div>
                <button class="home__cardFood--btn" onclick ="showModalMenu('${data[j].description}','${data[j].thumbnail}',${data[j].rate},'${data[j].name}','${data[j].price}','${data[j].id}')">Add to Cart</button>
              </div>
            </div>`;
  }
  homeFood.innerHTML = html6;
  html6 = '';
  restart();
}
// hàm gán lại disabled= false cho tất cả các nút render thức ăn(breakfast,luch,...)
function restart() {
  btnBreakfast.disabled = false;
  btnLunch.disabled = false;
  btnDinner.disabled = false;
  btnFastFood.disabled = false;
  loadMenu.disabled = false;
}
// gọi fetch để render món ăn
fetch(URL1)
  .then((res) => res.json())
  .then((data) => {
    if (data) {
      // tự động render ra một vài món ăn(gọi hàm rendersomeFood)
      rendersomeFood(data);
      // khi click vao bút breakfast nó sẽ render ra món ăn thuộc breakfast
      btnBreakfast.onclick = () => {
        renderBreakfast(data);
      };
      // khi click vao bút breakfast nó sẽ render ra món ăn thuộc lunch
      btnLunch.onclick = () => {
        renderLunch(data);
      };
      // khi click vao bút breakfast nó sẽ render ra món ăn thuộc dinner
      btnDinner.onclick = () => {
        renderDinner(data);
      };
      // khi click vao bút breakfast nó sẽ render ra món ăn thuộc fastFood
      btnFastFood.onclick = () => {
        renderFastFood(data);
      };

      // khi click vào browse all ở trang web nó sẽ render ra tất cả các món ăn có trong api
      loadMenu.onclick = () => {
        renderAllFood(data);
      };
    }
  });
// hàm giảm só lượng khi click vô nút +
function decrease(price) {
  let formatPrice = parseInt(price.slice(1));
  let valueInputMount = document.querySelector(
    '.home__modal-mount--input'
  ).value;
  let newPrice =
    '$' +
    (parseInt(
      document.querySelector('.home__menu-modal--price span').innerHTML.slice(1)
    ) -
      formatPrice);
  if (valueInputMount > 1) {
    document.querySelector('.home__modal-mount--input').value =
      parseInt(valueInputMount) - 1;
    document.querySelector('.home__menu-modal--price span').innerText =
      newPrice;
  }
}
// hàm tăng só lượng khi click vô nút +
function increase(price) {
  let formatPrice = parseInt(price.slice(1));
  if (document.querySelector('.home__modal-mount--input').value == '') {
    document.querySelector('.home__modal-mount--input').value = 1;
  }
  let valueInputMount = document.querySelector(
    '.home__modal-mount--input'
  ).value;
  let newPrice = formatPrice * (parseInt(valueInputMount) + 1);
  document.querySelector('.home__modal-mount--input').value =
    parseInt(valueInputMount) + 1;
  document.querySelector('.home__menu-modal--price span').innerText =
    '$' + newPrice;
}
//  khi blur ra khỏi ô input số lượng
function onblurInputMountModal(price) {
  let pricedformat = parseInt(price.slice(1));
  if (document.querySelector('.home__modal-mount--input').value == '') {
    document.querySelector('.home__modal-mount--input').value = 1;
  }
  let valueInputMount = document.querySelector(
    '.home__modal-mount--input'
  ).value;
  let newPrice = pricedformat * parseInt(valueInputMount);
  document.querySelector('.home__menu-modal--price span').innerText =
    '$' + newPrice;
}

// hàm thêm thức ăn vào danh sách giỏ hàng
var checkFoodAdded = [];
var checkArr = 0;
const cartList = document.querySelector('#cart-list');
function addFoodCart(name, thumbnail, id, price) {
  console.log('chaubui3', price);
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart__item');
  cartItem.classList.add(`cart__item${id}`);

  cartItem.innerHTML = ` 
  <div class="cart__item-thumbnail">
    <img
      src="${thumbnail}"
      alt="${name}"
    />
  </div>  
  <h5 class="cart__item--name">${name}</h5>
  <div class="cart__item-quantity">
    <p class="cart__item--price">${price}</p>
    <button
      class="cart__item--btn cart__item--trash" onclick = "removeFoodCart(${id})"
    >
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
  `;
  if (checkFoodAdded.length == 0) {
    cartList.appendChild(cartItem);
    checkFoodAdded.push(id);
  } else {
    for (let i = 0; i < checkFoodAdded.length; i++) {
      if (checkFoodAdded[i] == id) checkArr += 1;
    }
    if (checkArr > 0) {
      document.querySelector(`.cart__item${id}`).remove();
      cartList.appendChild(cartItem);
      checkArr = 0;
    } else {
      cartList.appendChild(cartItem);
      checkFoodAdded.push(id);
      checkArr = 0;
    }
  }
}
//hàm xoá đi đồ ăn trong giỏ hàng
var count = 0;
var count2 = 0;
function removeFoodCart(id) {
  // set lại mảng tăng 1 số lượng chứa id các sản phẩm
  if (arrQuantity.length != 0) {
    for (let j = 0; j < arrQuantity.length; j++) {
      if (arrQuantity[j] !== id) {
        count2 += 1;
      }
    }
    arrQuantity.splice(count2 - 1, count2);
    count2 = 0;
  }
  // set lại mảng chứa id sản phẩm để check sản phẩm
  if (checkFoodAdded.length != 0) {
    for (let j = 0; j < checkFoodAdded.length; j++) {
      if (checkFoodAdded[j] !== id) {
        count += 1;
      }
    }
    checkFoodAdded.splice(count - 1, count);
    count = 0;
  }
  document.querySelector(`.cart__item${id}`).remove();
  let valueCart = document.querySelector('#cart-quantity');
  valueCart.innerHTML = `<p>${quantityCurrent - 1}</p>`;
  quantityCurrent -= 1;
}
// hàm tăng thêm số lượng vao giỏ hàng
let quantityCurrent = 0;
let arrQuantity = [];
let checkCart = 0;
function cartAdd(id, name, thumbnail, price) {
  console.log(arrQuantity);
  console.log('chaubui2', price);
  if (document.querySelector('.home__modal-mount--input').value == '') {
    document.querySelector('.home__modal-mount--input').value = 1;
  }
  if (arrQuantity.length === 0) {
    arrQuantity.push(id);
    let valueCart = document.querySelector('#cart-quantity');
    valueCart.innerHTML = `<p>${quantityCurrent + 1}</p>`;
    quantityCurrent += 1;
  } else {
    for (i = 0; i < arrQuantity.length; i++) {
      if (arrQuantity[i] === id) {
        checkCart += 1;
      }
    }
    if (checkCart !== 1) {
      arrQuantity.push(id);
      document.querySelector('#cart-quantity').innerHTML = `<p>${
        quantityCurrent + 1
      }</p>`;
      quantityCurrent += 1;
    }
    checkCart = 0;
  }
  addFoodCart(name, thumbnail, id, price);
  document.querySelector('.home__menu--modal').style.visibility = 'hidden';
}
// click vào nút thêm vào giỏ hàng nó sẽ hiện lên modal
function showModalMenu(disc, img, rate, name, price, id) {
  console.log('chaubui', price);
  document.querySelector('.home__menu--modal').innerHTML = `
   <div class="home__menu-modal--container">
            <div class="home__menu-modal--img">
              <img src="${img}" alt="" />
              <p class="home__menu-modal--desc">${disc}</p>
            </div>
            <div class="home__menu-modal--content">
              <p class="home__menu-modal--title">${name}</p>
              <div class="home__menu-modal--rate">
                <span class="span-title">${rate}.0</span>
                <div class="home__modal-rate--group">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
              </div>
              <div class="home__menu-modal--price">
                <span>${price}</span>
              </div>
              <div class="home__menu-modal--amount">
                <p>Quantity</p>
                <div class="home__modal-amount">
                  <button
                    class="home__modal-mount--decrease"
                    onclick="decrease('${price}')"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <input
                    class="home__modal-mount--input"
                    type="number"
                    value="1"
                    onblur="onblurInputMountModal('${price}')"
                    min="1"
                    oninput="validity.valid||(value='');"
                  />
                  <button
                    class="home__modal-mount--increase"
                    onclick="increase('${price}')"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div class="home__menu-modal--buy">
                <button
                  class="home__menu-modal--addCart"
                  onclick="cartAdd('${id}', '${name}', '${img}', '${price}')"
                >
                  <img src="./assets/img/cart.svg" alt="Cart icon" />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            <div class="home__menu-modal--close" onclick="closeAndOpen()" ;>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
  `;

  let star = document.querySelector('.home__modal-rate--group').children;
  for (let i = 0; i < rate; i++) {
    star[i].classList.add('checked');
  }

  document.querySelector('.home__menu--modal').style.visibility = 'visible';
}
// đóng modal menu lại
function closeAndOpen() {
  document.querySelector('.home__menu--modal').style.visibility = 'hidden';
}
//loading
function displayLoading() {
  loader.classList.add('display');
  document.querySelector('.home-overlay').classList.add('show');

  // to stop loading after some time
  setTimeout(() => {
    loader.classList.remove('display');
    document.querySelector('.home-overlay').classList.remove('show');
  }, 1000);
}

// khi scroll > 80px nó sẽ thêm class sticky vào header

window.onscroll = () => {
  header.classList.toggle('sticky', window.scrollY > 80);
};
