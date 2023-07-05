class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        }
    }
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const cnt = parseInt(json, 10);
            if(!isNaN(cnt)) {
                this.setState(() => {
                    return {
                        count : cnt
                    }
                });
            }
            
        }
        catch(e) {

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const count = JSON.stringify(this.state.count);
            localStorage.setItem('count', count);
        }
    }

    handlePlus() {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
            
        });

    }
    handleMinus(cnt) {
        if(!this.state.count) {
            return "Count can't be -ve";
        }
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
            
        });
        
    }
    handleReset () {
        this.setState(() => {
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
                <DecCount handleMinus = {this.handleMinus} cnt = {this.state.count}/>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count : 0
}

class DecCount extends React.Component {
    constructor(props) {
        super(props);
        this.xyz = this.xyz.bind(this);
        this.state = {
            err : undefined
        };
    }
    xyz() {
        const err = this.props.handleMinus(this.props.cnt);
        
        this.setState(()=>{
            return {
                err : err
            }
        })
        
    }

    render (){
        return (
            <div>
                
                <button onClick = {this.xyz}>-1</button>
                {this.state.err && <p>{this.state.err}</p>}
            </div>
        );
    }
    
    
}

ReactDOM.render(<Counter/>, document.getElementById('app'));