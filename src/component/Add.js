import React, { Component } from 'react';
import {connect} from 'react-redux';
import {company_data} from './../Redux/Action';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company:'',
            location:'',
        }
    }

    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        let Add = {
            company:this.state.company,
            location:this.state.location,
        }
        //console.log(Add);
        this.props.comp_loc(Add) 
        this.props.history.push('/Form') 
    }

    render() {
       
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="text-primary">Enter Company & Location</h3>
                                    <form onSubmit={this.input_submit}>
                                        <div class="form-row mt-3">
                                            <div class="col">
                                                Company :<input type="text" class="form-control" placeholder="company" name="company" value={this.state.company} onChange={this.input_change} />
                                            </div>
                                            <div class="col">
                                                Location :<input type="text" class="form-control" placeholder="location" name="location"  value={this.state.location} onChange={this.input_change} />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success mt-3">Add Details</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return{
        comp_loc: (data) => dispatch(company_data(data))
    }
}

export default connect(null, mapDispatchToProps)(Add)