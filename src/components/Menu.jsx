import React from 'react'
import TabMenu from './TabMenu'
import {GridList} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'


const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin : '50px auto 0',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  };

const GridMenu = (props) =>{
    return(
        <div style={styles.root}>
            <GridList
                cellHeight = {180}
                style={styles.gridList}
            >
            <Subheader> <TabMenu /></ Subheader>
            
        </GridList>
        </div>
    )
}

export default GridMenu;