import { useState } from 'react'

function Pelicula({ titulo }) {
  const [esFavorita, setEsFavorita] = useState(false)

  const manejarClic = () => {
    setEsFavorita(!esFavorita)
  }

  const estiloTarjeta = {
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
    border: esFavorita ? '2px solid #ffca28' : '1px solid #ccc',
    backgroundColor: esFavorita ? '#fff9e6' : '#fff',
    color: '#333'
  }

  return (
    <div onClick={manejarClic} style={estiloTarjeta}>
      <h3 style={{ margin: 0 }}>{titulo} {esFavorita ? "⭐" : ""}</h3>
    </div>
  )
}

function App() {
  const [misPeliculas, setMisPeliculas] = useState(["Lord's of the ring", "Avatar", "Star Wars"])
  const [nombreNuevaPelicula, setNombreNuevaPelicula] = useState("")

  // Fíjate cómo nuestra función quedó súper limpia y sin estructuras "if"
  const agregarPelicula = () => {
    setMisPeliculas([...misPeliculas, nombreNuevaPelicula])
    setNombreNuevaPelicula("")
  }

  const estiloContenedor = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }

  return (
    <div style={estiloContenedor}>
      <h1 style={{ textAlign: 'center', color: '#222' }}>Mis Películas Favoritas</h1>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Escribe una nueva película..." 
          value={nombreNuevaPelicula}
          onChange={(e) => setNombreNuevaPelicula(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        
        {/* Aquí está tu nuevo botón con validación visual y nativa */}
        <button 
          onClick={agregarPelicula}
          disabled={nombreNuevaPelicula.trim() === ""}
          style={{ 
            padding: '10px 15px', 
            borderRadius: '6px', 
            backgroundColor: nombreNuevaPelicula.trim() === "" ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            cursor: nombreNuevaPelicula.trim() === "" ? 'not-allowed' : 'pointer' 
          }}
        >
          Añadir
        </button>
      </div>

      {misPeliculas.map((pelicula, index) => (
        <Pelicula key={index} titulo={pelicula} />
      ))}
    </div>
  )
}

export default App
