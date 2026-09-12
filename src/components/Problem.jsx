import { useEffect, useRef } from 'react'

const problems = [
  {
    icon: '⛽',
    title: 'Combustível',
    desc: 'O maior vilão do motorista. Sem controle, você pode gastar mais do que imagina por quilômetro rodado.',
    color: 'border-orange-500/30 bg-orange-500/5',
    badge: 'text-orange-400 bg-orange-500/10',
  },
  {
    icon: '🔧',
    title: 'Manutenção',
    desc: 'Troca de óleo, pneus, freios... o carro precisa de cuidados constantes que corroem seus ganhos.',
    color: 'border-yellow-500/30 bg-yellow-500/5',
    badge: 'text-yellow-400 bg-yellow-500/10',
  },
  {
    icon: '💳',
    title: 'Outros Custos',
    desc: 'Internet, alimentação, estacionamento, lavagem... despesas invisíveis que somam no fim do mês.',
    color: 'border-blue-500/30 bg-blue-500/5',
    badge: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: '💰',
    title: 'Lucro Real',
    desc: 'Depois de tudo isso, quanto sobrou? Sem um sistema de controle, é impossível saber com precisão.',
    color: 'border-[#22C55E]/30 bg-[#22C55E]/5',
    badge: 'text-[#22C55E] bg-[#22C55E]/10',
  },
]

export default function Problem() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.anim-card').forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('section-hidden')
              el.classList.add('section-visible')
            }, i * 120)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="beneficios" className="py-20 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            O problema
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Onde seu dinheiro está <span className="gradient-text">sumindo?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A maioria dos motoristas não sabe o quanto realmente ganha porque não rastreia esses custos ocultos.
          </p>
        </div>

        {/* Cartões */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`anim-card section-hidden rounded-2xl p-6 border ${p.color} flex flex-col gap-4`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${p.badge}`}>
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
