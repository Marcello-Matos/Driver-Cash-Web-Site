import { useEffect, useRef } from 'react'

export default function FinalCTA() {
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
    <section className="py-24 px-4 bg-[#0F172A] relative overflow-hidden">
      {/* Gradientes de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#22C55E]/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />
      </div>

      <div ref={ref} className="section-hidden relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[#22C55E] text-sm font-semibold">10.000+ motoristas já usam</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Pare de trabalhar no{' '}
          <span className="gradient-text">escuro.</span>
          <br />
          Comece a lucrar de verdade.
        </h2>

        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Junte-se a milhares de motoristas que já descobriram quanto realmente ganham
          e passaram a tomar decisões financeiras inteligentes com o Driver Cash.
        </p>

        {/* Prova social */}
        <div className="flex items-center justify-center gap-1 mb-8">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
          <span className="text-gray-300 text-sm ml-2 font-medium">4.9/5 — 2.847 avaliações</span>
        </div>

        {/* Botões de CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#16A34A] transition-all duration-200 shadow-xl shadow-[#22C55E]/30"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
            </svg>
            Começar gratuitamente agora
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 border border-[#22C55E] text-[#22C55E] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#22C55E]/10 transition-all duration-200"
          >
            Ver como funciona
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Grátis para sempre no plano básico · Cancele a qualquer momento · 7 dias de garantia Pro
        </p>
      </div>
    </section>
  )
}
