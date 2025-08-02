

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
        }}
      >
       {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Nuestra Plataforma</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Descubre soluciones innovadoras que transformarán tu experiencia digital. Calidad, diseño y funcionalidad en un solo lugar.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Empezar Ahora
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Saber Más
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section Nuestros Servicios*/}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                alt="Desarrollo Web" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Desarrollo Web</h2>
                <p className="text-gray-600 mb-4">Creamos sitios web modernos, responsivos y optimizados para brindar la mejor experiencia a tus usuarios.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Marketing Digital" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Marketing Digital</h2>
                <p className="text-gray-600 mb-4">Impulsa tu negocio con estrategias de marketing digital efectivas y personalizadas para tu audiencia.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Diseño UX/UI" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Diseño UX/UI</h2>
                <p className="text-gray-600 mb-4">Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.</p>
              </div>
            </div>
          </div>
          
          {/* Botón Saber más debajo de los cards */}
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Saber más
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contáctanos</h2>
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Tu nombre" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="tu@email.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="+56 9 1234 5678" 
                />
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Cuéntanos sobre tu proyecto o pregunta..." 
                  required
                ></textarea>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}