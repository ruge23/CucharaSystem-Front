import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import AddIcon from 'material-ui/svg-icons/content/add-box'
import EditeIcon from 'material-ui/svg-icons/content/create'
import DeleteIcon from 'material-ui/svg-icons/navigation/cancel'
import inventoryData from '../data/inventoryData'


export default class Inventory extends React.Component{
    
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        selected: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: false,
        showCheckboxes: false,
        selectedIndex: 0,
        height: '300px',
    }
    
    select = (index) => this.setState({selectedIndex: index});
    
    handleToggle = (event, toggled) =>{
        this.setState({
            [event.target.name] : toggled,
        })
    }

    handleChange = (event) =>{
        this.setState({
            height : event.target.value,
        })
    }

    render(){
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                 <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                 >
                  <TableRow>
                    <TableHeaderColumn colSpan ="3" style={{textAlign: 'center'}}>
                        Ingedientes
                    </ TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn style={{textAlign: 'center'}}>Nombre</ TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign: 'center'}}>Cantidad</ TableHeaderColumn>
                    <TableHeaderColumn> 
                            <BottomNavigation>
                                <BottomNavigationItem
                                    label="Agregar Ingerdiente"
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
                    {inventoryData.map( (row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn style={{textAlign: 'center'}}>{row.name}</ TableRowColumn>
                            <TableRowColumn style={{textAlign: 'center'}}>{row.status}</ TableRowColumn>
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
                        </ TableRow>
                    ))}
                </TableBody>
            </ Table>
            </div>
        )
    }
    
}


  