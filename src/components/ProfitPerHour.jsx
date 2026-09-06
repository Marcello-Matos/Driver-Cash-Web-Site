import { useEffect, useRef } from 'react'

export default function ProfitPerHour() {
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Lucro por hora
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Quanto você <span className="gradient-text">realmente ganha</span> por hora?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Saber o lucro por hora é a métrica mais importante para qualquer motorista profissional. Veja como calculamos:
          </p>
        </div>

        <div ref={ref} className="section-hidden grid md:grid-cols-2 gap-8 items-center">
          {/* Formula card */}
          <div className="bg-[#1E293B] border border-[#2D3748] rounded-2xl p-8 space-y-5">
            <h3 className="text-lg font-bold text-white">Exemplo real de cálculo</h3>

            <div className="space-y-3">
              {[
                { step: '1', label: 'Você faturou hoje', value: 'R$ 420,00', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
                { step: '2', label: 'Suas despesas foram', value: '- R$ 110,00', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
                { step: '3', label: 'Horas trabalhadas', value: '9h', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
              ].map((item) => (
                <div key={item.step} className={`flex items-center justify-between ${item.bg} border ${item.border} rounded-xl p-3`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full ${item.bg} border ${item.border} ${item.color} text-xs font-bold flex items-center justify-center`}>
                      {item.step}
                    </span>
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </div>
                  <span className={`font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-[#2D3748]" />

            <div className="bg-[#22C55E]/10 border border-[#22C55E]/40 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Seu lucro por hora</p>
                <p className="text-sm text-gray-300">(R$420 - R$110) ÷ 9h</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-[#22C55E]">R$ 34,44</p>
                <p className="text-xs text-green-400">por hora</p>
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Por que isso importa?</h3>
              <p className="text-gray-400 leading-relaxed">
                Muitos motoristas trabalham mais horas achando que estão ganhando mais, mas na verdade
                estão aumentando despesas sem melhorar o lucro por hora.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: '📅', title: 'Planeje melhor seu dia', desc: 'Saiba quais horários são mais lucrativos.' },
                { icon: '💡', title: 'Reduza despesas', desc: 'Veja onde estão os buracos do seu orçamento.' },
                { icon: '🏁', title: 'Trabalhe menos, ganhe mais', desc: 'Otimize rotas e horários para maximizar lucro.' },
              ].map((tip) => (
                <div key={tip.title} className="flex gap-4 bg-[#1E293B] border border-[#2D3748] rounded-xl p-4">
                  <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm">{tip.title}</p>
                    <p className="text-gray-400 text-sm">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
