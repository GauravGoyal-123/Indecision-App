console.log("running");

const app = {
    name : "Indicision App",
    subtitle : "This is my first para",
    option : [[1, "Hello"]],
    len : 1
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option) {
        app.len++;
        app.option.push([app.len, option]);
        e.target.elements.option.value = '';
    }
    render();
};

const onClickRemove = () => {
    // e.preventDefault();
    app.option = [];
    app.len = 0;
    render();
}

function render() {
    const jsx = (
        <div>
            <h1>{app.name}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.option.length > 0 ? "Here is your options": "No options"} </p>
            
                <ol>
                    {app.option.map((op) => <li key = {op[0]}>{op[1]}</li>)}
                </ol>
            
            

            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add the option</button>
                
            </form>
            <button onClick = {onClickRemove}>Reset the options</button>
        </div>
    );
    
    ReactDOM.render(jsx, document.getElementById('app'));
}

render();


// let app = {
//     title : 'Indicision App',
//     subtitle : 'This is my First Quote.'

// };

// const profile = (
//     <div>
//         <h1>Gaurav Goyal</h1>
//         <p>Age : 20 yrs old.</p>
//         <p>Location : Maur Mandi, Punjab (India).</p>
//     </div>
// );

// const title = {
//     subtitle : "Making indicision app",
//     arr : []
// };

// const App = (
//     <div>
//         <h1>{app.title}</h1>
//         <p>{app.subtitle}</p>
//     </div>
// );

// const Title = (
//     <div>
//         {title.subtitle && <p>{title.subtitle}</p>}
//         <p>{title.arr.length > 0 ? "Here are your options" : "No Options"}</p>
//     </div>
// );

// let count = 0;

// const plusOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const Reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick = {plusOne} >+1</button>
//             <button onClick = {minusOne} >-1</button>
//             <button onClick = {Reset} >Reset</button>
//         </div>
        
//     );
    
//     ReactDOM.render(template, document.getElementById('app'));
// }

// renderCounterApp();