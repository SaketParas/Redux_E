import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.drop.stored_data);
       let dropshow = this.props.drop.stored_data.map(e =>{
           return(
            <tr>       
                <td>{e.company}</td>
            </tr>
           )
       })
       let drops_loc = this.props.drop.stored_data.map(e =>{
        return(
         <tr>       
             <td>{e.location}</td>
         </tr>
        )
    })
  
        // *****************************************
        let show_user = this.props.add.table.map(e => {
            return(
                <tr>
                    <td>{e.job}</td>
                    <td>{e.openings}</td>
                    <td>{e.salary}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                    <div className="row mt-5">
                        <div className="col-12 col-6 col-8">
                            <div class="card text-center">
                                <div class="card-header">
                                    Company Details On Table
                                </div>
                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Company</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Job Type</th>
                                                <th scope="col">No. Of Openings</th>
                                                <th scope="col">Salary</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dropshow}
                                            {drops_loc}
                                        {show_user}
                                        </tbody>
                                    </table>

                                    {/* ****************************************** */}
                                </div>
                                <div class="card-footer text-muted">
                                   
                                </div>
                            </div>
                      </div>
                    </div>
                    <Link to="/Form" class="btn btn-outline-success mt-3 ml-5">Input Page</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        add: state.comments,
        drop:state.comments
    }
}
export default connect(mapStateToProps) (Table)