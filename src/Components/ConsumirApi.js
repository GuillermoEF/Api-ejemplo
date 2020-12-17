import React from 'react'

const ConsumirApi =()=>{
    const [datos, setDatos] =React.useState([])
    React.useEffect(()=>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
      const data = await fetch('http://jsonplaceholder.typicode.com/users')
      const usuarios = await data.json()
      setDatos(usuarios)
    }


    return(
        <div>
            <h1 className="datos">Datos extraidos de la Api</h1>
            {
                datos.map(item =>(
                    <div className="alado">
                        <div className="alado">
                        <p>{item.id}</p> 
                        </div>
                        <div className="alado">
                        <p>{item.name}</p> 
                        </div>
                        <div className="alado">
                        <p>{item.username}</p> 
                        </div>
                        <div className="alado">
                        <p>{item.phone}</p> 
                        </div>
                        <div className="alado">
                        <p>{item.website}</p> 
                        </div>
                    </div>
                ))
            }
           
        </div>
        
    );
}

export default ConsumirApi

