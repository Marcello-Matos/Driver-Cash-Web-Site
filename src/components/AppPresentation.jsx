import { useEffect, useRef } from 'react'

function AppScreenMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-[#22C55E]/15 blur-3xl" />
      </div>
      <div className="relative w-64 bg-[#0F172A] rounded-[2rem] border-[3px] border-[#2D3748] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0F172A] rounded-b-xl z-10" />
        <div className="pt-7 px-3 pb-5 space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] text-gray-400">9:41</span>
            <span className="text-[10px] text-[#22C55E] font-bold">Driver Cash</span>
            <span className="text-[10px] text-gray-400">●●●</span>
          </div>

          {/* Abas de navega
          <div className="flex gap-1 bg-[#111827] rounded-xl p-1">
            {['Hoje','Semana','Mês'].map((t, i) => (
              <button
                key={t}
                className={`flex-1 text-[9px] font-semibold py-1.5 rounded-lg transition-colors ${
                  i === 1 ? 'bg-[#22C55E] text-black' : 'text-gray-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Número de destaque */}
          <div className="bg-[#1E293B] rounded-2xl p-4 border border-[#2D3748] text-center">
            <p className="text-[9px] text-gray-400 mb-1">Lucro líquido — Esta semana</p>
            <p className="text-2xl font-black text-[#22C55E]">R$ 1.847</p>
            <p className="text-[9px] text-green-400 mt-1">+23% vs semana passada</p>
          </div>

          {/* 3 linhas */}
          {[
            { icon: '📈', label: 'Faturamento', value: 'R$ 2.680', color: 'text-blue-400' },
            { icon: '📉', label: 'Despesas', value: 'R$ 833', color: 'text-red-400' },
            { icon: '⏱️', label: 'Lucro/hora', value: 'R$ 28,50', color: 'text-[#22C55E]' },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between bg-[#1E293B] rounded-xl px-3 py-2.5 border border-[#2D3748]">
              <div className="flex items-center gap-2">
                <span className="text-sm">{r.icon}</span>
                <span className="text-[10px] text-gray-300">{r.label}</span>
              </div>
              <span className={`text-[11px] font-bold ${r.color}`}>{r.value}</span>
            </div>
          ))}

          {/* Plataformas */}
          <div className="bg-[#1E293B] rounded-xl p-3 border border-[#2D3748]">
            <p className="text-[9px] text-gray-400 mb-2">Por plataforma</p>
            <div className="space-y-1.5">
              {[
                { label: 'Uber', pct: 60, color: 'bg-blue-500' },
                { label: '99', pct: 30, color: 'bg-yellow-500' },
                { label: 'inDrive', pct: 10, color: 'bg-green-500' },
              ].map((pl) => (
                <div key={pl.label} className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400 w-10">{pl.label}</span>
                  <div className="flex-1 h-1 bg-[#2D3748] rounded-full overflow-hidden">
                    <div className={`h-full ${pl.color} rounded-full`} style={{ width: `${pl.pct}%` }} />
                  </div>
                  <span className="text-[9px] text-gray-400">{pl.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
          {/* Esquerda: mockup */}
          <AppScreenMockup />

          {/* Direita: texto */}
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
