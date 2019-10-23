import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 1
    };

    constructor() {
        super();
        this.handleIncreament = this.handleIncreament.bind(this);
    }

    handleIncreament() {
        this.setState({count: this.state.count+1});
    }

    render() { 
        
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{ this.formatMethod() }</span>
                <button className="btn btn-secondary" onClick={this.handleIncreament}>Increament</button>
            </React.Fragment>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatMethod() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

}
 
export default Counter;