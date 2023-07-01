var pizzaCategories = ["Усі", "М'ясні", "З ананасами", "З грибами", "З морепродуктами", "Вега"];
var pizza_info = [
  {
    id: 1,
    icon: 'assets/images/pizza_7.jpg',
    title: "Імпреза",
    type: 'М’ясна піца',
    content: {
      meat: ['балик', 'салямі'],
      chicken: ['куриця'],
      cheese: ['сир моцарелла', 'сир рокфорд'],
      pineapple: ['ананаси'],
      additional: ['томатна паста', 'петрушка']
    },
    small_size: {
      weight: 370,
      size: 30,
      price: 99
    },
    big_size: {
      weight: 660,
      size: 40,
      price: 169
    },
    is_new: true,

  },
  {
    id: 2,
    icon: 'assets/images/pizza_2.jpg',
    title: "BBQ",
    type: 'М’ясна піца',
    content: {
      meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
      cheese: ['сир домашній'],
      mushroom: ['шампінйони'],
      additional: ['петрушка', 'оливки']
    },
    small_size: {
      weight: 460,
      size: 30,
      price: 139
    },
    big_size: {
      weight: 840,
      size: 40,
      price: 199
    },
    is_popular: true
  },
  {
    id: 3,
    icon: 'assets/images/pizza_1.jpg',
    title: "Міксовий поло",
    type: 'М’ясна піца',
    content: {
      meat: ['вітчина', 'куриця копчена'],
      cheese: ['сир моцарелла'],
      pineapple: ['ананаси'],
      additional: ['кукурудза', 'петрушка', 'соус томатний']
    },
    small_size: {
      weight: 430,
      size: 30,
      price: 115
    },
    big_size: {
      weight: 780,
      size: 40,
      price: 179
    }
  },
  {
    id: 4,
    icon: 'assets/images/pizza_5.jpg',
    title: "Сициліано",
    type: 'М’ясна піца',
    content: {
      meat: ['вітчина', 'салямі'],
      cheese: ['сир моцарелла'],
      mushroom: ['шампінйони'],
      additional: ['перець болгарський', 'соус томатний']
    },
    small_size: {
      weight: 450,
      size: 30,
      price: 111
    },
    big_size: {
      weight: 790,
      size: 40,
      price: 169
    }
  },
  {
    id: 17,
    icon: 'assets/images/pizza_3.jpg',
    title: "Маргарита",
    type: 'Вега піца',
    content: {
      cheese: ['сир моцарелла', 'сир домашній'],
      tomato: ['помідори'],
      additional: ['базилік', 'оливкова олія', 'соус томатний']
    },
    small_size: {
      weight: 370,
      size: 30,
      price: 89
    }
  },
  {
    id: 43,
    icon: 'assets/images/pizza_6.jpg',
    title: "Мікс смаків",
    type: 'М’ясна піца',
    content: {
      meat: ['ковбаски'],
      cheese: ['сир моцарелла'],
      mushroom: ['шампінйони'],
      pineapple: ['ананаси'],
      additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
    },
    small_size: {
      weight: 470,
      size: 30,
      price: 115
    },
    big_size: {
      weight: 780,
      size: 40,
      price: 180
    }
  },
  {
    id: 90,
    icon: 'assets/images/pizza_8.jpg',
    title: "Дольче Маре",
    type: 'Морська піца',
    content: {
      ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
      cheese: ['сир моцарелла'],
      additional: ['оливкова олія', 'вершки']
    },
    big_size: {
      weight: 845,
      size: 40,
      price: 399
    }
  },
  {
    id: 6,
    icon: 'assets/images/pizza_4.jpg',
    title: "Россо Густо",
    type: 'Морська піца',
    content: {
      ocean: ['ікра червона', 'лосось копчений'],
      cheese: ['сир моцарелла'],
      additional: ['оливкова олія', 'вершки']
    },
    small_size: {
      weight: 400,
      size: 30,
      price: 189
    },
    big_size: {
      weight: 700,
      size: 40,
      price: 299
    }
  }
];
var idWasActuallyAdded = 0;

function generatePizzaList(src) {
  var pizzaListContainer = document.getElementById("pizza_list");
  pizzaListContainer.innerHTML = "";
  var idAdded = 0;

  var row = document.createElement("div");
  row.className = "row";
  pizzaListContainer.appendChild(row);

  for (var i = 0; i < pizza_info.length; i++) {
    var pizza = pizza_info[i];
    if (idAdded % 3 === 0 && idAdded != 0) {
      row = document.createElement("div");
      row.className = "row";
      pizzaListContainer.appendChild(row);
    }

    var pizzaCard = document.createElement("div");
    pizzaCard.className = "col-sm-6 col-md-4";

    var thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail pizza-card";

    if (pizza.is_new) {
      var isNewInfo = document.createElement("p");
      isNewInfo.className = "info new";
      isNewInfo.textContent = "Нова";
      thumbnail.appendChild(isNewInfo);
    }

    if (pizza.is_popular) {
      var isPopularInfo = document.createElement("p");
      isPopularInfo.className = "info popular";
      isPopularInfo.textContent = "Популярна";
      thumbnail.appendChild(isPopularInfo);
    }

    var pizzaIcon = document.createElement("img");
    pizzaIcon.src = pizza.icon;
    thumbnail.appendChild(pizzaIcon);

    var caption = document.createElement("div");
    caption.className = "caption";

    var pizzaTitle = document.createElement("h3");
    pizzaTitle.className = "name";
    pizzaTitle.textContent = pizza.title;
    caption.appendChild(pizzaTitle);

    var pizzaType = document.createElement("p");
    pizzaType.className = "type";
    pizzaType.textContent = pizza.type;
    caption.appendChild(pizzaType);

    var pizzaContent = document.createElement("p");
    var contentText = "";

    contentText += (pizza.content.meat ? pizza.content.meat.join(", ") + ", " : "");
    contentText += (pizza.content.ocean ? pizza.content.ocean.join(", ") + ", " : "");
    contentText += (pizza.content.chicken ? pizza.content.chicken.join(", ") + ", " : "");
    contentText += (pizza.content.cheese ? pizza.content.cheese.join(", ") + ", " : "");
    contentText += (pizza.content.pineapple ? pizza.content.pineapple.join(", ") + ", " : "");
    contentText += (pizza.content.mushroom ? pizza.content.mushroom.join(", ") + ", " : "");
    contentText += (pizza.content.tomato ? pizza.content.tomato.join(", ") + ", " : "");
    contentText += (pizza.content.additional ? pizza.content.additional.join(", ") + ", " : "");


    pizza.contentText = contentText;
    contentText = contentText.slice(0, -2);
    pizzaContent.textContent = capitalizeFirstLetter(contentText);
    caption.appendChild(pizzaContent);

    var buttons = document.createElement("div");
    buttons.className = "buttons";

    var buyBig = document.createElement("div");
    buyBig.className = "buyBig";

    if (pizza.big_size) {
      var bigSizeCharacteristics = document.createElement("p");
      bigSizeCharacteristics.className = "characteristics";
      bigSizeCharacteristics.innerHTML = '<img src="assets/images/size-icon.svg">' + pizza.big_size.size + '<br>' +
        '<img src="assets/images/weight.svg">' + pizza.big_size.weight;
      buyBig.appendChild(bigSizeCharacteristics);

      var bigSizePrice = document.createElement("p");
      bigSizePrice.className = "price";
      bigSizePrice.textContent = pizza.big_size.price;
      buyBig.appendChild(bigSizePrice);

      var bigSizeCurrency = document.createElement("p");
      bigSizeCurrency.className = "currency";
      bigSizeCurrency.textContent = "грн";
      buyBig.appendChild(bigSizeCurrency);

      var bigSizeButton = document.createElement("button");
      bigSizeButton.className = "btn btn-default";
      bigSizeButton.textContent = "Купити";
      bigSizeButton.addEventListener("click", createAddToCartHandler(pizza, "Велика"));
      buyBig.appendChild(bigSizeButton);
    }

    var buySmall = document.createElement("div");
    buySmall.className = "buySmall";

    if (pizza.small_size) {
      var smallSizeCharacteristics = document.createElement("p");
      smallSizeCharacteristics.className = "characteristics";
      smallSizeCharacteristics.innerHTML = '<img src="assets/images/size-icon.svg">' + pizza.small_size.size + '<br>' +
        '<img src="assets/images/weight.svg">' + pizza.small_size.weight;
      buySmall.appendChild(smallSizeCharacteristics);

      var smallSizePrice = document.createElement("p");
      smallSizePrice.className = "price";
      smallSizePrice.textContent = pizza.small_size.price;
      buySmall.appendChild(smallSizePrice);

      var smallSizeCurrency = document.createElement("p");
      smallSizeCurrency.className = "currency";
      smallSizeCurrency.textContent = "грн";
      buySmall.appendChild(smallSizeCurrency);

      var smallSizeButton = document.createElement("button");
      smallSizeButton.className = "btn btn-default";
      smallSizeButton.textContent = "Купити";
      smallSizeButton.addEventListener("click", createAddToCartHandler(pizza, "Мала"));
      buySmall.appendChild(smallSizeButton);
    }

    buttons.appendChild(buySmall);
    buttons.appendChild(buyBig);
    caption.appendChild(buttons);

    thumbnail.appendChild(caption);
    pizzaCard.appendChild(thumbnail);

    //фільтр
    if (src === categoryElements[0]) {
      var currentRow = pizzaListContainer.lastElementChild;
      currentRow.appendChild(pizzaCard);

      idAdded++;
    } else if (src === categoryElements[1]) {
      if (pizza.content.meat) {
        var currentRow = pizzaListContainer.lastElementChild;
        currentRow.appendChild(pizzaCard);

        idAdded++;
      }
    } else if (src === categoryElements[2]) {
      if (pizza.content.pineapple) {
        var currentRow = pizzaListContainer.lastElementChild;
        currentRow.appendChild(pizzaCard);

        idAdded++;
      }
    } else if (src === categoryElements[3]) {
      if (pizza.content.mushroom) {
        var currentRow = pizzaListContainer.lastElementChild;
        currentRow.appendChild(pizzaCard);

        idAdded++;
      }
    } else if (src === categoryElements[4]) {
      if (pizza.content.ocean) {
        var currentRow = pizzaListContainer.lastElementChild;
        currentRow.appendChild(pizzaCard);

        idAdded++;
      }
    } else if (src === categoryElements[5]) {
      if (pizza.type === 'Вега піца') {
        var currentRow = pizzaListContainer.lastElementChild;
        currentRow.appendChild(pizzaCard);

        idAdded++;
      }
    }
  }
  var countPizzas = document.getElementById("countPizzas");
  countPizzas.textContent = idAdded;
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function createAddToCartHandler(pizza, size) {
  return function () {
    var pizzaName = pizza.title + " (" + size + ")";
    var existingCartItem = ifExist(pizzaName);
    if (existingCartItem) {
      var quantityElement = existingCartItem.element.querySelector('.quantity');
      var currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
      updatePrice(pizza, size, 1);
      updateQuantityInCartLocal(pizzaName, currentQuantity + 1);
      saveCartToLocalStorage();
    } else {
      addToCart(pizza, size, 1);
    }
  };
}
function ifExist(pizzaName) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === pizzaName) {
      return cart[i];
    }
  }
  return null;
}
var categoryElements = document.querySelectorAll('.category');

categoryElements.forEach(function (categoryElement) {
  categoryElement.addEventListener('click', function () {
    categoryElements.forEach(function (element) {
      element.classList.remove('picked');
    });
    categoryElement.classList.add('picked');
    var category = categoryElement.textContent;
    filterPizzasByCategory(category);
  });
});

function filterPizzasByCategory(category) {
  var pizzaListContainer = document.getElementById("pizza_list");
  var pizzaCards = pizzaListContainer.getElementsByClassName("pizza-card");

  if (category === "Усі") {
    generatePizzaList(categoryElements[0]);
  } else if (category === "М'ясні") {
    generatePizzaList(categoryElements[1]);
  } else if (category === "З ананасами") {
    generatePizzaList(categoryElements[2]);
  } else if (category === "З грибами") {
    generatePizzaList(categoryElements[3]);
  } else if (category === "З морепродуктами") {
    generatePizzaList(categoryElements[4]);
  } else if (category === "Вега") {
    generatePizzaList(categoryElements[5]);
  }
}
var cart = []; var cartLocal = [];
function updatePriceInCartLocal(pizzaName, price) {
  for (var i = 0; i < cartLocal.length; i++) {
    if (cartLocal[i].pizza.title + " (" + cartLocal[i].size + ")" === pizzaName) {
      cartLocal[i].price = price;
      break;
    }
  }
}

function addToCart(pizza, size, quantityAdded) {
  var pizzaName = pizza.title + " (" + size + ")";
  var existingCartItem = null;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === pizzaName) {
      existingCartItem = cart[i];
      break;
    }
  }

  if (existingCartItem) {
    /*var quantityElement = existingCartItem.element.querySelector('.quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;*/
  } else {
    var pizzaOrdered = document.createElement("div");
    pizzaOrdered.className = "pizzaOrdered";

    var orderedCart = document.createElement("div");
    orderedCart.className = "orderedCart";

    pizzaName = document.createElement("p");
    pizzaName.className = "name ordered";
    pizzaName.textContent = pizza.title + " (" + size + ")";
    orderedCart.appendChild(pizzaName);

    var characteristicsOrdered = document.createElement("div");
    characteristicsOrdered.className = "characteristicsOrdered";

    var sizeCharacteristics = document.createElement("p");
    sizeCharacteristics.className = "characteristics";
    sizeCharacteristics.innerHTML = '<img src="assets/images/size-icon.svg"> ' + (size === "Велика" ? pizza.big_size.size : pizza.small_size.size);
    characteristicsOrdered.appendChild(sizeCharacteristics);

    var weightCharacteristics = document.createElement("p");
    weightCharacteristics.className = "characteristics";
    weightCharacteristics.innerHTML = '<img src="assets/images/weight.svg"> ' + (size === "Велика" ? pizza.big_size.weight : pizza.small_size.weight);
    characteristicsOrdered.appendChild(weightCharacteristics);

    orderedCart.appendChild(characteristicsOrdered);

    var priceAndQuantityOrdered = document.createElement("div");
    priceAndQuantityOrdered.className = "priceAndQuantityOrdered";

    var priceOrdered = document.createElement("p");
    priceOrdered.className = "priceOrdered";
    priceOrdered.textContent = (size === "Велика" ? pizza.big_size.price * quantityAdded : pizza.small_size.price * quantityAdded) + " грн";
    priceOrdered.setAttribute("data-price", size === "Велика" ? pizza.big_size.price : pizza.small_size.price);
    priceAndQuantityOrdered.appendChild(priceOrdered);


    var boughtQuantity = document.createElement("div");
    boughtQuantity.className = "boughtQuantity";

    var minusButton = document.createElement("button");
    minusButton.className = "minus";
    minusButton.textContent = "-";
    boughtQuantity.appendChild(minusButton);

    var quantity = document.createElement("div");
    quantity.className = "quantity";
    quantity.textContent = parseInt(quantityAdded);
    boughtQuantity.appendChild(quantity);

    var plusButton = document.createElement("button");
    plusButton.className = "plus";
    plusButton.textContent = "+";
    boughtQuantity.appendChild(plusButton);

    priceAndQuantityOrdered.appendChild(boughtQuantity);

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      updateQuantityInCartLocal(pizzaName.textContent, 0);
      removeFromCart(pizzaName.textContent);
    });
    priceAndQuantityOrdered.appendChild(deleteButton);


    orderedCart.appendChild(priceAndQuantityOrdered);

    var pizzaOrderedPhoto = document.createElement("img");
    pizzaOrderedPhoto.className = "pizzaOrderedPhoto";
    pizzaOrderedPhoto.src = pizza.icon;
    orderedCart.appendChild(pizzaOrderedPhoto);

    pizzaOrdered.appendChild(orderedCart);

    plusButton.addEventListener("click", function () {
      var currentQuantity = parseInt(quantity.textContent);
      quantity.textContent = currentQuantity + 1;
      quantityAdded = quantityAdded + 1;
      updatePrice(pizza, size, 1);
      updateQuantityInCartLocal(pizzaName.textContent, quantityAdded);
      updatePriceInCartLocal(pizzaName.textContent, getPrice(pizza, size));
      saveCartToLocalStorage();
    });

    minusButton.addEventListener("click", function () {
      var currentQuantity = parseInt(quantity.textContent);
      if (currentQuantity > 1) {
        quantity.textContent = currentQuantity - 1;
        quantityAdded = quantityAdded - 1;
        updatePrice(pizza, size, -1);
        updateQuantityInCartLocal(pizzaName.textContent, quantityAdded);
        updatePriceInCartLocal(pizzaName.textContent, getPrice(pizza, size));
        saveCartToLocalStorage();
      } else {
        updateQuantityInCartLocal(pizzaName.textContent, quantityAdded - 1);
        removeFromCart(pizzaName.textContent);
      }
    });


    var cartItem = {
      name: pizzaName.textContent,
      element: pizzaOrdered
    };

    cart.push(cartItem);
    var boughtCart = document.querySelector(".boughtCart");
    boughtCart.appendChild(pizzaOrdered);
    calculateTotalPrice();

    var pizzaInfo = {
      pizza: pizza,
      size: size,
      quantity: quantityAdded
    };
    cartLocal.push(pizzaInfo);
    saveCartToLocalStorage();
  }
}

function getPrice(pizza, size) {
  return size === "Велика" ? pizza.big_size.price : pizza.small_size.price;
}

function updateQuantityInCartLocal(pizzaName, quantity) {
  for (var i = cartLocal.length - 1; i >= 0; i--) {
    if (cartLocal[i].pizza.title + " (" + cartLocal[i].size + ")" === pizzaName) {
      if (quantity === 0) {
        cartLocal.splice(i, 1);
        saveCartToLocalStorage();
      } else {
        cartLocal[i].quantity = quantity;
      }
    }
  }
}

function alertAddedPizzas() {
  var pizzaList = cartLocal.map(function (cartItem) {
    return cartItem.pizza.title + " (" + cartItem.size + ")";
  });

  alert("Додані піци:\n" + pizzaList.join("\n"));
}

function loadCartFromLocalStorage() {
  var savedCart = localStorage.getItem("cart");
  if (savedCart !== null && savedCart.length > 0) {
    cartLocal = JSON.parse(savedCart);
    for (var i = 0; i < cartLocal.length; i++) {
      var pizzaInfo = cartLocal[i];
      var pizza = pizzaInfo.pizza;
      var size = pizzaInfo.size;
      var quantity = pizzaInfo.quantity;
      addToCart(pizza, size, quantity);
    }
  } else {
    cartLocal = [];
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cartLocal));
}


function updatePrice(pizza, size, quantityChange) {
  var pizzaName = pizza.title + " (" + size + ")";
  var cartItems = document.querySelectorAll(".orderedCart");

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];
    var itemNameElement = cartItem.querySelector(".name");
    var itemPriceElement = cartItem.querySelector(".priceOrdered");

    if (itemNameElement.textContent === pizzaName) {
      var currentPrice = parseFloat(itemPriceElement.textContent);
      var pizzaPrice = size === "Велика" ? pizza.big_size.price : pizza.small_size.price;
      var totalPrice = currentPrice + (pizzaPrice * quantityChange);
      itemPriceElement.textContent = totalPrice + " грн";
      updatePriceInCartLocal(pizzaName, totalPrice);
      calculateTotalPrice();
      break;
    }
  }
}


function removeFromCart(pizzaName) {
  var cartItems = document.querySelectorAll(".name.ordered");
  cartItems.forEach(function (cartItem) {
    if (cartItem.textContent === pizzaName) {
      var orderedCart = cartItem.parentElement.parentElement;
      var index = cart.indexOf(pizzaName.textContent);
      cart.splice(index, 1);
      orderedCart.remove();
    }
  });

  calculateTotalPrice();
}

function calculateTotalPrice() {
  var totalPrice = 0;
  var priceElements = document.querySelectorAll(".priceOrdered");

  priceElements.forEach(function (priceElement) {
    var priceText = priceElement.textContent;
    var price = parseInt(priceText);
    totalPrice += price;
  });

  var totalPriceElement = document.querySelector(".price.ordered");
  totalPriceElement.textContent = totalPrice + " грн";

  var totalQuantity = cart.length;
  var circleWithNumber = document.querySelector('.orangeCircleWithNumber');
  circleWithNumber.textContent = totalQuantity;
}
var clearOrderButton = document.querySelector('.clear');
clearOrderButton.addEventListener('click', function () {
  clearCart();
  localStorage.clear();
});

function clearCart() {
  cart = [];
  var boughtCart = document.querySelector('.boughtCart');
  var pizzaOrderedElements = boughtCart.getElementsByClassName('pizzaOrdered');
  while (pizzaOrderedElements.length > 0) {
    boughtCart.removeChild(pizzaOrderedElements[0]);
  }
  calculateTotalPrice();
}

generatePizzaList(categoryElements[0]);
loadCartFromLocalStorage();
calculateTotalPrice();
