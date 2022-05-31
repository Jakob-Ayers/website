//This code WILL NOT run locally, must be on a http server

//npx babel --plugins @babel/plugin-transform-react-jsx-compat 
const personName = "joe mama";
const element = <h3>Hello, {personName}</h3>;


ReactDOM.render(
    element,
    document.getElementById("react-examples")
);

class World extends React.Component {
    render() {
        return(<h3>this.props.name</h3>)
    }
}