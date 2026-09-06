import { useEffect, useRef } from 'react'

const profiles = [
  {
    icon: '🚗',
    title: 'Motorista em tempo integral',
    desc: 'Para quem vive das corridas e precisa de controle financeiro total para sustentar família e pagar contas com tranquilidade.',
  },
  {
    icon: '🌙',
    title: 'Motorista de fim de semana',
    desc: 'Complementa a renda fazendo corridas nas folgas. Quer saber se vale a pena cada saída e maximizar o tempo disponível.',
  },
  {
    icon: '📱',
    title: 'Multi-plataforma',
    desc: 'Trabalha no Uber, 99 e inDrive ao mesmo tempo e precisa consolidar tudo em um só lugar para ter visão clara.',
  },
  {
    icon: '🏆',
    title: 'Motorista focado em crescer',
    desc: 'Tem metas de poupança, quer comprar um carro melhor ou montar reserva de emergência. Controle é o primeiro passo.',
  },
  {
    icon: '🔍',
    title: 'Motorista curioso com dados',
    desc: 'Quer entender seu desempenho com profundidade: custo por km, lucro por hora, horários mais rentáveis.',
  },
]

export default function ForWho() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.profile-card').forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('section-hidden')
              el.classList.add('section-visible')
            }, i * 100)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Para quem é
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Driver Cash é para <span className="gradient-text">você?</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Qualquer motorista de aplicativo que queira ter controle real das finanças vai se identificar.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div
              key={p.title}
              className={`profile-card section-hidden bg-[#1E293B] border border-[#2D3748] rounded-2xl p-6 hover:border-[#22C55E]/40 transition-colors ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center text-3xl mb-5">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 bg-[#22C55E] text-black font-bold px-8 py-3.5 rounded-xl hover:bg-[#16A34A] transition-colors"
          >
            Eu me identifico — quero começar!
          </a>
        </div>
      </div>
    </section>
  )
}
