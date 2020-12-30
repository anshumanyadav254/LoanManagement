import React, { Component } from 'react';

const customStyle = {
    width: '100px',
    margin: '0 auto',
    padding: '10px',
    align:'centre'
}
class addCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            customerAddress: '',
            contactNumber:'',
            email:'',
            loanAmount:'',
            startDate:'',
            expiryDate:'',
            emi:'',
            error1:'',
            error2:'',
            error3:''
        }
        this.onClickAdd.bind(this);
    }

    onClickAdd = (event) => {
        event.preventDefault();
        const { customerName, customerAddress, contactNumber, email,loanAmount,startDate,expiryDate,emi } = this.state
        const formValues = {
            name: customerName,
            address: customerAddress,
            contactNumber: contactNumber,
            email: email,
            loanAmount:loanAmount,
            startDate:startDate,
            expiryDate:expiryDate,
            emi:emi
        }
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(email)){
            alert("Invalid Email, please Enter Correct Email")
        }
       else{
        console.log(formValues)
        fetch('/api/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
        this.props.history.push("/");
       }
        

        

    }

    handleCustomerNameChange = (e) => {
        
        this.setState({ customerName: e.target.value });
    }

    handleCustomerAdressChange = (e) => {
        this.setState({ customerAddress: e.target.value });
    }
    handleCustomerContactNumberChange = (e) => {
        let val=e.target.value;
        let nam=e.target.name;
        let err='';
        if(nam==="contactNumber"){
         if(!Number(val)){
            err = <strong>Your Mobile number must be a number</strong>;
         }
        }
         this.setState({error1: err});


        this.setState({ contactNumber: e.target.value });
    }
    handleCustomerEmailChange = (e) => {

        this.setState({ email: e.target.value });
    }
    handleCustomerAmountChange = (e) => {
        let val=e.target.value;
        let err='';
         if(!Number(val)){
            err = <strong>Loan Amount must be a number</strong>;
         }
        
         this.setState({error2: err});
         this.setState({ loanAmount: e.target.value });

    }
    handleCustomerstartDateChange = (e) => {
        this.setState({ startDate: e.target.value });
    }
    handleCustomerexpiryDateChange = (e) => {
        this.setState({ expiryDate: e.target.value });
    }
    handleCustomerEmiChange = (e) => {
        let val=e.target.value;
        let nam=e.target.name;
        let err='';
        if(nam==="emi"){
         if(!Number(val)){
            err = <strong>Your EMI must be a number</strong>;
         }
        }
         this.setState({error3: err});
        this.setState({ emi: e.target.value });
    }


    render() {
        return (
            <div>
                <form style={customStyle} >
                    <label> Name
                    <input name="customerName" type="text"
                            value={this.state.customerName} onChange={this.handleCustomerNameChange} 
                        />
                    </label>
                    <br />
                    <label> Address <input name="customerAddress" type="text"
                        value={this.state.customerAddress} onChange={this.handleCustomerAdressChange} 
                    />  </label>
                    <br />
                    <label> Contact Number <input name="contactNumber" type="text"
                        value={this.state.contactNumber} onChange={this.handleCustomerContactNumberChange}
                    />       {this.state.error1}
                    </label>
                    <br />
                    <label> Email Address<input name="email" type="text"
                        value={this.state.email} onChange={this.handleCustomerEmailChange}
                    />  </label>
                    <br />
                    <label> Loan Amount<input name="amount" type="text"
                        value={this.state.loanAmount} onChange={this.handleCustomerAmountChange}
                    /> {this.state.error2} </label>
                    <br />
                    <label> Loan Start Date<input name="startDate" type="text"
                        value={this.state.startDate} onChange={this.handleCustomerstartDateChange}
                    />  </label>
                    <br />
                    <label> Loan Expiry Date<input name="expiryDate" type="text"
                        value={this.state.expiryDate} onChange={this.handleCustomerexpiryDateChange}
                    />  </label>
                    <br />
                    <label> Monthly Installments EMI<input name="emi" type="text"
                        value={this.state.emi} onChange={this.handleCustomerEmiChange}
                    />  {this.state.error3}</label>
                    <br />
                    <label>Fixed <input type="checkbox"/></label>
                    <br/>
                    <label>Floating <input type="checkbox"/></label>
                    <button type="button" onClick={this.onClickAdd}>Submit</button>
                    
                </form>
            </div>
        );
    }
}

export default addCustomer;
