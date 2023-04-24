import { useState } from "react"
import { Element } from "./ElementPendiente"
import { PropTypes } from 'prop-types'


export const Pendiente = ({ onNewHecho }) => {

    const [pendientes, setPendientes] = useState(['limpiar', 'comprar','cocinar'])
    
    
    const onNewElement =  ()  => {        
        const value = document.querySelector('#newElement').value
        setPendientes([ ...pendientes, value ])
        document.querySelector('#newElement').value =''
    }

    const onDelete = (e)=> {
        const data = [...pendientes]
        const value = e.target.parentElement.children[1].textContent
        onNewHecho( value )
       
        const newData = data.filter( element => element != value)
        
        setPendientes(newData)
    }


  return (
    <div className="bg-yellow-300 h-full">
        <ul id="pendienteList">
            { 
                pendientes.map( element => {                    
                    return( 
                        <Element
                            key = { element }
                            element = { element }
                            onDelete = { onDelete }
                        />
                    )
                })
                
            }
        </ul>
        <div className="flex py-8 px-5 justify-between">
            <textarea 
                name="newElement" 
                id="newElement" 
                cols="60" rows="1" 
                placeholder="Add an element"
                className=" ml-2 px-3 py-1 rounded-sm"
            ></textarea>
            <button 
                className="bg-zinc-600 text-white rounded-sm px-3 ml-3"  
                onClick={ onNewElement }  
            >Add</button>
        </div>
    </div>
  )
}

Pendiente.propTypes = {
    onNewHecho: PropTypes.func
}
