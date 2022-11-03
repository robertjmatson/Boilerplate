import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
        <h1 style={{ color: 'red', backgroundColor: 'black' }}>{props.title}</h1>
        <p>{props.description}</p>
    </header>
  )
}

Header.defaultProps = {
    title: 'Default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default Header