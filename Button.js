var CustomButton = function CustomButton(props) {
    var variant = props.variant,
        startIcon = props.startIcon,
        endIcon = props.endIcon,
        value = props.value,
        size = props.size,
        color = props.color,
        disabled = props.disabled,
        disableShadow = props.disableShadow;


    var generateCss = function generateCss() {
        var list = ['btn'];
        if (variant == 'outline' || variant == 'text') {
            list.push('btn-' + variant);
        }
        if (size == 'sm' || size == 'lg') {
            list.push('btn-' + size);
        }
        if (color == 'primary' || color == 'secondary' || color == 'danger') {
            list.push('btn-' + color);
        }
        if (disableShadow) {
            list.push('btn-no-shadow');
        }
        return list.join(' ');
    };
    var handleIcon = function handleIcon(positon) {
        if (positon === 'left') return startIcon ? startIcon : null;else return endIcon ? endIcon : null;
    };
    var handleDisabled = function handleDisabled() {
        return disabled ? true : false;
    };

    return React.createElement(
        'div',
        { className: 'btn-container' },
        React.createElement(
            'button',
            { className: generateCss(), disabled: handleDisabled() },
            React.createElement(
                'span',
                { className: 'material-icons material-icons-start' },
                handleIcon('left')
            ),
            React.createElement(
                'span',
                null,
                value
            ),
            React.createElement(
                'span',
                { className: 'material-icons material-icons-end' },
                handleIcon('right')
            )
        )
    );
};

export default CustomButton;