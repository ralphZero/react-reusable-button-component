import CustomButton from './Button.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            variant : '',
            color : '',
            size : '',
            disabled : false,
            hasShadow : false,
            startIcon : '',
            endIcon : '',
            value : 'Default'
        }
    }

    handleClick = (e) => {
        console.log('pressed');
    }

    handleVariant = (e) => {
        this.setState({
            variant : e.currentTarget.value
        });
    }
    handleColor = (e) => {
        this.setState({
            color : e.currentTarget.value
        })
    }
    handleSize = (e) => {
        this.setState({
            size : e.currentTarget.value
        })
    }
    handleDisabled = e => {
        if(e.currentTarget.checked){
            this.setState({
                disabled : true
            })
        }else{
            this.setState({
                disabled : false
            })
        }
    }
    handleShadow = e => {
        if(e.currentTarget.checked){
            this.setState({
                hasShadow : true
            })
        }else{
            this.setState({
                hasShadow : false
            })
        }
    }

    handleIcon = e => {
        if(e.keyCode === 13){
            if(e.currentTarget.name == 'startIcon'){
                this.setState({
                    startIcon : e.currentTarget.value
                })
                e.currentTarget.blur();
            }else{
                this.setState({
                    endIcon : e.currentTarget.value
                })
                e.currentTarget.blur();
            }
        }
        
    }

    render(){
        return(
            <div>
                <div className='page-header'>
                    <h1 className='page-title'>Button</h1>
                    <CustomButton value={this.state.value} variant={this.state.variant} 
                            color={this.state.color} size={this.state.size} 
                            disabled={this.state.disabled} disableShadow={this.state.hasShadow} 
                            startIcon={this.state.startIcon} endIcon={this.state.endIcon}
                            onPressed={this.handleClick}/>
                </div>
                <div>
                    <div className='grid'>
                        <div className='control'>
                            <label className='control-label' htmlFor='variant'>Variants</label>
                            <select className='control-select' name='variant' onChange={this.handleVariant}>
                                <option value=''>Default</option>
                                <option value='outline'>Outline</option>
                                <option value='text'>Text</option>
                            </select>
                        </div>
                        <div className='control'>
                            <label className='control-label' htmlFor='colors'>Colors</label>
                            <select className='control-select' name='colors' onChange={this.handleColor}>
                                <option value=''>Default</option>
                                <option value='primary'>Primary</option>
                                <option value='secondary'>Secondary</option>
                                <option value='danger'>Danger</option>
                            </select>
                        </div>
                        <div className='control'>
                            <label className='control-label' htmlFor='sizes'>Sizes</label>
                            <select className='control-select' name='sizes' onChange={this.handleSize}>
                                <option value=''>Normal</option>
                                <option value='sm'>Small</option>
                                <option value='lg'>Large</option>
                            </select>
                        </div>
                        <div></div>
                        <div className='control'>
                            <label className='control-label' htmlFor='sizes'>Leading Icon</label>
                            <input className='control-select' placeholder='Ex: call' type='text' name='startIcon' onKeyUp={this.handleIcon} />
                        </div>
                        <div className='control'>
                            <label className='control-label' htmlFor='sizes'>Trailing Icon</label>
                            <input className='control-select' placeholder='Ex: call' type='text' name='endIcon' onKeyUpt={this.handleIcon} />
                        </div>
                        <div className='control-row'>
                            <label className='control-label' htmlFor='sizes'>Disabled ?</label>
                            <input className='control-select' type='checkbox' name='disabled' onChange={this.handleDisabled}/>
                        </div>
                        <div></div>
                        <div className='control-row'>
                            <label className='control-label' htmlFor='sizes'>Disable Shadow ?</label>
                            <input className='control-select' type='checkbox' name='disableShadow' onChange={this.handleShadow} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

const element = <React.StrictMode><App /></React.StrictMode>
ReactDOM.render(element, document.querySelector('#app'));