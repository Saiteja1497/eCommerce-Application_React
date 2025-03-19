import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  //constructor starts
  constructor(props) {
    super(props);
    this.state = {
      //   products: [
      //     { id: 1, productName: "Iphone", price: 1000, quantity: 0 },
      //     { id: 2, productName: "IWatch", price: 400, quantity: 0 },
      //     { id: 3, productName: "Airpods", price: 250, quantity: 0 },
      //     { id: 4, productName: "Ipad", price: 1000, quantity: 0 },
      //     { id: 5, productName: "IMac", price: 2000, quantity: 0 },
      //     { id: 6, productName: "Mac Mini", price: 800, quantity: 0 },
      //   ],
      products: [],
    };
  }
  //contructor ends

  //render starts
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  //   //componentDidMount method  with promise structure starts
  //   componentDidMount() {
  //     var promise = fetch("http://localhost:5000/products", { method: "GET" });
  //     promise.then((response) => {
  //       console.log(response);

  //       var promise2 = response.json();
  //       promise2.then((prods) => {
  //         console.log(prods);
  //         this.setState({
  //           products: prods,
  //         });
  //       });
  //     });
  //   }

  //componentDidMount method with await structure
  componentDidMount = async () => {
    document.title = "cart - eCommerce";

    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    this.setState({
      products: prods,
    });
  };

  //componentDidUpdate starts
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate -starts",
      prevProps,
      prevState,
      this.state,
      this.props
    );
  }

  componentWillUnmount() {
    console.log("Shopping Cart - ComponentWillUnmount ");
  }

  componentDidCatch(error, info) {
    console.log("Error in app");
    console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delet the product")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
