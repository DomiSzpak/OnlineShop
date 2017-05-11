import React from 'react'
import { Link } from 'react-router'

class CartTableRows extends React.Component{
  render() {
    return <tr className='product-list'>
              <td className='mini-photo-container'>
                  <img className='mini-photo' src={this.props.photo} alt='photo'/>
              </td>
              <td className='product-summary'>
              {/*to ja productlist lel*/}
                  <span className='name'>
                      {this.props.name}
                  </span>
                  <span className='price'>
                      ({this.props.price} PLN)
                  </span>
                  <span className='quantity'>
                     Amount: {this.props.quantity}
                  </span>
                  <button onClick={this.props.deleteButton}
                  className='btn btn-default show-product-button'
                  data-id={this.props.id}>
                  Delete
                  </button>
                  <span className='productSum'>
                     {this.props.productSum.toFixed(2)} PLN
                  </span>
              </td>
           </tr>
  }
}

export default CartTableRows
