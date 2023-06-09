

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-100 to-red-300 font-bold absolute bottom-0 px-9 py-5 w-full flex justify-between ">
        <div>
            Pequeña aplicación para practicas. Hecha con React y TailwindCSS
            <br />
            <a href="https://github.com/icplana/TodoAppReact"><p className=" mt-3 underline animate-bounce">Github Repo</p></a>
        </div>
        <div>
            Ignasi
            <a  href="https://github.com/icplana" target="_blank" rel="noreferrer"><img  className="animate-bounce mt-3" src="../src/assets/github.svg" alt="" width='30px' /></a>
        </div>
    </footer>
  )
}
