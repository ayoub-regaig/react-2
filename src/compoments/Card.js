import React, {Component} from "react";

class Card extends Component{
    constructor(props) {
        super(props);
    }
	render() {
		return(
            <div class="boi">
                <img src={this.props.imageLink}/>
                <h1>{this.props.name}</h1>
                <h2>{this.props.function}</h2>
            </div>
        );
	}
}

export default Card;