import PropTypes from 'prop-types'

export const Element = ({ element, onConfirmDel }) => {

  return (
    <li className='ml-5 pt-2'>
        <button className='mr-4 text-red-500 text-xs font-bold' onClick={ onConfirmDel }>Eliminar</button>
        <span>{ element }</span>
    </li>
  )
}


Element.propTypes = {
    element: PropTypes.string.isRequired,
    onConfirmDel: PropTypes.func
}