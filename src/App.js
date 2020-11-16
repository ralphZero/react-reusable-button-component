import CustomButton from './Button.js';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick = (e) => {
        console.log('pressed');
    }

    render(){
        return(
            <div>
                <h1 className='page-title'>Button</h1>
                <CustomButton variant='text' value='Add' endIcon='add' color='primary' onPressed={this.handleClick}/>
            </div>
        );
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#app'));