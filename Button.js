var CustomButton = function CustomButton(props) {
    var variant = props.variant,
        startIcon = props.startIcon,
        endIcon = props.endIcon,
        value = props.value,
        size = props.size,
        color = props.color,
        disabled = props.disabled,
        disableShadow = props.disableShadow,
        onPressed = props.onPressed;


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

    function createRipple(event) {
        var button = event.currentTarget;

        var circle = document.createElement("span");
        var diameter = Math.max(button.clientWidth, button.clientHeight);
        var radius = diameter / 2;

        circle.style.width = circle.style.height = diameter + 'px';
        circle.style.left = event.clientX - button.offsetLeft - radius + 'px';
        circle.style.top = event.clientY - button.offsetTop - radius + 'px';
        circle.classList.add("ripple");

        var ripple = button.querySelector(".ripple");

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    var handleOnPressed = function handleOnPressed(e) {
        createRipple(e);
        onPressed(e);
    };

    return React.createElement(
        'div',
        { className: 'btn-container' },
        React.createElement(
            'button',
            { className: generateCss(), disabled: handleDisabled(), onClick: handleOnPressed },
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