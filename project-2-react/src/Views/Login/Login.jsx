
import './index.scss'
import Header from '../../Components/Header/header'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   <section className='login'>
      <Header/>
      <form className='login_form'>
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2> você pode entrar com o seu CPF</h2>

          <div className="login_input-wrapper">

            <label htmlFor='name'>Digite seu CPF:</label>
              <input
                type='text'
                placeholder='Nome Completo'
                id='name'
                className='login_input-name'
              />

              <label htmlFor='password'> Senha:</label>
              <input
                type='password'
                id='password'
                placeholder='**********'
              />
          </div> 

      </form>
           
      <button type='submit' >
        <Link to={"/home"}>Entrar</Link>
      </button>
      
   </section>
  );
};

export default Login