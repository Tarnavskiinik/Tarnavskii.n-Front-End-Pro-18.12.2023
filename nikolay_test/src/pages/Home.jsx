import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css'

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
    }, [])

    const handleLogout =() =>{
        localStorage.removeItem('user')
        navigate('/register')
    }


  return (
      <div>
            <header className={styles.header}>
                <div  className="header-nav_block">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                            onClick={() => navigate('/account')}>Account
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                            onClick={() => navigate('/about')}>About
                    </button>
                </div>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 ml-3'
                                onClick={handleLogout}>Exit
                    </button>
            </header>
      </div>
  );
}