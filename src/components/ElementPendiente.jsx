import PropTypes from 'prop-types'

export const Element = ({ element, onDelete }) => {

  return (
    <li className='ml-5 pt-2'>
        <button className='mr-4 text-blue-500 text-xs font-bold' onClick={ onDelete }>Finalizar</button>
        <span>{ element }</span>
    </li>
  )
}


Element.propTypes = {
    element: PropTypes.string.isRequired,
    onDelete: PropTypes.func
}