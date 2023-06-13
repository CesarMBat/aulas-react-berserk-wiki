//import React from 'react'
/*
  13:50 - Começamos falando da extensão ES7 React/Redux/GraphQL/React-Native snippets, ou seja Snippets para React
  para utilizar usamos o "comando" rafce
  14:00 - Continuando a revisão vamos criar uma função
  14:10 - Mexemos um pouco no index.css, ele pode ser completamente alterado, e será o CSS padrão para todas as páginas
*/

import berserk from "../assets/berserk.jpg"
const Index = () => {
  const handleMsg = () => {
    return console.log("Cliquei no H2 (Lista)")
  }
  return (
    <>
        <main>
            <h2 onClick={handleMsg}>Lista</h2>
            <div className="div-list">S
                <ul>
                    <li>Item 01</li>
                    <li>Item 02</li>
                    <li>Item 03</li>
                </ul>
                <img src={berserk} height="500px" alt="BERSERK" />

            </div>
        </main>
    </>
  )
}

export default Index
