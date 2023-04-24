import { Element } from "./ElementHecho"
import PropTypes from 'prop-types'

export const Hecho = ({ hechos, onConfirmDel }) => {
    

  return (
    
        <div className="bg-green-300 h-full">
            <ul id="hechoList">
                { 
                    hechos.map( element => {                    
                        return( 
                            <Element
                                key = { element }
                                element = { element }
                                onConfirmDel = {onConfirmDel}
                                
                            />
                        )
                    })
                    
                }
            </ul>
        </div>
    
  )
}


Hecho.propTypes ={
    hechos: PropTypes.array,
    onConfirmDel: PropTypes.func
}
