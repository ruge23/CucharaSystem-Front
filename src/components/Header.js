import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs';
import Menu from 'material-ui/svg-icons/navigation/menu'
import Stock from 'material-ui/svg-icons/image/view-compact'
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'

class TabsContent extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <Tabs>
                    <Tab
                        icon={<Menu />}
                        label="Menu"
                    />
                    <Tab
                        icon ={<Stock />}
                        label="INVENTARIO"
                    />
                    <Tab
                        icon ={<MapsPersonPin />}
                        label="MOZOS"
                    />
                </Tabs>
            </ MuiThemeProvider>
        )    
    }
}
export default TabsContent;