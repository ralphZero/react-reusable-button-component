const CustomButton = (props) => {

    const {variant, startIcon, endIcon, value, size, color, disabled, disableShadow, onPressed} = props;

    let generateCss = () => {
        let list = ['btn'];
        if(variant == 'outline' || variant == 'text'){list.push('btn-'+variant);}
        if(size == 'sm' || size == 'lg'){list.push('btn-'+size);}
        if(color == 'primary' || color == 'secondary' || color == 'danger'){list.push('btn-'+color);}
        if(disableShadow){list.push('btn-no-shadow')}
        return list.join(' ');
    }
    let handleIcon = (positon) => {
        if(positon === 'left')
            return startIcon ? (startIcon) : null;
        else
            return endIcon ? (endIcon) : null;
    }
    let handleDisabled = () => {
        return disabled ? (true) : (false);
    }

    function createRipple(event) {
        const button = event.currentTarget;
    
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
    
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");
    
        const ripple = button.querySelector(".ripple");
    
        if (ripple) {
          ripple.remove();
        }
    
        button.appendChild(circle);
    }

    const handleOnPressed = (e) => {
        createRipple(e);
        onPressed(e);
    }

    return(
        <div className='btn-container'>
            <button className={generateCss()} disabled={handleDisabled()} onClick={handleOnPressed}>
                <span className='material-icons material-icons-start'>{handleIcon('left')}</span>
                <span>{value}</span>
                <span className='material-icons material-icons-end'>{handleIcon('right')}</span>
            </button>
        </div>
    );
}

export default CustomButton