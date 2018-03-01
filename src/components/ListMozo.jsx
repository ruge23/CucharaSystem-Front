import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import IconPay from 'material-ui/svg-icons/editor/monetization-on'
import IconDelete from 'material-ui/svg-icons/action/delete'
import IconOrder from 'material-ui/svg-icons/places/room-service'
import mozos from '../data/mozos'

const IconComponent = (
    <div>
        <IconButton 
            tooltip="Agregar Pedido"
        >
            <IconOrder />
        </IconButton>
        <IconButton 
            tooltip="Liquidar"
        >
            <IconPay />
        </IconButton>
        <IconButton 
            tooltip="Eliminar"
        >
            <IconDelete />
        </IconButton>
    </div>
)

export default class ListMozos extends Component {
    render(){
        return(
            <List>
                <Subheader>Mozos</Subheader>
                {mozos.map((mozo, index) => ( 
                    <div key={index}>
                        <ListItem
                            leftAvatar={<Avatar src={mozo.avatarsrc} />}
                            rightIconButton={IconComponent}
                            primaryText={mozo.name}
                            disabled ={true}
                            style={{backgroundColor:'rgb(48,48,48)'}}
                        />
                        <Divider inset={true} />
                    </div> 
                ))}   
            </List>
        )
    }
}    