import Layout from "../components/Layout"

export default function JSX() {
  const titulo = <h1>JSX é um conceito Central</h1>

  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        {titulo}
        {subtitulo()}
        <p>
          {JSON.stringify({ nome: 'Cadu', idade: 39})}
        </p>
      </div>
    </Layout>
  )
}