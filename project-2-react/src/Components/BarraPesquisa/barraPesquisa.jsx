import './index.scss'

const barraPesquisa = () => {
  return (
    <div className="search">
    <div className="search__input-container">
      <img
        src='./lupa.svg'
        alt="search logo"
        className="search__search-logo"
      />
      <input type="text" placeholder="Search" />
    </div>
    <img src='./perfil.svg' alt="profile logo" />
    <img src='./favorito.svg' alt="favorite logo" />
  </div>
  )
}

export default barraPesquisa