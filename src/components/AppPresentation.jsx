import { useEffect, useRef } from 'react'
import motoristaFoto from '../assets/imagem_carro.png'

export default function AppPresentation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.remove('section-hidden')
          ref.current?.classList.add('section-visible')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div ref={ref} className="section-hidden max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: mockup */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-[#22C55E]/15 blur-3xl" />
            </div>
            <img
              src={motoristaFoto}
              alt="Motorista profissional sorrindo ao volante"
              className="foto-motorista relative w-full max-w-sm rounded-[2rem] border-[3px] border-[#2D3748] shadow-2xl object-cover aspect-[4/5]"
            />
          </div>

          {/* Right: text */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
              Conheça o Driver Cash
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              O aplicativo feito para{' '}
              <span className="gradient-text">motoristas profissionais</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Driver Cash transforma dados brutos em decisões inteligentes. Registre suas corridas,
              categorize despesas e veja seu lucro real em tempo real — de qualquer plataforma.
            </p>
            <ul className="space-y-3">
              {[
                'Compatível com Uber, 99, inDrive e outros',
                'Relatórios diários, semanais e mensais',
                'Lucro por hora calculado automaticamente',
                'Alertas quando você está abaixo da meta',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#22C55E] flex-shrink-0">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-[#22C55E] text-black font-bold px-7 py-3.5 rounded-xl hover:bg-[#16A34A] transition-colors"
            >
              Experimentar grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
