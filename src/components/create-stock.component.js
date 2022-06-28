import React, { Component } from 'react'
import  Form  from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateStock extends Component {

  constructor(props){
    super(props)

    this.state = {
      name : '',
      price : '',
      quantity: '',
    }
  }

    onChangeStockName = (e) => {
      this.setState({name: e.target.value})
    }
      onChangeStockPrice = (e) => {
        this.setState({price: e.target.value})
    }
    onChangeStockQuantity = (e) => {
      this.setState({quantity: e.target.value})
    }

    onSubmit = (e) => {
      // e.preventDefault();

      const stockObject = {
        name : this.state.name,
        price : this.state.price,
        quantity : this.state.quantity,
      };
      axios.post('http://localhost:4000/stocks/create-stock', stockObject).then(res => 
      console.log (res.data) );

      // console.log('Stock to successfully created !');
      // console.log(`Name: ${this.state.name}`);
      // console.log(`Price: ${this.state.price}`);
      // console.log(`Quantity: ${this.state.quantity}`);

      this.setState = ({
        name : '',
        price : '',
        quantity: '',
      })
      this.props.history.push('/stock-list')
    }

  render() {
    return (
      <div className='form-wrapper mt-5' >
        <h1>ADD Stock</h1>
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId = "Name">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type='text' value={this.state.name} onChange = {this.onChangeStockName} />
            </Form.Group>

            <Form.Group controlId = "Price">
                <Form.Label>Price:</Form.Label>
                <Form.Control type='number'value={this.state.price} onChange = {this.onChangeStockPrice} />
            </Form.Group>

            <Form.Group controlId = "Quantity">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type='number'value={this.state.quantity} onChange = {this.onChangeStockQuantity} />
            </Form.Group>

          <div className='mt-3' >
           <Button variant="success" size="lg" block = "block" type ="submit" >
                Create Stock 
              </Button>
              </div>  
        </Form>
      </div>
    )
  }
}
