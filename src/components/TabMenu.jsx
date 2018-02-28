import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import EatData from './EatData'
import DrinkData from './DrinkData'
import EatIcon from 'material-ui/svg-icons/maps/restaurant'
import DrinkIcon from 'material-ui/svg-icons/maps/local-bar'


export default class TabMenu extends Component {
    render(){
        return(
            <Tabs>
                <Tab
                    icon={<EatIcon />}
                    label="Comidas"
                    value="a"
                >
                    <EatData />
                </ Tab>
                <Tab
                    icon={<DrinkIcon />}                
                    label="Bebidas"
                    value='b'
                >
                    <DrinkData />
                </Tab>
            </Tabs> 
        )
    }
}