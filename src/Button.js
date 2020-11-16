const CustomButton = (props) => {

    const {variant, startIcon, endIcon, value, size, color, disabled, disableShadow} = props;

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

    return(
        <div className='btn-container'>
            <button className={generateCss()} disabled={handleDisabled()}>
                <span className='material-icons material-icons-start'>{handleIcon('left')}</span>
                <span>{value}</span>
                <span className='material-icons material-icons-end'>{handleIcon('right')}</span>
            </button>
        </div>
    );
}

export default CustomButton