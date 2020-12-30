import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import '../index.css';

var divStyle = {
    margin: '8% 10%',
};

class listCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {
            customers:[]
        }
    }

    componentDidMount = () =>{
        this.getEmployeeList();
    }
       
getEmployeeList(){
        fetch('/api')
        .then(res => res.json())
        .then(customers => this.setState({customers })
        )
    
    .catch((err) =>{
        console.log(err);
    })
}


  render() {
const {customers} = this.state;
return (
      <div style={divStyle}>
          <h1>List Of Loans</h1>
                <Table striped bordered hover size="md" variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>ContactNumber</th>
                            <th>Email</th>
                            <th>Loan Amount</th>
                            <th>Start Date</th>
                            <th>Expiry Date</th>
                            <th>Monthly Installments</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                           customers &&  customers.map((user, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{(i+1)}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                        <td>{user.contactNumber}</td>
                                        <td>{user.email}</td>
                                        <td>{user.loanAmount}</td>
                                        <td>{user.startDate}</td>
                                        <td>{user.expiryDate}</td>
                                        <td>{user.emi}</td>  
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
      </div>
    )
  }
}

export default listCustomer;
