const products = [
    {
      name: 'Product 1',
      price: 10.50
    },
    {
      name: 'Product 2',
      price: 15.00
    },
    {
      name: 'Product 3',
      price: 25.50
    }
  ];
  
  let shoppingCart = [];
  
  // Function to display the list of products
  function displayProducts() {
    console.log('\nPRODUCTS:');
    for (let i = 0; i < products.length; i++) {
      console.log(`${i + 1}. ${products[i].name} - $${products[i].price}`);
    }
  }
  
  // Function to add a product to the shopping cart
  function addToCart(product) {
    shoppingCart.push(product);
    console.log(`\n${product.name} added to the cart!`);
  }
  
  // Function to calculate the total cost of the items in the shopping cart
  function getTotalCost() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      total += shoppingCart[i].price;
    }
    return total;
  }
  
  // Function to display the shopping cart
  function displayCart() {
    console.log('\nSHOPPING CART:');
    for (let i = 0; i < shoppingCart.length; i++) {
      console.log(`${i + 1}. ${shoppingCart[i].name} - $${shoppingCart[i].price}`);
    }
  }
  
  // Main function to run the e-commerce application
  function runEcommerceApp() {
    console.log('Welcome to our e-commerce store!');
  }
  
    let isFinished = false;
    while (!isFinished) {
      displayProducts();
      console.log('\nWhat would you like to do?');
      console.log('1. Add a product to the cart');
      console.log('2. View the shopping cart');
      console.log('3. Checkout');
      console.log('4. Exit');
    }
  
      let userChoice = prompt('Enter your choice (1-4): ');
  
      if (userChoice === '1') {
        let productIndex = prompt('Enter the product number: ');
        // Make sure the product index is a valid number
        if (productIndex > 0 && productIndex <= products.length) {
          // Add the product to the shopping cart
          addToCart(products[productIndex - 1]);
        } else {
          console.log('Invalid product number!');
        }
      } else if (userChoice === '2') {
        displayCart();
      } else if (userChoice === '3') {
        // Calculate the total cost of the items in the shopping cart
        let totalCost = getTotalCost();
        console.log(`\nTotal cost: $${totalCost}`);
      }
        // Set isFinished to true to exit the loop and end