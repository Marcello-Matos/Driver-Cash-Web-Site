import { useEffect, useRef, useState } from 'react'

const goals = [
  { label: 'Meta diária', target: 'R$ 420', current: 'R$ 310', pct: 73, color: 'from-[#22C55E] to-[#4ADE80]' },
  { label: 'Meta semanal', target: 'R$ 2.000', current: 'R$ 1.450', pct: 72, color: 'from-[#3B82F6] to-[#60A5FA]' },
  { label: 'Meta mensal', target: 'R$ 7.500', current: 'R$ 5.200', pct: 69, color: 'from-[#F59E0B] to-[#FCD34D]' },
]

function ProgressBar({ pct, color, animated }) {
  return (
    <div className="h-3 bg-[#2D3748] rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1500 ease-out`}
        style={{ width: animated ? `${pct}%` : '0%' }}
      />
    </div>
  )
}

export default function Goals() {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.remove('section-hidden')
          ref.current?.classList.add('section-visible')
          setTimeout(() => setAnimated(true), 300)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-[#111827]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Metas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Defina e <span className="gradient-text">alcance suas metas</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Estabeleça quanto quer ganhar por dia, semana ou mês. Acompanhe o progresso em tempo real.
          </p>
        </div>

        <div ref={ref} className="section-hidden grid md:grid-cols-2 gap-8 items-start">
          {/* Lista de metas */}
          <div className="space-y-5">
            {goals.map((g) => (
              <div key={g.label} className="bg-[#1E293B] border border-[#2D3748] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-400">{g.label}</p>
                    <p className="text-sm font-semibold text-white">
                      <span className="text-[#22C55E]">{g.current}</span>
                      <span className="text-gray-500"> / {g.target}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white">{g.pct}%</span>
                    <p className="text-xs text-gray-400">concluído</p>
                  </div>
                </div>
                <ProgressBar pct={g.pct} color={g.color} animated={animated} />
              </div>
            ))}
          </div>

          {/* Dicas de metas */}
          <div className="bg-[#1E293B] border border-[#2D3748] rounded-2xl p-8 space-y-6">
            <div className="w-16 h-16 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center text-4xl">
              🎯
            </div>
            <h3 className="text-xl font-bold text-white">Metas inteligentes</h3>
            <p className="text-gray-400 leading-relaxed">
              O Driver Cash analisa seu histórico e sugere metas realistas baseadas no seu desempenho atual.
              Você sempre sabe se está no caminho certo.
            </p>
            <ul className="space-y-3">
              {[
                'Notificação quando bater a meta',
                'Comparativo com semanas anteriores',
                'Sugestão de rotas mais lucrativas',
                'Histórico de desempenho mensal',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#22C55E] flex-shrink-0">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
