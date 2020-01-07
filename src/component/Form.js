import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {table_data} from './../Redux/Action';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comp_loc:'',
            job:'',
            openings:'',
            salary:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit=(e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000)*1000);
      
        let data = {
            comp_loc:this.state.comp_loc,
            job:this.state.job,
            openings:this.state.openings,
            salary:this.state.salary,
            company_id: random_number,
        }
        console.log(data);
        this.props.form_data(data);

        this.props.history.push('/Table')
        
        
    }
    render() {
        console.log(this.props.add.stored_data);
        let comp_loc =this.props.add.stored_data.map(e => {
            return(
            <option value={e.company ,e.location}>{e.company} {e.location}</option>
            )
        })
        

        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="text-primary">Specify no. of openings & salary of specified company</h6>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={this.input_submit}>
                                        <div class="row">
                                            <div class="col">
                                            Company & Location :<select  class="form-control" name="comp_loc" value={this.state.comp_loc} onChange={this.input_change}>
                                            <option value="Company_Location">Company_Location</option>
                                            {comp_loc}
                                          
                                        </select>
                                            </div>
                                            <div class="col">
                                                Job Title :<input type="text" class="form-control" placeholder="Job Title" name="job" value={this.state.job} onChange={this.input_change}/>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col">
                                                No. Openings :<input type="text" class="form-control" placeholder="No. of openings" name="openings" value={this.state.openings} onChange={this.input_change}/>
                                            </div>
                                            <div class="col">
                                                Salary :<input type="text" class="form-control" placeholder="Salary" name="salary" value={this.state.salary} onChange={this.input_change}/>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-danger mt-3">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" class="btn btn-outline-success mt-3 ml-5">Add company & location</Link>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        form_data:(data) =>dispatch(table_data(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Form)