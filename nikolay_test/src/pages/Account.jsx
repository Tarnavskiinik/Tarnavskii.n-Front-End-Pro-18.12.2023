


export const Account = () =>{

    const user = JSON.parse(localStorage.getItem('user'));

    return(
        <>
        <h1 className='text-white text-5xl mb-3'>Hello, {user.name}!</h1>
        <p>Welcome to your first challenge with redux toolkit!</p>
        </>
    )
}