import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'
import AddIcon from 'material-ui/svg-icons/content/add-box'
import CreateIcon from 'material-ui/svg-icons/content/create'
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
        height: '300px',
    }

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
                    <TableHeaderColumn tooltip="Agregar Ingrediente" style={{textAlign: 'center'}}><AddIcon /></ TableHeaderColumn>
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
                            <TableRowColumn tooltip="Editar Ingrediente" style={{textAlign: 'center'}}><CreateIcon /></ TableRowColumn>
                        </ TableRow>
                    ))}
                </TableBody>
            </ Table>
            </div>
        )
    }
    
}


  