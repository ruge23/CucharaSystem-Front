import React, {Component} from 'react'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import AddIcon from 'material-ui/svg-icons/content/add-box'
import EditeIcon from 'material-ui/svg-icons/content/create'
import DeleteIcon from 'material-ui/svg-icons/navigation/cancel'
import comidas from '../data/comidas'


export default class EatData extends Component {
    
    state = {
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        selected: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: false,
        showCheckboxes: false,
        selectedIndex: 0,
    }
    
    select = (index) => this.setState({selectedIndex: index});

    render(){
        return(
            <Table>
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                >
                    <TableRow>
                        <TableHeaderColumn style={{textAlign: 'center'}}>Nombre</ TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign: 'center'}}>Precio</ TableHeaderColumn>
                        <TableHeaderColumn> 
                            <BottomNavigation>
                                <BottomNavigationItem
                                    label="Agregar"
                                    icon={<AddIcon />}
                                    onClick={() => this.select(0)}
                                />
                            </BottomNavigation>
                        </ TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                >
                    {comidas.map((eat, index) => (
                        <TableRow key={index}>
                            <TableRowColumn style={{textAlign: 'center'}}>{eat.title}</TableRowColumn>
                            <TableRowColumn style={{textAlign: 'center'}}>{eat.price}</TableRowColumn>
                            <TableHeaderColumn> 
                            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                                <BottomNavigationItem
                                    label="Editar"
                                    icon={<EditeIcon />}
                                    onClick={() => this.select(0)}
                                />
                                <BottomNavigationItem
                                    label="Borrar"
                                    icon={<DeleteIcon />}
                                    onClick={() => this.select(1)}
                                />
                            </BottomNavigation>
                        </ TableHeaderColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </ Table>
        )
    }
}