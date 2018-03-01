import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {GridList} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import MozoIcon from 'material-ui/svg-icons/social/person'
import AddMozoIcon from 'material-ui/svg-icons/social/person-add'
import PayIcon from 'material-ui/svg-icons/editor/attach-money'
import ListMozos from './ListMozo'
import AddMozo from './AddMozo'

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin : '50px auto 0',
    },
    gridList: {
      width: 900,
      height: 800,
      overflowY: 'auto',
    },
};

export default class TabMozos extends Component{
    render(){
        return(
            <div style={styles.root}>
                <GridList style={styles.gridList}>
                    <Subheader>
                        <Tabs>
                            <Tab
                                icon={<MozoIcon />}
                                label="Mozos"
                                value="a"
                            >  
                                <ListMozos />
                            </ Tab>
                            <Tab
                                icon={<AddMozoIcon />}                
                                label="Agregar"
                                value='b'
                            >
                                <AddMozo />
                            </Tab>
                            <Tab
                                icon={<PayIcon />}                
                                label="Liquidar"
                                value='c'
                            >    
                            </Tab>
                        </Tabs>
                    </Subheader>
                </GridList> 
            </div>
        )
    }
}