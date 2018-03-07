import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

//traer data de los ingredientees ya creados
const colors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Black',
    'White',
  ];
 
  const menuProps = {
    desktop: true,
    disableAutoFocus: true,
  };

  const style = {
      margin: 12,
  }

export default class AddIngredientsForFood extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:0,
        }
    }
    
    handleChange = (e, i, value) =>{
        this.setState({
            value
        })
    }
    render(){
        return (
            <Paper zDepth={5} style={style}>
                <Toolbar style={style}>
                <ToolbarGroup>
                    <AutoComplete
                        hintText="Ingrediente"
                        dataSource={colors}
                        menuProps={menuProps}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <TextField
                        hintText="Cantidad"
                    />
                </ToolbarGroup>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={0} primaryText="Unidad" />
                        <MenuItem value={1} primaryText="Unidades" />
                        <MenuItem value={2} primaryText="Kgrs" />
                        <MenuItem value={3} primaryText="Grs" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FloatingActionButton mini={true} disabled={false} style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </ToolbarGroup> 
                </Toolbar>
            </Paper>
        )
    }
} 
