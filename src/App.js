import CustomButton from './Button.js';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className='page-title'>Button</h1>
                <CustomButton value='Add' endIcon='add' color='secondary'/>
            </div>
        );
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#app'));