import React from 'react'
import config from '../config.js'
import {Link, IndexLink} from 'react-router'

class Template extends React.Component {

  componentDidMount() {
    if (!localStorage.getItem('cart')) {
       fetch(config.apiUrl + '/createCart')
           .then(response => response.json())
           .then(responseJson => {
             localStorage.setItem('cart', responseJson.id)
           })
    }
  }
    render() {
        return <div>
            <nav className="navbar navbar-default margin-nav">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <IndexLink className="navbar-brand" to="/">H o n e y  s h o p</IndexLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav products-container">
                            <li><Link to='/products'>Products <span className="sr-only">(current)</span></Link></li>
                            <li><Link to='/orders'>Orders</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to={'/cart/'+localStorage.getItem('cart')}>
                                <i className='glyphicon glyphicon-shopping-cart'></i>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
            {this.props.children}
            </div>
            <footer className="navbar navbar-default navbar-fixed-bottom">
               <div className="container-fluid pull-right">
                   Copyright &copy; 2017. Created by WRO_FRO_S_05
               </div>
            </footer>
        </div>
    }

}

export default Template

{/*localStorage - pamiec przegladarki obiekt ma wbudowana funkcje getItem*/}
