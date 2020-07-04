const { render } = require("react-dom");

class Country extends React.Component {
    state = {
        country: "latvia",
    };

    render() {
        return <div>Country {this.props.data}</div>;
    }
}

export default Country;
