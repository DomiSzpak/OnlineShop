import React from 'react'
import { Link } from 'react-router'

class TableRows extends React.Component{
  render() {
    return <tr className='product-list'>
              <td>
                  <img className='mini-photo' src={this.props.photo} alt='photo'/>
              </td>
              <td>
              <td className='product-summary'>
                  <span className='name'>
                      {this.props.name}
                  </span>
                  <span className='price'>
                      ({this.props.price} PLN)
                  </span>
                  <span className='available'>
                      {this.props.available ?
                            <span className='available'>Available</span>:
                            <span className='unavailable'>Currently unavailable</span>}
                  </span>
                  <span className='amount'>
                      {this.props.amount}
                  </span>
                  <p className='descrpition'>
                  {this.props.description.substr(0,100) + '...'}
                  </p>
                  <Link to={'/product/' + this.props.id}
                        className='btn btn-default show-product-button'>
                           Show
                        </Link>
              </td>
              </td>
           </tr>
  }
}

export default TableRows
