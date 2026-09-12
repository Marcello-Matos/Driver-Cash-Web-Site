import { useEffect, useRef, useState } from 'react'

const PCT = String.fromCharCode(37)

function AnimatedStat({ prefix = '', value, decimals = 0, suffix = '', delay = 0, label }) {
  const [display, setDisplay] = useState((0).toFixed(decimals))

  useEffect(() => {
    let raf
    const start = performance.now() + delay
    const tick = (now) => {
      const t = Math.min(Math.max((now - start) / 1400, 0), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay((value * eased).toFixed(decimals))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, decimals, delay])

  return (
    <div className='text-center'>
      <div className='text-xl font-extrabold text-[#22C55E]'>
        {prefix}{display}{suffix}
      </div>
      <div className='text-xs text-gray-400'>{label}</div>
    </div>
  )
}

function DashboardMockup() {
  const [barsOn, setBarsOn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBarsOn(true), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-72 h-72 rounded-full bg-[#22C55E]/20 blur-3xl animate-glow-pulse' />
      </div>

      <div className='relative w-72 md:w-80 bg-[#0F172A] rounded-[2.5rem] border-[3px] border-[#2D3748] shadow-2xl overflow-hidden animate-float'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0F172A] rounded-b-2xl z-10 flex items-center justify-center'>
          <div className='w-12 h-1.5 bg-[#2D3748] rounded-full' />
        </div>

        <div className='pt-8 px-4 pb-6 space-y-3'>
          <div className='flex items-center justify-between text-xs text-gray-400 px-1 pt-1'>
            <span>9:41</span>
            <span className='text-[#22C55E] font-semibold'>Driver Cash</span>
            <span>●●●</span>
          </div>

          <div className='bg-[#1E293B] rounded-2xl p-4 border border-[#2D3748]'>
            <div className='flex items-center justify-between mb-1'>
              <span className='text-xs text-gray-400'>Hoje, 06 Set</span>
              <span className='text-xs bg-[#22C55E]/20 text-[#22C55E] px-2 py-0.5 rounded-full font-medium'>Ativo</span>
            </div>
            <p className='text-lg font-bold text-white'>Olá, Motorista!</p>
            <p className='text-xs text-gray-400'>Seu painel financeiro</p>
          </div>

          <div className='grid grid-cols-3 gap-2'>
            <div className='bg-[#1E293B] rounded-xl p-2.5 border border-[#3B82F6]/30'>
              <div className='text-[9px] text-gray-400 mb-1'>Faturamento</div>
              <div className='text-sm font-bold text-[#3B82F6]'>R$420</div>
              <div className='flex items-center gap-0.5 mt-1'>
                <svg viewBox='0 0 8 8' className='w-2 h-2 fill-[#3B82F6]'><path d='M4 0l4 8H0z'/></svg>
                <span className='text-[8px] text-[#3B82F6]'>+12%</span>
              </div>
            </div>
            <div className='bg-[#1E293B] rounded-xl p-2.5 border border-[#EF4444]/30'>
              <div className='text-[9px] text-gray-400 mb-1'>Despesas</div>
              <div className='text-sm font-bold text-[#EF4444]'>R$110</div>
              <div className='flex items-center gap-0.5 mt-1'>
                <svg viewBox='0 0 8 8' className='w-2 h-2 fill-[#EF4444] rotate-180'><path d='M4 0l4 8H0z'/></svg>
                <span className='text-[8px] text-[#EF4444]'>-5%</span>
              </div>
            </div>
            <div className='bg-[#1E293B] rounded-xl p-2.5 border border-[#22C55E]/30'>
              <div className='text-[9px] text-gray-400 mb-1'>Lucro</div>
              <div className='text-sm font-bold text-[#22C55E]'>R$310</div>
              <div className='flex items-center gap-0.5 mt-1'>
                <svg viewBox='0 0 8 8' className='w-2 h-2 fill-[#22C55E]'><path d='M4 0l4 8H0z'/></svg>
                <span className='text-[8px] text-[#22C55E]'>+8%</span>
              </div>
            </div>
          </div>


          <div className='bg-[#1E293B] rounded-2xl p-3 border border-[#2D3748]'>
            <div className='flex items-center justify-between mb-3'>
              <span className='text-xs font-semibold text-white'>Ganhos da semana</span>
              <span className='text-[10px] text-[#22C55E]'>Ver tudo</span>
            </div>
            <div className='flex items-end gap-1.5 h-16'>
              {[40, 65, 50, 80, 55, 75, 90].map((h, i) => (
                <div key={i} className='flex-1 flex flex-col items-center gap-0.5'>
                  <div
                    className='w-full rounded-t-sm'
                    style={{
                      height: h + PCT,
                      background: i === 6 ? 'linear-gradient(to top, #16A34A, #22C55E)' : 'rgba(34,197,94,0.3)',
                      transform: barsOn ? 'scaleY(1)' : 'scaleY(0)',
                      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ' + i * 70 + 'ms',
                    }}
                  />
                  <span className='text-[7px] text-gray-500'>
                    {['S','T','Q','Q','S','S','D'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className='bg-[#1E293B] rounded-2xl p-3 border border-[#2D3748]'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-xs text-gray-300'>Meta diária</span>
              <span className='text-xs font-bold text-[#22C55E]'>73%</span>
            </div>
            <div className='h-1.5 bg-[#2D3748] rounded-full overflow-hidden'>
              <div
                className='h-full bg-gradient-to-r from-[#16A34A] to-[#22C55E] rounded-full'
                style={{
                  width: barsOn ? '73' + PCT : '0' + PCT,
                  transition: 'width 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s',
                }}
              />
            </div>
            <div className='flex justify-between mt-1'>
              <span className='text-[9px] text-gray-500'>R$ 310 / R$ 420</span>
              <span className='text-[9px] text-[#22C55E]'>Faltam R$ 110</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const fadeUp = (delay) => ({ animationDelay: delay + 'ms' })

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('section-hidden')
      ref.current.classList.add('section-visible')
    }
  }, [])

  return (
    <section
      id='inicio'
      className='relative min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden'
    >
      {/* Gradientes de fundo */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl animate-glow-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl' />
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent' />
      </div>

      <div ref={ref} className='section-hidden max-w-6xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Coluna esquerda */}
          <div className='space-y-6 text-center md:text-left'>
            {/* Selo */}
            <div className='fade-in-up inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full px-4 py-1.5' style={fadeUp(0)}>
              <span className='w-2 h-2 rounded-full bg-[#22C55E] animate-pulse' />
              <span className='text-[#22C55E] text-sm font-semibold'>Para motoristas de Uber, 99 e inDrive</span>
            </div>

            {/* Título principal */}
            <h1 className='fade-in-up text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white' style={fadeUp(120)}>
              Você sabe quanto{' '}
              <span className='gradient-text'>realmente lucra</span>{' '}
              dirigindo?
            </h1>

            {/* Subtítulo */}
            <p className='fade-in-up text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0' style={fadeUp(240)}>
              Driver Cash é o aplicativo financeiro feito para motoristas de apps. Controle faturamento,
              despesas e descubra seu <strong className='text-white'>lucro real</strong> com facilidade.
            </p>

            {/* Linha de estatísticas */}
            <div className='fade-in-up flex items-center justify-center md:justify-start gap-8 py-2' style={fadeUp(360)}>
              <AnimatedStat value={10} suffix='k+' delay={500} label='Motoristas' />
              <AnimatedStat value={4.9} decimals={1} delay={650} label='Avaliação' />
              <AnimatedStat prefix='R$' value={2} suffix='M+' delay={800} label='Rastreados' />
            </div>


            {/* Botões de CTA */}
            <div className='fade-in-up flex flex-col sm:flex-row gap-3 justify-center md:justify-start' style={fadeUp(480)}>
              <a
                href='#planos'
                className='group inline-flex items-center justify-center gap-2 bg-[#22C55E] text-black font-bold px-7 py-3.5 rounded-xl text-base hover:bg-[#16A34A] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#22C55E]/25'
              >
                <svg viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5 transition-transform duration-200 group-hover:rotate-12'>
                  <path d='M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11H9V9h2v4zm0-6H9V5h2v2z'/>
                </svg>
                Começar grátis
              </a>
              <a
                href='#como-funciona'
                className='group inline-flex items-center justify-center gap-2 border border-[#22C55E] text-[#22C55E] font-bold px-7 py-3.5 rounded-xl text-base hover:bg-[#22C55E]/10 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200'
              >
                Ver como funciona
                <svg viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1'>
                  <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'/>
                </svg>
              </a>
            </div>

            <p className='fade-in-up text-xs text-gray-500' style={fadeUp(600)}>
              Grátis para sempre no plano básico · Sem cartão de crédito
            </p>
          </div>

          {/* Coluna direita - Mockup do painel */}
          <div className='flex justify-center'>
            <div className='fade-in-up' style={fadeUp(300)}>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


