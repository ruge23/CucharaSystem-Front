import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import EatIcon from 'material-ui/svg-icons/maps/restaurant'
import DrinkIcon from 'material-ui/svg-icons/maps/local-bar'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

export default class TabMenu extends Component {
    render(){
        return(
            <Tabs>
            <Tab
                icon={<EatIcon />}
                label="Comidas"
                value="a"
            >

            </ Tab>
            <Tab
                icon={<DrinkIcon />}                
                label="Bebidas"
                value='b'
            >
            
            </Tab>
        </Tabs> 
        )
    }
}