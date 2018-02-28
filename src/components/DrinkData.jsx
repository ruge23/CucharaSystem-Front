import React, {Component} from 'react'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import bebidas from '../data/bebidas'


export default class EatData extends Component {
    render(){
        return(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn style={{textAlign: 'center'}}>Nombre</ TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign: 'center'}}>Precio</ TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bebidas.map((drink, index) => (
                        <TableRow key={index}>
                            <TableRowColumn style={{textAlign: 'center'}}>{drink.title}</TableRowColumn>
                            <TableRowColumn style={{textAlign: 'center'}}>{drink.price}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </ Table>
        )
    }
}