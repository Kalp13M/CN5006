import './App.css';
function GreetingElementwithProp(props) {
    //const greeting = 'hello lets strat learning function compoenet'
    console.log("prop is", props.msg)
    return (
        <div className="App">
            <h1>{props.msg}</h1>;
        </div>
    );
}
export default GreetingElementwithProp; 