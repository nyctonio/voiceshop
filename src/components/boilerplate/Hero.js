function Hero() {
    return (
        <div class="w-full bg-center bg-cover h-128" style={{"background-image": "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}>
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div class="text-center">
                    <h1 class="text-2xl font-semibold text-white uppercase md:text-3xl">Build Your new <span class="text-blue-400 underline">Saas</span></h1>
                    <button class="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;
