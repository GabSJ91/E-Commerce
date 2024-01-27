import './index.scss'

const headerMenu = () => {
  return (
    <header className="header-menu">
      <img src='./logo.svg' alt="logo" className="header-menu__logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu Carrinho</h1>
        <img src='./carrinho.svg' alt="cartLogo" />
      </div>
    </header>
  )
}

export default headerMenu