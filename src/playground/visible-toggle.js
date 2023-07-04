class VisiblilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails : false
        };
        this.handleDetails = this.handleDetails.bind(this);
    }
    handleDetails() {
        this.setState((prevState)=> {
            return {
                showDetails : !prevState.showDetails
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visiblility</h1>
                <button onClick = {this.handleDetails}>{this.state.showDetails ? "Hide Details" : "Show Details"}</button>
                {this.state.showDetails ? <p>My name is Gaurav Goyal</p> : <p></p>}
            </div>
        );
    }
}

ReactDOM.render(<VisiblilityToggle/>, document.getElementById('app'));

// let button_value = "Show Details";
// let para_value = "My name is Gaurav Goyal";
// let show_val = para_value;
// let show = 0;

// const toggle = () => {
//     if(!show) {
//         button_value = "Hide Details";
//         show = 1;
//     }
//     else {
//         button_value = "Show Details";
//         show = 0;
//     }
    
//     if(show) {
//         show_val = para_value;
//     }
//     else {
//         show_val = '';
//     }
//     render();
// }

// function render() {
//     const jsx = (
//         <div>
//             <h1>Visiblility Toggle</h1>
//             <button onClick = {toggle}>{button_value}</button>
//             {show  > 0 && <p>{show_val}</p>}
//         </div>
//     )
    
//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();