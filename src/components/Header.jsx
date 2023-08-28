import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headStyles = {
        backgroundColor: bgColor,
        color: textColor 
    }


  return (
    <header style={headStyles}>
      <h2>{text}</h2>
    </header>
  )
}

Header.defaultProps = {
    text: 'Review UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#c1fe00'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string
}

export default Header
