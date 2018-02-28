import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table'
import inventoryData from '../data/inventoryData'


export default class Inventory extends React.Component{
    
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
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
                    <TableHeaderColumn colSpan ="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                        Ingedientes
                    </ TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn tooltip="The ID">ID</ TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Name">Ingrediente</ TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Status">Cantidad</ TableHeaderColumn>
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
                            <TableRowColumn>{index}</ TableRowColumn>
                            <TableRowColumn>{row.name}</ TableRowColumn>
                            <TableRowColumn>{row.status}</ TableRowColumn>
                        </ TableRow>
                    ))}
                </TableBody>
            </ Table>
            </div>
        )
    }
    
}


  