import CustomButton from './Button.js';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className='page-title'>Buttons</h1>
                <CustomButton />
            </div>
        );
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#app'));