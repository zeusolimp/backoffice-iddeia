"use client";

import { useState } from 'react';

export default function AdminPanel() {
  // Estados para manejar los datos del contenido
  const [heroData, setHeroData] = useState({
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Bienvenido a Nuestra Plataforma",
    subtitle: "Descubre soluciones innovadoras que transformarán tu experiencia digital. Calidad, diseño y funcionalidad en un solo lugar.",
    primaryButtonText: "Empezar Ahora",
    primaryButtonLink: "#",
    secondaryButtonText: "Saber Más",
    secondaryButtonLink: "#"
  });

  const [servicesData, setServicesData] = useState({
    sectionTitle: "Nuestros Servicios",
    cards: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        title: "Desarrollo Web",
        description: "Creamos sitios web modernos, responsivos y optimizados para brindar la mejor experiencia a tus usuarios.",
        buttonText: "Más Información",
        buttonLink: "#"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Marketing Digital",
        description: "Impulsa tu negocio con estrategias de marketing digital efectivas y personalizadas para tu audiencia.",
        buttonText: "Más Información",
        buttonLink: "#"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Diseño UX/UI",
        description: "Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.",
        buttonText: "Más Información",
        buttonLink: "#"
      }
    ]
  });

  const [contactData, setContactData] = useState({
    sectionTitle: "Contáctanos",
    nameLabel: "Nombre Completo",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "tu@email.com",
    phoneLabel: "Teléfono",
    phonePlaceholder: "+56 9 1234 5678",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu proyecto o pregunta...",
    submitButtonText: "Enviar Mensaje"
  });

  const [footerData, setFooterData] = useState({
    copyrightText: "© 2023 Tu Empresa. Todos los derechos reservados."
  });

  // Funciones para manejar cambios en los formularios
  const handleHeroChange = (field: string, value: string) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
  };

  const handleServicesChange = (field: string, value: string) => {
    setServicesData(prev => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (cardId: number, field: string, value: string) => {
    setServicesData(prev => ({
      ...prev,
      cards: prev.cards.map(card => 
        card.id === cardId ? { ...card, [field]: value } : card
      )
    }));
  };

  const handleContactChange = (field: string, value: string) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const handleFooterChange = (field: string, value: string) => {
    setFooterData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Aquí se implementaría la lógica para guardar los datos
    alert('Contenido guardado exitosamente!');
    console.log('Hero Data:', heroData);
    console.log('Services Data:', servicesData);
    console.log('Contact Data:', contactData);
    console.log('Footer Data:', footerData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Guardar Cambios
              </button>
              <a
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* Sección Hero */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sección Hero</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imagen de Fondo (URL)
                </label>
                <input
                  type="url"
                  value={heroData.backgroundImage}
                  onChange={(e) => handleHeroChange('backgroundImage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título Principal
                </label>
                <input
                  type="text"
                  value={heroData.title}
                  onChange={(e) => handleHeroChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtítulo
                </label>
                <textarea
                  value={heroData.subtitle}
                  onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Texto Botón Primario
                </label>
                <input
                  type="text"
                  value={heroData.primaryButtonText}
                  onChange={(e) => handleHeroChange('primaryButtonText', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link Botón Primario
                </label>
                <input
                  type="url"
                  value={heroData.primaryButtonLink}
                  onChange={(e) => handleHeroChange('primaryButtonLink', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Texto Botón Secundario
                </label>
                <input
                  type="text"
                  value={heroData.secondaryButtonText}
                  onChange={(e) => handleHeroChange('secondaryButtonText', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link Botón Secundario
                </label>
                <input
                  type="url"
                  value={heroData.secondaryButtonLink}
                  onChange={(e) => handleHeroChange('secondaryButtonLink', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#"
                />
              </div>
            </div>
          </div>

          {/* Sección Servicios */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sección Servicios</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título de la Sección
              </label>
              <input
                type="text"
                value={servicesData.sectionTitle}
                onChange={(e) => handleServicesChange('sectionTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Cards */}
            <div className="space-y-8">
              {servicesData.cards.map((card, index) => (
                <div key={card.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta {index + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Imagen (URL)
                      </label>
                      <input
                        type="url"
                        value={card.image}
                        onChange={(e) => handleCardChange(card.id, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Título
                      </label>
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => handleCardChange(card.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descripción
                      </label>
                      <textarea
                        value={card.description}
                        onChange={(e) => handleCardChange(card.id, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Texto del Botón
                      </label>
                      <input
                        type="text"
                        value={card.buttonText}
                        onChange={(e) => handleCardChange(card.id, 'buttonText', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Link del Botón
                      </label>
                      <input
                        type="url"
                        value={card.buttonLink}
                        onChange={(e) => handleCardChange(card.id, 'buttonLink', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="#"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección Contacto */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sección Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título de la Sección
                </label>
                <input
                  type="text"
                  value={contactData.sectionTitle}
                  onChange={(e) => handleContactChange('sectionTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etiqueta Campo Nombre
                </label>
                <input
                  type="text"
                  value={contactData.nameLabel}
                  onChange={(e) => handleContactChange('nameLabel', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Placeholder Campo Nombre
                </label>
                <input
                  type="text"
                  value={contactData.namePlaceholder}
                  onChange={(e) => handleContactChange('namePlaceholder', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etiqueta Campo Email
                </label>
                <input
                  type="text"
                  value={contactData.emailLabel}
                  onChange={(e) => handleContactChange('emailLabel', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Placeholder Campo Email
                </label>
                <input
                  type="text"
                  value={contactData.emailPlaceholder}
                  onChange={(e) => handleContactChange('emailPlaceholder', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etiqueta Campo Teléfono
                </label>
                <input
                  type="text"
                  value={contactData.phoneLabel}
                  onChange={(e) => handleContactChange('phoneLabel', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Placeholder Campo Teléfono
                </label>
                <input
                  type="text"
                  value={contactData.phonePlaceholder}
                  onChange={(e) => handleContactChange('phonePlaceholder', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Etiqueta Campo Mensaje
                </label>
                <input
                  type="text"
                  value={contactData.messageLabel}
                  onChange={(e) => handleContactChange('messageLabel', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Placeholder Campo Mensaje
                </label>
                <input
                  type="text"
                  value={contactData.messagePlaceholder}
                  onChange={(e) => handleContactChange('messagePlaceholder', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Texto Botón Enviar
                </label>
                <input
                  type="text"
                  value={contactData.submitButtonText}
                  onChange={(e) => handleContactChange('submitButtonText', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Sección Footer */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Footer</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Texto de Copyright
              </label>
              <input
                type="text"
                value={footerData.copyrightText}
                onChange={(e) => handleFooterChange('copyrightText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Botón de Guardar Final */}
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Guardar Todos los Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}