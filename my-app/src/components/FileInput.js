import React from 'react';
import hide from "./hide";

class FileInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div className="pic">
                <input id="insert" type="file" onChange={this.handleChange}/>
                <img className="image" src={this.state.file}/>
            </div>
        );
    }
}
export default FileInput;