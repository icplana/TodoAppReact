import { useState } from "react"
import { Pendiente } from "./Pendiente"
import { Hecho } from "./Hecho"


export const TodoList = () => {

    const [hechos, setHechos] = useState([])
    const onNewHecho = (value) => {
        setHechos([...hechos, value])
        
    }

    const onConfirmDel = (e) => {
        const data = [...hechos]
        const value = e.target.parentElement.children[1].textContent
            
        const newData = data.filter( element => element != value)
        
        setHechos(newData)
    }

  return (
    <div className="flex max-w-6xl  ">
        
        <div className="pendiente w-6/12">
            <h2 className="text-center text-2xl bg-yellow-500 py-4 font-extrabold ">Pendiente</h2>
            <Pendiente 
                onNewHecho = { onNewHecho }
            
            />
        </div>

        <div className="hecho w-6/12">
            <h2 className="text-center text-2xl bg-green-500 py-4 font-extrabold">Hecho</h2>
            <Hecho 
                hechos = { hechos }
                onConfirmDel = { onConfirmDel }
            />
        </div>
        
    </div>
  )
}
