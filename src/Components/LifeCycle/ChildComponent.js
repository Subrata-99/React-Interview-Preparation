import { Component } from "react";

class ChildComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'Dummy'
            }
        }
        console.log(this.props.name + ' Child Constructor');
    }

    // async componentDidMount() {
    //     console.log(this.props.name + ' Child Component Did Mount');
    //     const data = await fetch('https://api.github.com/users/Subrata-99')
    //     const json = await data.json();

    //     console.log('data: ', json);
    //     this.setState({ userInfo: json });
    // }

    componentDidUpdate() {
        console.log(this.props.name + ' Child Component Did Update');
    }
    componentWillUnmount() {
        console.log(this.props.name + ' Child Component Will Unmount');
    }

    render() {
        console.log(this.props.name + ' Child Render');
        return (
            <div>
                <h2> Child Component </h2>
                <p>{this.state.userInfo.name}</p>
            </div>
        )
    }
}

export default ChildComponent