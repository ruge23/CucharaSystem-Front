import React, {Component} from 'react'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableBody, TableRowColumn} from 'material-ui/Table'
import comidas from '../data/comidas'


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
                    {comidas.map((eat, index) => (
                        <TableRow key={index}>
                            <TableRowColumn style={{textAlign: 'center'}}>{eat.title}</TableRowColumn>
                            <TableRowColumn style={{textAlign: 'center'}}>{eat.price}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </ Table>
        )
    }
}