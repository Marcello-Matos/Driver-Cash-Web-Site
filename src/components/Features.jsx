import { useEffect, useRef } from 'react'

const features = [
  { icon: '📊', title: 'Dashboard completo', desc: 'Visão geral dos seus ganhos e despesas em tempo real com gráficos interativos.' },
  { icon: '⛽', title: 'Controle de combustível', desc: 'Registre abastecimentos e calcule o custo exato por quilômetro rodado.' },
  { icon: '🔧', title: 'Gestão de manutenção', desc: 'Acompanhe revisões, troca de óleo e peças com alertas automáticos.' },
  { icon: '📈', title: 'Relatórios detalhados', desc: 'Histórico mensal, semanal e diário exportável em PDF ou planilha.' },
  { icon: '🎯', title: 'Metas financeiras', desc: 'Defina quanto quer ganhar por dia ou semana e acompanhe o progresso.' },
  { icon: '⏱️', title: 'Lucro por hora', desc: 'Descubra seu salário real calculando receita líquida por hora trabalhada.' },
  { icon: '🚗', title: 'Multi-plataforma', desc: 'Registre corridas do Uber, 99, inDrive e qualquer outro app numa só tela.' },
  { icon: '🔔', title: 'Alertas inteligentes', desc: 'Notificações quando seus gastos estão altos ou a meta diária está em risco.' },
]

export default function Features() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.feat-card').forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('section-hidden')
              el.classList.add('section-visible')
            }, i * 80)
          })
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="recursos" className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Tudo que você precisa para{' '}
            <span className="gradient-text">lucrar mais</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ferramentas poderosas pensadas especialmente para a realidade do motorista de aplicativo.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="feat-card section-hidden bg-[#1E293B] border border-[#2D3748] rounded-2xl p-6 hover:border-[#22C55E]/40 hover:bg-[#1E293B]/80 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#22C55E]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
