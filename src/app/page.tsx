"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MENU_ITEMS = [
  {
    id: "tteokbokki-clasico",
    name: "Tteokbokki Clásico",
    description: "Masitas de arroz en salsa gochujang espesa, dulce y adictivamente picante. El sabor icónico de las calles de Seúl.",
    image: "/images/tteok.jpg",
    price: "$6.990",
    spiceLevel: 3,
    tag: "🔥 Más Pedido",
  },
  {
    id: "korean-fried-chicken",
    name: "Korean Fried Chicken",
    description: "Pollo doblemente frito para un crujido extremo, bañado en salsa yangnyeom agridulce con un toque picante irresistible.",
    image: "/images/pollo.jpg",
    price: "$8.990",
    spiceLevel: 2,
    tag: "⭐ Favorito",
  },
  {
    id: "corndogs-coreanos",
    name: "Corndogs Coreanos",
    description: "Salchicha y queso mozzarella fundido en masa crujiente, cubiertos de papas fritas trituradas. El snack viral de K-dramas.",
    image: "/images/corndog.jpg",
    price: "$4.990",
    spiceLevel: 0,
    tag: null,
  },
  {
    id: "ramyeon-picante",
    name: "Ramyeon Picante",
    description: "Fideos coreanos en caldo rojo fuego con huevo pochado, cebollín fresco y aceite de sésamo tostado. Puro confort.",
    image: "/images/ramyeon.jpg",
    price: "$5.990",
    spiceLevel: 3,
    tag: "🌶️ Extra Hot",
  },
  {
    id: "bibimbap",
    name: "Bibimbap",
    description: "Arroz caliente coronado con vegetales salteados, carne bulgogi, huevo frito y gochujang. Mezcla y disfruta la explosión de sabores.",
    image: "/images/bibimbap.jpg",
    price: "$9.490",
    spiceLevel: 1,
    tag: "🥗 Clásico",
  },
  {
    id: "kimbap",
    name: "Kimbap",
    description: "El sushi coreano: arroz con sésamo, vegetales, huevo y proteína envueltos en alga crujiente. Perfecto para compartir.",
    image: "/images/kimbap.jpg",
    price: "$6.490",
    spiceLevel: 0,
    tag: null,
  },
];

const REVIEWS = [
  {
    name: "Camila R.",
    text: "El mejor pollo frito que he probado en Chile. Crujiente por fuera, jugoso por dentro. ¡Volveré!",
    rating: 5,
  },
  {
    name: "Sebastián M.",
    text: "Los corndogs son tal cual los de los K-dramas. El queso derretido es brutal 🧀",
    rating: 5,
  },
  {
    name: "Valentina P.",
    text: "Ambiente increíble y comida auténtica. El tteokbokki me transportó a Seúl.",
    rating: 5,
  },
];

export default function Home() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const calculateStickyTop = () => {
      if (sidebarRef.current) {
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const calculatedTop = viewportHeight - sidebarHeight - 48;
        setStickyTop(calculatedTop);
      }
    };

    calculateStickyTop();
    window.addEventListener("resize", calculateStickyTop);
    return () => window.removeEventListener("resize", calculateStickyTop);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = (dishName?: string) => {
    const messageTemplate = dishName
      ? `Hola equipo The Rice 🥢, me gustaría pedir: ${dishName}`
      : `Hola equipo The Rice 🥢, me gustaría hacer un pedido.`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappNumber = "56992955614";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const SpiceIndicator = ({ level }: { level: number }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`text-sm ${i <= level ? "opacity-100" : "opacity-20"}`}
        >
          🌶️
        </span>
      ))}
    </div>
  );

  return (
    <main className="w-full min-h-screen bg-[#050505] relative text-white font-sans selection:bg-[#e60000] selection:text-white pb-24 lg:pb-0">
      {/* Fondo Fijo Animado */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_80%_80%_at_0%_-10%,rgba(230,0,0,0.15),rgba(0,0,0,0))] animate-breathe"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(230,0,0,0.08),rgba(0,0,0,0))]"></div>
      </div>

      {/* Marquee superior */}
      <div className="w-full bg-[#e60000] py-2 overflow-hidden relative z-20">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8 text-sm font-bold uppercase tracking-wider">
            🔥 NUEVO: Bibimbap y Kimbap disponibles • 📍 Retiro en Mujica #202 • 🕒 Mar-Dom 12:30-22:00 • 📱 Pedidos por WhatsApp • 🔥 NUEVO: Bibimbap y Kimbap disponibles • 📍 Retiro en Mujica #202 • 🕒 Mar-Dom 12:30-22:00 • 📱 Pedidos por WhatsApp
          </span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 gap-16 lg:gap-20">

        {/* COLUMNA IZQUIERDA (Sticky) */}
        <div 
          ref={sidebarRef}
          style={{ top: `${stickyTop}px` }}
          className="w-full lg:w-5/12 lg:sticky flex flex-col gap-8"
        >

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="The Rice"
              className="w-32 md:w-44 object-contain"
            />
            <div className="h-12 w-px bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Cocina</span>
              <span className="text-lg font-bold text-white">Coreana</span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="bg-[#e60000]/20 text-[#e60000] text-xs font-bold px-3 py-1 rounded-full border border-[#e60000]/30 uppercase tracking-wider">
                #1 en Rancagua
              </span>
            </div>
            
            <h1 className="font-[family-name:var(--font-poppins)] font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.05] uppercase tracking-tight">
              Street Food Coreano de Verdad
              <span className="inline-block ml-2">🇰🇷</span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-md">
              La energía de los callejones de <span className="text-white font-medium">Seúl</span> en el corazón de Rancagua. Sabores audaces, crujientes adictivos y picante que prende fuego.
            </p>
          </div>

          {/* Stats rápidas */}
          <div className="flex items-center gap-6 py-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">500+</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Pedidos/mes</span>
            </div>
            <div className="h-10 w-px bg-gray-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">4.9⭐</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Google</span>
            </div>
            <div className="h-10 w-px bg-gray-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">100%</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Auténtico</span>
            </div>
          </div>

          {/* Info Box Mejorado */}
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 sm:p-8 rounded-3xl border border-gray-800/50 shadow-2xl flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e60000]/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg">Retiro en Local</p>
                <p className="text-gray-400 text-sm">Mujica esq. Almarza #202, Rancagua</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e60000]/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🕒</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg">Horario</p>
                <p className="text-gray-400 text-sm">Martes a Domingo: 12:30 - 22:00</p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e60000]/10 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg">Métodos de Pago</p>
                <p className="text-gray-400 text-sm">Efectivo, Débito, Crédito, Transferencia</p>
              </div>
            </div>
          </div>

          {/* Review Rotativo */}
          <div className="bg-[#111]/50 p-5 rounded-2xl border border-gray-800/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">"</span>
              <div className="flex flex-col gap-2">
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  {REVIEWS[activeReview].text}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-xs">{"★".repeat(REVIEWS[activeReview].rating)}</span>
                  <span className="text-gray-500 text-xs">— {REVIEWS[activeReview].name}</span>
                </div>
              </div>
            </div>
            {/* Indicadores */}
            <div className="flex gap-1 mt-3 justify-center">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeReview ? "bg-[#e60000] w-4" : "bg-gray-700"}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Principal */}
          <button
            onClick={() => handleWhatsApp()}
            className="group bg-[#e60000] hover:bg-red-600 active:scale-[0.98] transition-all w-full py-5 px-6 text-xl font-[family-name:var(--font-poppins)] font-bold rounded-2xl shadow-[0_0_30px_rgba(230,0,0,0.3)] hover:shadow-[0_0_50px_rgba(230,0,0,0.5)] flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              PEDIR POR WHATSAPP
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          {/* Redes sociales */}
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://instagram.com/restauranttherice"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#111] hover:bg-[#e60000]/20 border border-gray-800 hover:border-[#e60000]/50 rounded-xl flex items-center justify-center transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#e60000] transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a
              href="https://www.tiktok.com/search?q=the%20rice%20restaurant%20rancagua&t=1772084999993"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#111] hover:bg-[#e60000]/20 border border-gray-800 hover:border-[#e60000]/50 rounded-xl flex items-center justify-center transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-[#e60000] transition-colors">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://maps.google.com/?q=The+Rice+Rancagua"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#111] hover:bg-[#e60000]/20 border border-gray-800 hover:border-[#e60000]/50 rounded-xl flex items-center justify-center transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#e60000] transition-colors"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </a>
          </div>

        </div>

        {/* COLUMNA DERECHA (Menú) */}
        <div className="w-full lg:w-7/12 flex flex-col gap-12 md:gap-16 pt-8 lg:pt-0">

          {/* Título de sección */}
          <div className="flex items-center gap-4">
            <h2 className="font-[family-name:var(--font-poppins)] font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Nuestro Menú
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>

          {MENU_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className="flex flex-col gap-5 group"
            >
              {/* Imagen */}
              <div className="w-full aspect-[4/3] relative bg-[#111] rounded-[1.5rem] overflow-hidden border border-white/5 group-hover:border-[#e60000]/20 transition-colors">
                {/* Tag */}
                {item.tag && (
                  <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {item.tag}
                  </div>
                )}
                
                {/* Imagen real */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Precio flotante */}
                <div className="absolute bottom-4 right-4 bg-[#e60000] text-white font-bold px-4 py-2 rounded-xl text-lg shadow-lg z-20">
                  {item.price}
                </div>
              </div>

              {/* Info del plato */}
              <div className="flex flex-col items-start gap-3 px-1">
                <div className="flex items-start justify-between w-full gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-poppins)] font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {item.name}
                      </h3>
                      {item.spiceLevel > 0 && <SpiceIndicator level={item.spiceLevel} />}
                    </div>
                    <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp(item.name)}
                  className="mt-1 bg-white/5 hover:bg-[#e60000] border border-white/10 hover:border-[#e60000] text-white font-bold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all group/btn"
                >
                  Pedir ahora
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>

              {/* Separador elegante */}
              {index < MENU_ITEMS.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent mt-6"></div>
              )}
            </div>
          ))}

          {/* Sección Promociones */}
          <div className="bg-gradient-to-br from-[#e60000]/10 to-[#e60000]/5 border border-[#e60000]/20 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              <h3 className="font-[family-name:var(--font-poppins)] font-black text-xl sm:text-2xl text-white uppercase">
                Combo The Rice
              </h3>
            </div>
            <p className="text-gray-300 text-base">
              Korean Fried Chicken + Tteokbokki + Bebida por solo <span className="text-[#e60000] font-bold text-xl">$12.990</span>
            </p>
            <p className="text-gray-500 text-sm">
              *Válido de Martes a Jueves. Menciona el combo al hacer tu pedido.
            </p>
          </div>

          {/* Footer */}
          <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-3xl p-8 lg:p-10 mt-8 flex flex-col gap-6">
            <h2 className="font-[family-name:var(--font-poppins)] font-black text-2xl sm:text-3xl uppercase tracking-tight text-white flex items-center gap-3">
              <span className="text-3xl">🍜</span>
              ¿Listo para probar?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-white font-medium">Ubicación</p>
                  <p className="text-gray-400 text-sm">Mujica esq. Almarza #202</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-400 text-sm">+56 9 9295 5614</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://instagram.com/restauranttherice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e60000] hover:text-red-400 font-bold transition-colors flex items-center gap-2 text-sm bg-[#e60000]/10 px-4 py-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                @restauranttherice
              </a>
              <a
                href="https://maps.google.com/?q=The+Rice+Rancagua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white font-medium transition-colors flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Ver en Google Maps
              </a>
            </div>

            <div className="w-full h-px bg-gray-800/50 mt-4"></div>
            <p className="text-gray-600 text-xs text-center">
              © 2026 The Rice Corea Restaurant. Todos los derechos reservados. Hecho con 🔥 en Chile.
            </p>
          </div>

        </div>

      </div>

      {/* Botón flotante móvil */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/95 to-transparent lg:hidden z-50">
        <button
          onClick={() => handleWhatsApp()}
          className="w-full bg-[#e60000] hover:bg-red-600 active:scale-[0.98] transition-all py-4 px-6 text-lg font-[family-name:var(--font-poppins)] font-bold rounded-2xl shadow-[0_0_30px_rgba(230,0,0,0.4)] flex items-center justify-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          HACER PEDIDO
        </button>
      </div>
    </main>
  );
}

