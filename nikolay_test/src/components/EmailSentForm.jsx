import {useSelector} from "react-redux";

export const EmailSentForm = ({email}) => {


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full p-6 shadow dark:border md:mt-0 sm:max-w-md dark:border-gray-700 sm:p-8">
                    <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Your reset password sent to email {email}!
                    </h1>
                </div>
            </div>
        </section>
    )
}