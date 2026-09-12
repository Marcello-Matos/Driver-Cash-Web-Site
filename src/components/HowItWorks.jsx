import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    icon: '🔗',
    title: 'Acesse o link',
    desc: 'Abra o navegador do seu celular (Chrome no Android ou Safari no iPhone) e acesse o link do Driver Cash.',
  },
  {
    num: '02',
    icon: '📲',
    title: 'Adicione à tela inicial',
    desc: 'No Android: toque em "Adicionar à tela inicial". No iPhone: toque em Compartilhar e depois "Adicionar à Tela de Início".',
  },
  {
    num: '03',
    icon: '🏠',
    title: 'Ícone salvo na área de trabalho',
    desc: 'Pronto! O ícone do Driver Cash aparece direto na tela do seu celular. Sem loja de aplicativo, sem instalação demorada.',
  },
  {
    num: '04',
    icon: '📊',
    title: 'Comece a controlar',
    desc: 'Registre seus ganhos e despesas e veja seu lucro real no dashboard. Funciona como um app, direto pelo navegador.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.step-card').forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('section-hidden')
              el.classList.add('section-visible')
            }, i * 150)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="como-funciona" className="py-20 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Simples de usar em <span className="gradient-text">qualquer celular</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sem precisar baixar pela App Store ou Google Play. Acesse pelo navegador e salve o ícone direto na tela do seu celular.
          </p>
        </div>

        {/* Selos de dispositivos */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 bg-[#1E293B] border border-[#2D3748] rounded-full px-5 py-2.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="2" width="14" height="20" rx="3" stroke="#22C55E" strokeWidth="1.5"/>
              <circle cx="12" cy="18" r="1" fill="#22C55E"/>
            </svg>
            <span className="text-sm font-semibold text-white">Android</span>
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">✓ Chrome</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1E293B] border border-[#2D3748] rounded-full px-5 py-2.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="2" width="14" height="20" rx="3" stroke="#22C55E" strokeWidth="1.5"/>
              <circle cx="12" cy="18" r="1" fill="#22C55E"/>
            </svg>
            <span className="text-sm font-semibold text-white">iPhone</span>
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">✓ Safari</span>
          </div>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="step-card section-hidden relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#22C55E]/30 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-[#1E293B] border border-[#2D3748] rounded-2xl p-6 h-full flex flex-col gap-4 hover:border-[#22C55E]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-4xl font-black text-[#22C55E]/20">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caixa de dica */}
        <div className="mt-10 bg-[#22C55E]/8 border border-[#22C55E]/25 rounded-2xl p-5 flex gap-4 items-start max-w-2xl mx-auto">
          <span className="text-2xl mt-0.5">💡</span>
          <div>
            <p className="text-sm font-semibold text-green-400 mb-1">Dica rápida</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Depois de salvo na tela inicial, o Driver Cash abre igualzinho a um aplicativo — sem barra de endereço, em tela cheia, e funciona mesmo com conexão lenta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
