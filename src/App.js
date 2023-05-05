import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{    
    id: uuid(),
    nombre:"Eddy Calan",
    puesto:"Alumno",
    foto:"https://github.com/Ecalan.png",
    equipo:"Front End",
    favorito: true
  },
  {    
    id: uuid(),
    nombre:"Genesys Rondón",
    puesto:"Desarrolladora de software e instructora",
    foto:"https://github.com/genesysaluralatam.png",
    equipo:"Programación",
    favorito: false
  },
  {    
    id: uuid(),
    nombre:"Jeanmarie Quijada",
    puesto:"Instructora en Alura Latam",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    equipo:"UX y Diseño",
    favorito: false
  },
  {    
    id: uuid(),
    nombre:"Christian Velasco",
    puesto:"Head de Alura e instructor",
    foto:"https://github.com/christianpva.png",
    equipo:"Programación",
    favorito: false
  },
  {    
    id: uuid(),
    nombre:"Innovación y  Gestión",
    puesto:"Dev. FullStack",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    equipo:"Innovación y  Gestión",
    favorito: false
  },
])

const [equipos, actualizarEquipos] = useState(
  [
    { 
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    },
    { 
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },
    { 
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    { 
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    { 
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    { 
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    { 
      id: uuid(),
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
      
  ]
)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
}

//Registrar colaborador

const registrarColaborador = (colaborador) => {
  console.log("Nuevo Colaborador:", colaborador)
  //Spread opertor
  actualizarColaboradores([...colaboradores,colaborador])
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
}

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar:", color, id)
  const equiposAcualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }

    return equipo
  })

  actualizarEquipos(equiposAcualizados)
}

// Crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados= colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.favorito = !colaborador.favorito
    }

    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      {/*mostrarFormulario == true ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer />


    </div>
  );
}

export default App;
