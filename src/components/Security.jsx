import { useEffect, useRef } from 'react'

const trustItems = [
  { icon: '🔒', title: 'Dados criptografados', desc: 'Todas suas informações são protegidas com criptografia de ponta a ponta.' },
  { icon: '☁️', title: 'Backup automático', desc: 'Seus dados ficam seguros na nuvem. Troque de celular sem perder nada.' },
  { icon: '🚫', title: 'Sem acesso bancário', desc: 'Não pedimos acesso à sua conta bancária. Você insere manualmente.' },
  { icon: '🛡️', title: 'Privacidade garantida', desc: 'Nunca vendemos ou compartilhamos seus dados com terceiros.' },
]

export default function Security() {
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
            Segurança e confiança
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Seus dados estão <span className="gradient-text">100% seguros</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Construímos o Driver Cash com segurança em primeiro lugar. Sua privacidade é sagrada para nós.
          </p>
        </div>

        <div ref={ref} className="section-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {trustItems.map((item) => (
              <div key={item.title} className="bg-[#1E293B] border border-[#2D3748] rounded-2xl p-6 text-center hover:border-[#22C55E]/30 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Selos de confiança */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'SSL/TLS', sub: 'Conexão segura' },
              { label: 'AES-256', sub: 'Criptografia' },
              { label: 'LGPD', sub: 'Conformidade' },
              { label: '99.9%', sub: 'Uptime' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 bg-[#1E293B] border border-[#2D3748] rounded-xl px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <div>
                  <p className="text-xs font-bold text-white">{badge.label}</p>
                  <p className="text-[10px] text-gray-400">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
