import React, { Component } from 'react'
import axios from 'axios';
import StockTableRow from './StockTableRow';
import  Table  from 'react-bootstrap/Table';

export default class StockList extends Component {

  constructor(props){
    super(props);

    this.state = {
      stocks : []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/stocks')
          .then(res => {
            this.setState({
              stocks : res.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
  }

  DataTable = () => {
    return this.state.stocks.map((res , i) => {
      return <StockTableRow obj={res} key = {i} />
    })
  }

  render() {
    return (
      <div className='table-wrapper mt-5'>
        <h1 class="mb-3">Stock List</h1>
        <Table striped bordered hover>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
        
      </div>
    )
  }
}
