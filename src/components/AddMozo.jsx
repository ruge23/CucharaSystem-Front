import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SendIcon from 'material-ui/svg-icons/content/send'

const styles={
    button: {
        margin: 12,
    },
}

export default class AddMozo extends Component{

    state = {
        value: null,
    }

    handleChange = (event, index, value) => this.setState({value});
    render(){
        return(
            <form>
                <div>   
                <TextField
                        hintText="Nombre"
                        floatingLabelText="Apellido"
                        fullWidth={true}
                    />
                    <br />
                    <TextField
                        hintText="Apellido"
                        floatingLabelText="Apellido"
                        fullWidth={true}
                    />
                    <br />
                    <SelectField
                        floatingLabelText="Genero"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={false} primaryText="Femenino"/>
                        <MenuItem value={true} primaryText="Maculino"/>
                    </SelectField>
                </div>
                    <RaisedButton
                        label="Agregar"
                        labelPosition="before"
                        containerElement="label"
                        primary={true}
                        icon={<SendIcon />}
                        style={styles.button}
                    />
            </form>
        )
    }
}