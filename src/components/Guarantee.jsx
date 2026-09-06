import { useEffect, useRef } from 'react'

export default function Guarantee() {
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
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className="section-hidden bg-[#1E293B] border border-[#22C55E]/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-[#22C55E]/5 blur-3xl" />
          </div>

          <div className="relative">
            {/* Shield icon */}
            <div className="w-20 h-20 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-[#22C55E]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.993 11.993 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
            </div>

            <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Garantia
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Garantia de <span className="gradient-text">7 dias</span> — sem perguntas
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Experimente o Driver Cash Pro por 7 dias. Se por qualquer motivo você não estiver satisfeito,
              devolvemos 100% do seu dinheiro. Sem burocracia, sem questionamentos.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '💳', title: 'Reembolso total', desc: 'Devolução em até 5 dias úteis' },
                { icon: '📞', title: 'Suporte humano', desc: 'Fale com nossa equipe a qualquer hora' },
                { icon: '🔓', title: 'Cancele quando quiser', desc: 'Sem fidelidade ou multa de cancelamento' },
              ].map((item) => (
                <div key={item.title} className="bg-[#111827] rounded-xl p-4 border border-[#2D3748]">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-[#22C55E] text-black font-bold px-8 py-3.5 rounded-xl hover:bg-[#16A34A] transition-colors shadow-lg shadow-[#22C55E]/20"
            >
              Começar com garantia total
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
