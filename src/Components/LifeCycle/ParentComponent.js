import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        console.log('Parent Constructor');
    }

    //The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
    static getDerivedStateFromProps(props) {
        console.log('Parent getDerivedStateFromProps');
        return { count: 5 }
    }

    componentDidMount() {
        console.log('Parent Component Did Mount');
    }

    render() {
        console.log('Parent Render');
        return (
            <div>
                <h1> Parent Component </h1>
                <p>Count: {this.state.count}</p>
                <ChildComponent name='Child 1' />
                <ChildComponent name='Child 2' />
            </div>
        )
    }
}

export default ParentComponent;