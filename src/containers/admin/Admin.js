import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AdminMenu from "../../components/admin/AdminMenu";
import AdminPortfolio from "../admin/AdminPortfolio";

class Admin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <h2>painel administrativo</h2>
                </div>
                <div className="card-body">
                    <Route path={`/`} component={AdminMenu} />
                    <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                </div>
            </div>
        );
    }
}

export default Admin;