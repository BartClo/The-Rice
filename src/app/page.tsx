"use client";

import Image from "next/image";

const MENU_ITEMS = [
  {
    id: "tteokbokki-clasico",
    name: "Tteokbokki Clásico",
    description: "Masitas de arroz servidas en una salsa espesa, dulce y muy picante. El verdadero sabor de las calles de Seúl en tu paladar.",
    image: "/images/tteok.jpg",
  },
  {
    id: "korean-fried-chicken",
    name: "Korean Fried Chicken",
    description: "El famoso pollo frito coreano. Doblemente frito para un crujido extremo y bañado en nuestra salsa secreta agridulce y picante.",
    image: "/images/pollo.jpg",
  },
  {
    id: "corndogs-coreanos",
    name: "Corndogs Coreanos",
    description: "Banderillas crujientes rellenas de salchicha y abundante queso mozzarella derretido, cubiertas de papas fritas o panko.",
    image: "/images/corndog.jpg",
  },
  {
    id: "ramyeon-picante",
    name: "Ramyeon Picante",
    description: "Fideos instantáneos coreanos en un caldo rojo fuego, coronados con huevo, cebollín y un toque de aceite de sésamo.",
    image: "/images/ramyeon.jpg",
  },
];

export default function Home() {
  const handleWhatsApp = (dishName?: string) => {
    const messageTemplate = dishName
      ? `Hola equipo The Rice 🥢, me gustaría pedir info sobre: ${dishName}`
      : `Hola equipo The Rice 🥢, me gustaría hacer un pedido.`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappNumber = "569XXXXXXXX"; // Reemplazar con el número real
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="w-full min-h-screen bg-[#050505] relative text-white font-sans selection:bg-[#e60000] selection:text-white pb-24 lg:pb-0">
      {/* Fondo Fijo Animado */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_80%_80%_at_0%_-10%,rgba(230,0,0,0.15),rgba(0,0,0,0))] animate-breathe"></div>
      </div>

      {/* Contenedor principal con items-start para que funcione el sticky */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 gap-16 lg:gap-20">

        {/* COLUMNA IZQUIERDA (Sticky) */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-12 flex flex-col gap-10">

          {/* Logo Real */}
          <img
            src="/images/logo.png"
            alt="The Rice Corea Restaurant"
            className="w-40 md:w-56 mb-8 object-contain"
          />

          <div className="flex flex-col gap-6">
            {/* Hero Text */}
            <h1 className="font-[family-name:var(--font-poppins)] font-black text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-[1.05] uppercase tracking-tight">
              EL AUTÉNTICO STREET FOOD COREANO EN RANCAGUA <span className="inline-block">🇰🇷🔥</span>
            </h1>

            {/* Descripción */}
            <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-md">
              Traemos la energía, el humo y los sabores vibrantes de los callejones de Seúl directo a tu mesa. Comida rápida, furiosa y absolutamente adictiva.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-gray-800/50 shadow-2xl flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-bold text-white text-lg">Retiro en local</p>
                <p className="text-gray-400">Alcázar/Mujica #202, Rancagua</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-800"></div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🕒</span>
              <div>
                <p className="font-bold text-white text-lg">Horario</p>
                <p className="text-gray-400">Mar a Dom: 12:30 - 22:00 hrs</p>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <button
            onClick={() => handleWhatsApp()}
            className="bg-[#e60000] hover:bg-red-700 active:scale-95 transition-all w-full py-5 px-6 text-xl font-[family-name:var(--font-poppins)] font-bold rounded-2xl shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] flex items-center justify-center gap-3"
          >
            HACER PEDIDO POR WHATSAPP
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
          </button>

        </div>

        {/* COLUMNA DERECHA (Scrollable Menu) */}
        <div className="w-full lg:w-7/12 flex flex-col gap-16 md:gap-24 pt-8 lg:pt-0">

          {MENU_ITEMS.map((item, index) => (
            <div key={item.id} className="min-h-[50vh] flex flex-col gap-6 group">
              {/* Imagen Grande */}
              <div className="w-full aspect-square sm:aspect-[4/5] relative bg-[#111] rounded-[2rem] overflow-hidden border border-white/5">
                {/* <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                /> */}
                {/* Placeholder mientras no hay imagen cargada */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                  <span className="text-gray-700 font-[family-name:var(--font-poppins)] font-black text-2xl sm:text-4xl opacity-30 rotate-[-10deg] uppercase tracking-widest text-center px-4">{item.name}</span>
                </div>
              </div>

              {/* Detalles del Plato */}
              <div className="flex flex-col items-start gap-4 px-2">
                <div>
                  <h2 className="font-[family-name:var(--font-poppins)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 tracking-tight">
                    {item.name}
                  </h2>
                  <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsApp(item.name)}
                  className="mt-2 text-[#e60000] hover:text-red-400 font-bold text-lg flex items-center gap-2 transition-colors group/btn"
                >
                  Pedir este plato
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">➔</span>
                </button>
              </div>
            </div>
          ))}

          {/* FOOTER URBANO */}
          <div className="bg-[#0a0a0a] border-t border-gray-800 rounded-3xl p-8 lg:p-12 mt-12 flex flex-col gap-6">
            <h2 className="font-[family-name:var(--font-poppins)] font-black text-3xl sm:text-4xl uppercase tracking-tight text-white gap-2">
              ¿CON HAMBRE? VEN A VERNOS.
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-lg">
                José Domingo Mujica esq. Almarza #202, Rancagua
              </p>
              <a
                href="https://instagram.com/restauranttherice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e60000] hover:text-red-400 font-bold transition-colors w-fit flex items-center gap-2 mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                @restauranttherice
              </a>
            </div>
            <div className="w-full h-px bg-gray-800/50 mt-4"></div>
            <p className="text-gray-500 text-sm">
              © 2026 The Rice Corea Restaurant. Todos los derechos reservados.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

