import { Footer } from "./components/Footer"
import { TodoList } from "./components/TodoList"


export const App = () => {
  return (
    <div
    className="bg-gradient-to-r from-gray-200 to-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center py-5">Tareas (Todo App)</h1>
      <TodoList />
      <Footer/>


    </div>
  )
}
