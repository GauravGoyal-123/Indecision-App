// Using stateless functions which takes less time to render as compare to the extend classes. If we want to do manipulation with our parent component then we can use the react class complonents(contains : setState);

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({options : []}));
    }

    handleDeleteOption(removeOption) {
        this.setState((prevState)=> ({
            options : prevState.options.filter((option) => option !== removeOption)
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option); 
    }

    handleAddOptions(option) {
        if(!option) {
            return "Enter Valid Data";
        }
        else if(this.state.options.indexOf(option) > -1) {
            return "This item is already present in the list";
        }
        this.setState((prevState) => ({
                options : prevState.options.concat(option)
            })
        );
    }

    render() {
        const title = "Indecision App";
        return (
            <div>
                <Header title = {title} />
                <Action handlePick = {this.handlePick} />
                <Options options = {this.state.options} handleDeleteOptions = {this.handleDeleteOptions} handleDeleteOption = {this.handleDeleteOption} />
                <AddOptions handleAddOptions = {this.handleAddOptions} />
                
            </div>
            
        );
    }
}

// Default props
IndecisionApp.defaultProps = {
    options : []
}

const Action = (props) => {
    return (
        <div>
            <button onClick = {props.handlePick}>What Should I do?</button>
        </div>
    );
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
} 

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove All</button>  
            <p>Option Components here!</p>
            {props.options.map((option) => <Option key = {option} val = {option} handleDeleteOption = {props.handleDeleteOption} />)}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.val}
            <button onClick = {(e)=> {
                props.handleDeleteOption(props.val);
            }}> Delete</button>
        </div>
    );
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.OnSubmitFunction = this.OnSubmitFunction.bind(this);
        this.state = {
            error : undefined
        }
    }
    
    OnSubmitFunction(e) {
        e.preventDefault();
        const value = e.target.elements.addoptions.value.trim();
        e.target.elements.addoptions.value = '';
        const err = this.props.handleAddOptions(value);
        
        this.setState(() =>  ({error : err}));
        
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.OnSubmitFunction}>
                    <input type = "text" name = "addoptions"/>
                    <button>Add the option</button>
                </form>
                
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options = {['Gaurav', 'option 2']}/>, document.getElementById('app'));