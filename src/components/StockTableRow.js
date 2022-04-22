import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import axios from 'axios'

export default class StockTableRow extends Component {

    deleteStock = () =>{
        axios.delete('http://localhost:4000/stocks/delete-stock/' + this.props.obj._id)
            .then((res) => {
                console.log('Stock to Successfully deleted!.')
            }).catch((error) => {
                console.log(error)
            })
    }

  render() {
    return (
      <tr>
          <td>{this.props.obj.name}</td>
          <td>{this.props.obj.price}</td>
          <td>{this.props.obj.quantity}</td>
          <td>
              <Link className='edit-link btn btn-primary' to= {"/edit-stock/" + this.props.obj._id}>
                  Edit
              </Link>
              <Button onClick={this.deleteStock} variant ="danger" >Delete</Button>
          </td>
      </tr>
    )
  }
}
