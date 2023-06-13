import { useState } from "react"
import './NovoComponente.css'
const Teste = () => {
    const [contador, setContador] = useState(0)

  return (
    <div className="slavelho">
      <p>Clickaste {contador} vezes</p>
      <button onClick={() => setContador(contador+1)}>AAAAAAAAAAAAAAAAAAAAAA</button>
    </div>
  )
}

export default Teste
