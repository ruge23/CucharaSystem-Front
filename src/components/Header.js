import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import Menu from 'material-ui/svg-icons/navigation/menu'
import Stock from 'material-ui/svg-icons/image/view-compact'
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'


class TabsContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'a'
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
                        icon={<Menu />}
                        label="Menu"
                        value='a'
                    />
                    <Tab
                        icon ={<Stock />}
                        label="INVENTARIO"
                        value='b'
                    />
                    <Tab
                        icon ={<MapsPersonPin />}
                        label="MOZOS"
                        value='c'
                    />
                </Tabs> 
        )    
    }
}
export default TabsContent;