import './index.scss';



export default function LoginUsuario(){


    return(
        <main className='page-loginusu'>
          <div className='container1'>
              <div>
              <img src="./assets/images/image 1067.png" alt=""/>
              </div>

              <h1>  Login </h1>

              <div>
                  <h3>Email:</h3>
                  <input type="email" placeholder='Digite seu email'/>
              </div>

              <div>
                  <h3>Senha:</h3>
                  <input type="email" placeholder='Digite sua senha'/>
              </div>

              <div className="cx">
                  <button>
                      Entrar
                  </button>
              </div>
              <p>Não tem uma conta? <a>lique aqui</a>C e cadastre-se</p>

              <h1>Overland</h1>
          </div>

        </main>
    )
}