import React, {Component} from 'react'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import bebidas from '../data/bebidas'


export default class EatData extends Component {
    render(){
        return(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Nombre</ TableHeaderColumn>
                        <TableHeaderColumn>Precio</ TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bebidas.map((drink, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{drink.title}</TableRowColumn>
                            <TableRowColumn>{drink.price}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </ Table>
        )
    }
}