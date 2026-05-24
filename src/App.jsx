import React, {useState} from 'react';

function App() {
  // Data sementara menggunakan array of objects sesuai ketentuan tugas
const [currentSlide, setCurrentSlide] = useState(0);

const skills = [
    { name: "Database Engineering", category: "Database" },
    { name: "Cisco", category: "Networking" },
    { name: "Cyber Security", category: "Security" }
  ];

  const projects = [
    {
      title: "Wi-Fi Latency Analysis Tool",
      description: "Aplikasi analisis statistik untuk menguji dan memetakan performa latensi jaringan Wi-Fi kampus menggunakan parameter standard deviation dan Z-score.",
      tech: ["Python", "Networking", "Statistics"],
      type: "Research & Tools"
    },
    {
      title: "Sleep Well - UI/UX Concept",
      description: "Rancangan proposal desain aplikasi interaktif yang bertujuan untuk membantu pengguna memperbaiki dan menormalkan siklus jam tidur mereka.",
      tech: ["UI/UX", "Figma", "Prototyping"],
      type: "Design Project"
    },
    {
      title: "Windows Form Application",
      description: "Pengembangan aplikasi desktop interaktif dan fungsional menggunakan antarmuka Windows Forms berbasis bahasa pemrograman C#.",
      tech: ["C#", "Windows Forms", "Desktop"],
      type: "Software Development"
    }
  ];

  const photographyWork = [
    
    {
      title: "The Walking Meme",
      category: "Prom Night",
      image: "/images/Prom.jpeg"
    },
    {
      title: "Destarossa",
      category: "Portraits",
      image: "/images/Destarossa.jpeg"
    },
    {
      title: "Reality Club - Kittendust",
      category: "ALZ Fest 2023",
      image: "/images/Kittendust.jpeg"
    },
    {
      title: "Reality Club - Faiz",
      category: "ALZ Fest 2023",
      image: "/images/SpriteFaiz.jpeg"
    }
  ];

  // --- FUNGSI NAVIGASI SLIDER ---
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === photographyWork.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? photographyWork.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Bagas Satya Widhi
          </h1>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projek</a>
            <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header id="about" className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            Information Technology Student
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Bagas Widhi</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Seorang mahasiswa Teknologi Informasi yang berfokus pada pengembangan perangkat lunak, infrastruktur jaringan, dan eksplorasi teknologi modern. Senang memecahkan masalah dan membangun solusi digital yang efisien.
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20">
              Lihat Projek
            </a>
            <a href="mailto:contact@example.com" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium rounded-xl border border-slate-800 transition-all">
              Hubungi Saya
            </a>
          </div>
        </div>
{/* Bagian Foto Profil dengan Efek Hover Baru */}
        <div className="flex-1 flex justify-center relative group">
          {/* Efek Blur Latar Belakang (Tetap) */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 blur-3xl z-0 transition-opacity duration-500 group-hover:opacity-30"></div>
          
          {/* ✅ KONTENER FOTO PROFIL DENGAN EFEK HOVER (LIFT & GLOW) */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl relative overflow-hidden z-10 
                        transition-all duration-500 ease-out 
                        group-hover:-translate-y-4 group-hover:scale-[1.02] 
                        group-hover:border-blue-500 group-hover:shadow-blue-500/30">
            <img src="/Pribadi.jpg" alt="Bagas Satya" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </header>

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h3 className="text-3xl font-bold tracking-tight">Keahlian Tech Stack</h3>
          <p className="text-slate-400 text-sm">Teknologi dan tools yang sering saya gunakan dalam proyek akademik maupun eksperimen pribadi.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl hover:border-slate-700 transition-all flex justify-between items-center group">
              <span className="font-medium group-hover:text-blue-400 transition-colors">{skill.name}</span>
              <span className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded-md">{skill.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <h3 className="text-3xl font-bold tracking-tight">Projek Pilihan</h3>
          <p className="text-slate-400 text-sm">Beberapa hasil kerja praktikum, penelitian kecil, dan konsep desain yang telah saya selesaikan.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-slate-900/20 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <div className="p-6 flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-900 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded-md">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* 5. gallery / PHOTOGRAPHY SECTION (DIUBAH MENJADI SLIDER) */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h3 className="text-3xl font-bold tracking-tight">Gallery</h3>
        </div>
        
        {/* Kontainer Slider */}
        <div className="max-w-4xl mx-auto relative group">
          
          {/* Tampilan Gambar (Image Display) */}
          <div className="w-full h-72 md:h-[500px] rounded-2xl overflow-hidden relative border border-slate-800 shadow-2xl bg-slate-900">
            {photographyWork.map((photo, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop";
                  }}
                />
                {/* Overlay Kaca (Glassmorphism Overlay) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 md:p-10 pt-20">
                  <span className="text-xs font-bold text-blue-400 tracking-wider uppercase mb-2 block">{photo.category}</span>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Panah Kiri */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-900/50 hover:bg-blue-600 backdrop-blur-md text-white border border-slate-700 hover:border-blue-500 transition-all opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Tombol Panah Kanan */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-900/50 hover:bg-blue-600 backdrop-blur-md text-white border border-slate-700 hover:border-blue-500 transition-all opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Navigasi Titik (Dots Indicators) */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {photographyWork.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-blue-500 w-8" 
                    : "bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
      {/* 6. FOOTER */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Bagas Widhi. Dibuat menggunakan React, Vite, dan Tailwind CSS.</p>
      </footer>

    </div>
  );
}

export default App;