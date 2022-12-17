import { Layout } from "../componentes/Layout"
import Swal from 'sweetalert2/dist/sweetalert2.js'
const FinalizarCompraView = () => {
    return(
        <Layout>
            <div className="InputDiv">
                <input type="text" placeholder="Ingrese su correo electronico" />
                <input type="text" placeholder="Ingrese su Nombre y Apellido" />
                <input type="tel" placeholder="Ingrese su Numero de celular"/>
                </div>

                <div>
                    <h3>Total: </h3>
                </div>

                    <div>
                        <button onClick={} className="inputFinalizar">
                            Realizar Compra
                        </button>
                    </div>
            
        </Layout>
    )
}

export default FinalizarCompraView