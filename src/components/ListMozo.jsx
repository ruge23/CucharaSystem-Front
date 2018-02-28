import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {grey400} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import mozos from '../data/mozos'


const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400}/>
    </IconButton>
);
  
const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Agregar Pedido</MenuItem>
      <MenuItem>Liquidar</MenuItem>
    </IconMenu>
);

export default class ListMozos extends Component {
    render(){
        return(
            <List>
                <Subheader>Mozos</Subheader>
                {mozos.map((mozo, index) => ( 
                    <div>
                        <ListItem
                            leftAvatar={<Avatar src={mozo.avatarsrc} />}
                            rightIconButton={rightIconMenu}
                            primaryText={mozo.name}
                            disabled ={true}
                        />
                        <Divider inset={true} />
                    </div> 
                ))}   
            </List>
        )
    }
}    