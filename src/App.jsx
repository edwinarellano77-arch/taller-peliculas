import { useState } from 'react'

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false)

  const manejarClic = () => {
    setEsFavorita(!esFavorita)
  }

  return (
    <div onClick={manejarClic} style={{ cursor: 'pointer', userSelect: 'none' }}>
      <h3>{titulo} {esFavorita ? "⭐" : ""}</h3>
    </div>
  )
}

function App() {
  // 1. Creamos el arreglo con los nombres de tus películas favoritas
  const misPeliculas = ["Batman", "Avatar", "Inception", "Armagedon", "Interstellar"]

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      
      {/* 2. Recorremos el arreglo con .map() para generar la lista dinámicamente */}
      {misPeliculas.map((pelicula, index) => (
        <Pelicula key={index} titulo={pelicula} />
      ))}
    </div>
  )
}

export default App
