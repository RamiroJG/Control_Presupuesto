import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    // Definiendo un state
    const [mensaje, setMensaje] = useState('');

    // Administrando el presupuesto
    const handlePresupuesto = (e) =>{
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto valido');
            // Detenemos la ejecucion del codigo
            return;
        }
        // Reseteamos el mensaje 
        setMensaje('');
        setIsValidPresupuesto(true);
        
        
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>

                    <input 
                        type="number" 
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={(e) =>{setPresupuesto(Number(e.target.value))}}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
  }
  
  export default NuevoPresupuesto