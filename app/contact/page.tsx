export default function ContactPage(){
    return (
        <main className="p-10 max-w-xl">
            <h1 className="text-3xl font-bold mb-4">Contact me</h1>

            <p className="text-gray-600 mb-6">Send a message</p>

            <form className="flex flex-col gap-4">
                <input 
                type="text"
                placeholder="Your name"
                className="border p-3 rounded-lg" />

                <input 
                type ="email"
                placeholder="Your email"
                className="border p-3 rounded-lg" />

                <textarea 
                placeholder="Your message"
                className="border p-3 rounded-lg h-32"
                />

                <button
                type="submit"
                className="bg-black text-white py-3 rounded-lg" >
                    Send message
                </button>
            </form>
        </main>
    );
}