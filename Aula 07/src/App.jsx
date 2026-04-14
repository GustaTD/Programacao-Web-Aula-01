import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  const titulo = "Meu primeiro post em React"
  const autor = "Gustavo"
  const data = "2026"
  const conteudo = "Esse é um post simples usando props no React."

  return (
    <div>
      <Header />
      <Navigation />

      <Article 
        titulo={titulo}
        autor={autor}
        data={data}
        conteudo={conteudo}
      />

      <Sidebar />

      <Footer />
    </div>
  )
}

export default App