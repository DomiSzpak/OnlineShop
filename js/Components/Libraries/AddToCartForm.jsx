import React from 'react'

class AddToCartForm extends React.Component {
  render() {
    return <div>
               <input type='number' min='1' max={this.props.quantity}
               onChange={this.props.qntHandleChange} /> z {this.props.quantity}

               <button type='button'
                       className='btn btn-default btn-lg'
                       onClick={this.props.btnHandleClick}>
                   Add to cart
               </button>
    </div>
  }
}

export default AddToCartForm
