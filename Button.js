var CustomButton = function CustomButton(props) {
    return React.createElement(
        'div',
        { className: 'btn-container' },
        React.createElement(
            'button',
            { className: 'btn btn-danger' },
            React.createElement(
                'span',
                { className: 'material-icons material-icons-start' },
                'add'
            ),
            React.createElement(
                'span',
                null,
                'Default'
            ),
            React.createElement('span', { className: 'material-icons material-icons-end' })
        )
    );
};

export default CustomButton;