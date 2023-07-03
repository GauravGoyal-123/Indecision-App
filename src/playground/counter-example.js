class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        }
    }
    handlePlus() {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
            
        });

    }
    handleMinus() {
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
            
        });
        
    }
    handleReset () {
        this.setState((prevState) => {
            return {
                count : 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handlePlus}>+1</button>
                <button onClick = {this.handleMinus}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));