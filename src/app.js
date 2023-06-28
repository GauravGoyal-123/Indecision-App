class IndecisionApp extends React.Component {
    

    render() {
        const title = "Indecision App";
        const options = ["one", "two", "Four"];
        return (
            <div>
                <Header title = {title} />
                <Options options = {options} />
                <AddOptions />
            </div>
            
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>);
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.RemoveAllFunction = this.RemoveAllFunction.bind(this);
    }
    RemoveAllFunction() {
        console.log(this.props.options);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick = {this.RemoveAllFunction}>Remove All</button>  
                <p>Option Components here!</p>
                {this.props.options.map((option) => <Option val = {option} key = {option}/>)}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    
    OnSubmitFunction(e) {
        e.preventDefault();
        const value = e.target.elements.addoptions.value.trim();
        e.target.elements.addoptions.value = '';
        if(value) {
            
            alert(value);
            
        }
        
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.OnSubmitFunction}>
                    <input type = "text" name = "addoptions"/>
                    <button>Add the option</button>
                </form>
                
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (<p>{this.props.val}</p>);
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));