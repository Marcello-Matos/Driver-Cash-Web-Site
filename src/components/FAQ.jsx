import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'Driver Cash é realmente gratuito?',
    a: 'Sim! O plano Gratuito é 100% grátis para sempre, com funcionalidades básicas de controle financeiro. O plano Pro adiciona recursos avançados por R$ 19,90/mês.',
  },
  {
    q: 'Funciona com Uber, 99 e inDrive ao mesmo tempo?',
    a: 'Sim! Você pode registrar corridas de qualquer plataforma e o Driver Cash consolida tudo em um único painel, mostrando desempenho por plataforma e geral.',
  },
  {
    q: 'Preciso conectar minha conta bancária?',
    a: 'Não. O Driver Cash não solicita acesso a contas bancárias. Você registra seus ganhos e despesas manualmente, garantindo total privacidade e controle.',
  },
  {
    q: 'Como funciona o cálculo de lucro por hora?',
    a: 'Você informa o total faturado no dia e as horas trabalhadas. O app subtrai automaticamente todas as despesas registradas e divide pelo tempo, mostrando seu salário real por hora.',
  },
  {
    q: 'Posso exportar os relatórios?',
    a: 'No plano Pro, sim! Você pode exportar relatórios em PDF para acompanhar sua evolução, compartilhar com contadores ou usar para planejamento fiscal.',
  },
  {
    q: 'O que acontece se eu cancelar o plano Pro?',
    a: 'Ao cancelar, você mantém acesso até o fim do período pago. Depois, sua conta volta ao plano Gratuito automaticamente. Seus dados ficam salvos por 90 dias.',
  },
  {
    q: 'Tenho direito à garantia de 7 dias?',
    a: 'Sim! Qualquer novo assinante do plano Pro tem 7 dias para experimentar. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do valor pago, sem perguntas.',
  },
]

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border border-[#2D3748] rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1E293B]/50 transition-colors"
      >
        <span className="font-semibold text-white pr-4">{item.q}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 text-[#22C55E] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-5 pb-5 text-gray-400 leading-relaxed">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
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
    <section id="faq" className="py-20 px-4 bg-[#111827]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Não encontrou o que procura? Entre em contato pelo suporte.
          </p>
        </div>

        <div ref={ref} className="section-hidden space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
