import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import Menu from './Menu'
import Inventory from './Inventory';
import TabMozos from './TabMozos'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import Stock from 'material-ui/svg-icons/image/view-compact'
import IconCaja from 'material-ui/svg-icons/action/account-balance'


export default class TabsContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'a',
        }
    }

    handleChange = (value) =>{
        this.setState({
            value: value,
        })
    }

    render(){
        return(
                <Tabs
                    value = {this.state.value}
                    onChange = {this.handleChange}
                >
                    <Tab
                        icon={<MenuIcon />}
                        label="Menu"
                        value="a"
                    >
                        <Menu />
                    </ Tab>
                    <Tab
                        icon ={<Stock />}
                        label="INVENTARIO"
                        value='b'
                    >
                        <Inventory />
                    </Tab>
                    <Tab
                        icon ={<IconCaja />}
                        label="CAJA"
                        value='c'
                    >
                        <TabMozos />
                    </Tab>
                </Tabs> 
        )    
    }
}
