const Contact = () => {
    return (
        <section className="max-w-screen-xl relative h-max mt-6 mx-auto" id="contact">
            <div className="w-full h-full">
                <h1 className="text-5xl font-semibold text-[#ffb703] p-10">Contact:</h1>
                <div className="flex w-full mx-auto my-5">
                    <ul className="flex flex-wrap gap-16 text-center p-5 py-6 font-semibold text-3xl max-md:text-2xl text-blue-100 justify-center">
                        <li className="bg-blue-200 rounded-2xl shadow-2xl p-8 transition-all hover:-translate-y-8 cursor-pointer">
                            <h1 className="pb-5">Name</h1>
                            <h4 className="text-[#ffb703]">Mohamed Abobakr</h4>
                        </li>
                        <li className="bg-blue-200 rounded-2xl shadow-2xl p-8 transition-all hover:-translate-y-8 cursor-pointer">
                            <h1 className="pb-5">Email</h1>
                            <h4 className="text-[#ffb703]">ziadabobakr@gmail.com</h4>
                        </li>
                        <li className="bg-blue-200 rounded-2xl shadow-2xl p-8 transition-all hover:-translate-y-8 cursor-pointer">
                            <h1 className="pb-5">Phone</h1>
                            <h4 className="text-[#ffb703]">+201119452390</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact