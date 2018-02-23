import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import listmenu from '../data/listmenu';
import s from './styles/Menu.ncss'

const GridMenu = (props) =>{
    return(
        <div style={s.root}>
            <GridList
                cellHeight = {180}
                style={s.gridList}
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