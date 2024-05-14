import userImg from '../img/image.svg'


export const About = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    return(
        <>
            <img src={userImg} alt="user" />
            <p className='text-white text-5xl mb-3'>Welcome to our website!, {user.name}!</p>
        </>
    )
}