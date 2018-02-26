import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import listmenu from '../data/listmenu';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin : '20px auto 0',
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
            <Subheader> Comidas </ Subheader>
            {listmenu.map((data) => (
                <GridTile
                    key={data.id}
                    title={data.title}
                    subtitle={<span><b>{data.price}</b></span>}
                >
                <img src={data.src} />
                </GridTile>
            ))}
        </GridList>
        </div>
    )
}

export default GridMenu;