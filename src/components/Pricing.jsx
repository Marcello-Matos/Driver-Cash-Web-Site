import { useEffect, useRef } from 'react'

const plans = [
  {
    name: 'Gratuito',
    price: 'R$ 0',
    period: 'para sempre',
    desc: 'Para começar a ter controle financeiro sem pagar nada.',
    cta: 'Começar grátis',
    ctaStyle: 'border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E]/10',
    features: [
      'Dashboard básico',
      'Registro manual de corridas',
      'Controle de até 3 despesas/dia',
      'Relatório semanal simples',
      'Meta diária',
    ],
    notIncluded: ['Relatórios avançados', 'Lucro por hora', 'Exportar PDF', 'Suporte prioritário'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'R$ 19,90',
    period: 'por mês',
    desc: 'Para motoristas sérios que querem controle total e dados detalhados.',
    cta: 'Assinar Pro',
    ctaStyle: 'bg-[#22C55E] text-black hover:bg-[#16A34A] shadow-lg shadow-[#22C55E]/25',
    badge: 'Mais popular',
    features: [
      'Tudo do Gratuito',
      'Despesas ilimitadas',
      'Lucro por hora automático',
      'Relatórios PDF exportáveis',
      'Multi-plataforma (Uber, 99, inDrive)',
      'Histórico de 12 meses',
      'Metas semanais e mensais',
      'Suporte prioritário',
    ],
    notIncluded: [],
    highlight: true,
  },
  {
    name: 'Anual',
    price: 'R$ 149,90',
    period: 'por ano',
    oldPrice: 'R$ 238,80',
    saving: 'Economize R$ 89',
    desc: 'Tudo do Pro com o melhor custo-benefício — pague menos, ganhe mais.',
    cta: 'Assinar Anual',
    ctaStyle: 'bg-[#22C55E] text-black hover:bg-[#16A34A]',
    features: [
      'Tudo do Pro',
      'Histórico ilimitado',
      'Análise de tendências anuais',
      'Alertas inteligentes avançados',
      'Suporte VIP',
    ],
    notIncluded: [],
    highlight: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.price-card').forEach((el, i) => {
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
    <section id="planos" className="py-20 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Escolha o plano <span className="gradient-text">certo para você</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Comece grátis e faça upgrade quando quiser. Cancele a qualquer momento.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`price-card section-hidden relative rounded-2xl p-7 flex flex-col gap-5 ${
                plan.highlight
                  ? 'bg-[#1E293B] border-2 border-[#22C55E] shadow-xl shadow-[#22C55E]/10'
                  : 'bg-[#1E293B] border border-[#2D3748]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#22C55E] text-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.desc}</p>
              </div>

              <div>
                {plan.oldPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500 line-through">{plan.oldPrice}</span>
                    <span className="text-xs bg-[#22C55E]/20 text-[#22C55E] px-2 py-0.5 rounded-full font-semibold">
                      {plan.saving}
                    </span>
                  </div>
                )}
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                </div>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>

              {plan.name === 'Gratuito' ? (
                <a
                  href="#faq"
                  className={`block text-center font-bold px-5 py-3 rounded-xl transition-all duration-200 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  onClick={() => window.open(
                    plan.name === 'Pro'
                      ? 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=be7b89bf048745a592101cdde7223bf4'
                      : 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=ba0e78feb7834fb1a2c48d7ac5f99354',
                    '_blank'
                  )}
                  className={`block w-full text-center font-bold px-5 py-3 rounded-xl transition-all duration-200 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </button>
              )}

              <div className="h-px bg-[#2D3748]" />

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-500">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Todos os planos incluem 7 dias de teste grátis do Pro. Sem cartão de crédito necessário.
        </p>
      </div>
    </section>
  )
}
