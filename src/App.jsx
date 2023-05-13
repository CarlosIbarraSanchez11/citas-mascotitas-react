import {useState, useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"


function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] =useState({});

  // useEffect(() =>{
  //   const obtenerLS = () =>{
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
  // }, [])

  useEffect(()=>{ //Aca se va a mantener el localStorage
    // console.log('Componente listo o cambio pacientes')
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id)=>{
    // console.log('Eliminando paciente', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }
  
  return (
    //<> </> -> es un DIV Fragmentado
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario
        
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
