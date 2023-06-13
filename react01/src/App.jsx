import './App.css';
import Index from './Components/Index';
import NovoComponente from './Components/NovoComponente';
import Teste from './Components/Teste';
import mark from './assets/sacrifice.png'
function App() {
    const msg = () => {
        let new_p = document.createElement("p")
        new_p.innerHTML = "OLHA O GUTS AI"
        document.body.appendChild(new_p)
        console.log(new_p)
    }
    let gutsXgriff = (<img src="https://i.redd.it/pe16ijxmqj761.jpg" height={500}></img>)
    return (
        <>
            <header>
                <img src={mark} height={90} alt="sacrifice mark" className='mark'/>

                <nav>

                  <ul className='nav-header'>
                    <li className='list-header'><a className='a-nav'>Home</a> </li>
                    <li className='list-header'> <a href="#" className='a-nav'>Plot</a> </li>
                    <li className='list-header'> <a href="#" className='a-nav'>Characters</a> </li>
                  
                  </ul>
                </nav>
            </header>
            <div className="p-teste">
                <button onClick={msg}>CLICA AQUI VAI</button>
                <h1 className='title'>Home Page</h1>
                <Index></Index>
                {gutsXgriff}
            </div>
            <NovoComponente />
            <Teste />
        </>
    );
}

export default App;
