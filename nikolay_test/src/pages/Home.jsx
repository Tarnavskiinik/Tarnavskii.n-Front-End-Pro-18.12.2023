import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// TODO: Страница отправки пароля на почту, логина, регистрации не должны быть доступны авторизованным пользователям
// TODO: Страница Home должна быть доступна только авторизованным пользователям
// TODO: Сделать глобальный стейт, который будет хранить информацию о пользователе
// TODO: Страница отправки пароля на почту не должна использовать глобальный стейт
// TODO : Сделать кнопку выхода.
// TODO : Добавить юзера в локал сторедж.

export const Home = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user)
    useEffect(() => {
        if(!user.name){
            navigate('/login')
        }
    }, [user , navigate])

    const handleLogout =() =>{
        localStorage.removeItem('user')
        navigate('/login')
    }


  return (
      <div>
          <h1 className='text-white text-5xl mb-3'>Hello, {user.name}!</h1>
          <p>Welcome to your first challenge with redux toolkit!</p>
          <nav>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'
                      onClick={() => navigate('/login')}>Go to Login
              </button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                      onClick={() => navigate('/register')}>Go to Registration
              </button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                      onClick={() => navigate('/email')}>Go to Recovery
              </button>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                        onClick={handleLogout}>Exit
                </button>
          </nav>
      </div>
  );
}