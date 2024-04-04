import "./Header.css"

function Header() {

    return (
      <div className="Header">
          <div>
            <img className="Logo" src="../../Captura de tela 2024-04-04 152053.png" alt="" />
          </div>
          <div className="barraPesquisaLupa">
            <input className="barraPesquisa" type="text" placeholder="    Pesquisar produto..." />
            <img className="lupaPesquisa" src="../../711319.png" alt="" />
          </div>
          <div className="cadastroEntrar">
            <a className="Cadastro" href="">Cadastre-se</a>
            <button className="BotaoEntrar">Entrar</button>
          </div>
          <div>
            <img className="carrinho" src="../../cart.png" alt="" />
          </div>
      </div>
    )
  }
  
  export default Header