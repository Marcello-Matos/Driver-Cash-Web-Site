import { useEffect, useRef } from 'react'

const rows = [
  { label: 'Controle de faturamento', without: false, with: true },
  { label: 'Registro de despesas por categoria', without: false, with: true },
  { label: 'Cálculo automático de lucro real', without: false, with: true },
  { label: 'Lucro por hora trabalhada', without: false, with: true },
  { label: 'Relatórios semanais e mensais', without: false, with: true },
  { label: 'Metas financeiras personalizadas', without: false, with: true },
  { label: 'Alertas de gastos excessivos', without: false, with: true },
  { label: 'Comparativo multi-plataforma', without: false, with: true },
  { label: 'Custo por quilômetro rodado', without: false, with: true },
  { label: 'Decisões financeiras baseadas em dados', without: false, with: true },
]

export default function Comparison() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.remove('section-hidden')
          ref.current?.classList.add('section-visible')
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Com ou sem <span className="gradient-text">Driver Cash?</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Veja a diferença real entre dirigir no escuro ou com controle total das finanças.
          </p>
        </div>

        <div ref={ref} className="section-hidden bg-[#1E293B] border border-[#2D3748] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#111827] border-b border-[#2D3748]">
            <div className="p-4 text-sm text-gray-400 font-medium">Funcionalidade</div>
            <div className="p-4 text-center border-x border-[#2D3748]">
              <span className="text-sm font-bold text-red-400">Sem Driver Cash</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-sm font-bold text-[#22C55E]">Com Driver Cash</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-[#2D3748] last:border-0 ${
                i % 2 === 0 ? '' : 'bg-[#111827]/40'
              }`}
            >
              <div className="p-4 text-sm text-gray-300 flex items-center">{row.label}</div>
              <div className="p-4 flex items-center justify-center border-x border-[#2D3748]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="p-4 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#22C55E]">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
