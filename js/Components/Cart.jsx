import React from 'react';
import config from'../config.js';
import CartTableRows from './Libraries/CartTableRows.jsx';
import { hashHistory } from 'react-router'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    this.hasData = false
    fetch(config.apiUrl + '/getCart/' + localStorage.getItem('cart'))
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.items.length > 0) {
        this.setState({
          products: responseJson.items
      })
      this.hasData = true
      }
    })
  }

  componentDidMount() {
   this.hasData = false
   if(this.state.products !== []) {
     this.hasData = true
   }
  }


  countAllElements =()=> {
    let sum = 0
    this.state.products.forEach(element => {
      sum += parseInt(element.price)
    })
    return sum
  }

  handleDeleteClick=event=> {
    if(confirm('Do you want to remove item from your cart?')) {
    fetch(config.apiUrl + '/cart/delete/' + event.target.dataset.id)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.items.length === 0){
        this.hasData = false
      }
      this.setState({
        products: responseJson.items
      })
    })
  }
  }

  handleOrderClick=()=>{
    hashHistory.push('/cart/' + this.props.params.id + '/form')
  }

  handleBackToShoppingClick=()=>{
    hashHistory.push('/products')
  }

  render() {
    return <div className='row flex-grow'>
             <div className='col-md-12 col-sm-12'>
                 <table className='table table-bordered fog'>
                     <tbody>
                     { this.hasData ?
                          this.state.products.map(element => {
                            return <CartTableRows
                                    key={element.product.id}
                                    id={element.id}
                                    name={element.product.name}
                                    price={element.product.price}
                                    quantity={element.quantity}
                                    photo={element.product.product_images[0].url}
                                    productSum={element.quantity*element.product.price}
                                    deleteButton={this.handleDeleteClick}
                                    />
                          }) : <tr className='center-item'><td><h2>Your cart is empty</h2></td></tr>
                     }
                     </tbody>
                 </table>
                 <span className='total'>
                     TOTAL: {this.countAllElements().toFixed(2)} PLN
                 </span>
                 <br/>
                 <div className='orders-buttons'>
                 <button className='btn btn-default btn-lg'
                         onClick={this.handleBackToShoppingClick}
                         type='button'>
                    Continue shopping
                 </button>
                 {
                   this.state.products.length > 0 ?
                 <button className='btn btn-default btn-lg checkout'
                         onClick={this.handleOrderClick}
                         type='button'>
                    Checkout
                 </button> : null
               }
                 </div>
             </div>
             </div>
  }
}

export default Cart
