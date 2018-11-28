import React, { Component } from 'react';
import AdminMenu from "../../components/admin/AdminMenu";

class Admin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h2>painel administrativo</h2>
                <AdminMenu />
            </div>
        );
    }
}

export default Admin;