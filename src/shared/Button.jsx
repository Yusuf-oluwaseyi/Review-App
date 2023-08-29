import PropTypes from 'prop-types'


function Button({ children, version, type, isDisabled }) {
  return (
    <Button type={type} disable={isDisabled} className={`btn btn-${version}`}>
      {children}
    </Button>
  )
}

Button.defaultProps = {
    versiom: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    version: PropTypes.string,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button
