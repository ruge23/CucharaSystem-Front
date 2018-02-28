import React, {Component} from 'react'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import comidas from '../data/comidas'


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
                    {comidas.map((eat, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{eat.title}</TableRowColumn>
                            <TableRowColumn>{eat.price}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </ Table>
        )
    }
}