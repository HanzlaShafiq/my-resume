export function Head() {
    return (
        <>
            <header className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">

                        <span className="self-center text-2xl font-autograph whitespace-nowrap dark:text-white">Hanzla Shafiq</span>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="/." className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="/education" className="mr-4 hover:underline md:mr-6">Education</a>
                            </li>
                            <li>
                                <a href="/work-exp" className="mr-4 hover:underline md:mr-6 ">Work Experience</a>
                            </li>
                            <li>
                                <a href="/certificate" className="mr-4 hover:underline md:mr-6 ">Certifiactes</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}