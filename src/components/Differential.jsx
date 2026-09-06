import { useEffect, useRef } from 'react'

export default function Differential() {
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
    <section className="py-20 px-4 bg-[#111827]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            O diferencial
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Da corrida ao <span className="gradient-text">lucro real</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Veja como o Driver Cash transforma números brutos em clareza financeira.
          </p>
        </div>

        <div ref={ref} className="section-hidden">
          {/* Calculation visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Faturamento */}
            <div className="flex-1 bg-[#1E293B] border border-[#3B82F6]/40 rounded-2xl p-6 text-center max-w-xs w-full">
              <div className="text-4xl mb-3">💰</div>
              <div className="text-sm text-gray-400 mb-1">Faturamento bruto</div>
              <div className="text-3xl font-black text-[#3B82F6]">R$ 3.200</div>
              <div className="text-xs text-gray-500 mt-2">Todas as plataformas</div>
            </div>

            {/* Minus */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-2xl font-black text-[#EF4444]">
                −
              </div>
            </div>

            {/* Despesas */}
            <div className="flex-1 bg-[#1E293B] border border-[#EF4444]/40 rounded-2xl p-6 text-center max-w-xs w-full">
              <div className="text-4xl mb-3">🧾</div>
              <div className="text-sm text-gray-400 mb-1">Total de despesas</div>
              <div className="text-3xl font-black text-[#EF4444]">R$ 1.050</div>
              <div className="mt-3 space-y-1 text-left">
                {[
                  { label: 'Combustível', value: 'R$ 640' },
                  { label: 'Manutenção', value: 'R$ 210' },
                  { label: 'Outros', value: 'R$ 200' },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between text-xs">
                    <span className="text-gray-400">{d.label}</span>
                    <span className="text-red-400">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equals */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-2xl font-black text-[#22C55E]">
                =
              </div>
            </div>

            {/* Lucro real */}
            <div className="flex-1 bg-[#1E293B] border border-[#22C55E]/60 rounded-2xl p-6 text-center max-w-xs w-full glow-green">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-sm text-gray-400 mb-1">Lucro real</div>
              <div className="text-3xl font-black text-[#22C55E]">R$ 2.150</div>
              <div className="mt-3 space-y-1 text-left">
                {[
                  { label: 'Margem', value: '67%' },
                  { label: 'Por hora', value: 'R$ 29,80' },
                  { label: 'Por km', value: 'R$ 0,42' },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between text-xs">
                    <span className="text-gray-400">{d.label}</span>
                    <span className="text-[#22C55E]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center mt-10">
            <p className="text-gray-400 text-lg">
              Esse nível de clareza financeira é o que o{' '}
              <strong className="text-white">Driver Cash</strong> entrega todo dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
