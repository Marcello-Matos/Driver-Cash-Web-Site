import { useEffect, useRef } from 'react'
import videoAnim from '../assets/video.mp4'
import posterFoto from '../assets/imagem_carro.png'
import celularImg from '../assets/celular.png'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('section-hidden')
      ref.current.classList.add('section-visible')
    }
  }, [])

  return (
    <section id='inicio' className='relative min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden'>
      {/* Gradientes de fundo */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl' />
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent' />
      </div>

      <div ref={ref} className='section-hidden max-w-6xl mx-auto w-full'>
        <div className='grid md:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center'>
          {/* Coluna esquerda */}
          <div className='space-y-6 text-center md:text-left'>
            <div className='inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full px-4 py-1.5'>
              <span className='w-2 h-2 rounded-full bg-[#22C55E] animate-pulse' />
              <span className='text-[#22C55E] text-sm font-semibold'>Para motoristas de Uber, 99 e inDrive</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white'>
              Você sabe quanto <span className='gradient-text'>realmente lucra</span> dirigindo?
            </h1>

            <p className='text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0'>
              Driver Cash é o aplicativo financeiro feito para motoristas de apps. Controle faturamento, despesas e descubra seu <strong className='text-white'>lucro real</strong> com facilidade.
            </p>


            <div className='flex items-center justify-center md:justify-start gap-8 py-2'>
              {[
                { value: '10k+', label: 'Motoristas' },
                { value: '4.9', label: 'Avaliação' },
                { value: 'R$2M+', label: 'Rastreados' },
              ].map((s) => (
                <div key={s.label} className='text-center'>
                  <div className='text-xl font-extrabold text-[#22C55E]'>{s.value}</div>
                  <div className='text-xs text-gray-400'>{s.label}</div>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
              <a
                href='#planos'
                className='inline-flex items-center justify-center gap-2 bg-[#22C55E] text-black font-bold px-7 py-3.5 rounded-xl text-base hover:bg-[#16A34A] transition-all duration-200 shadow-lg shadow-[#22C55E]/25'
              >
                <svg viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                  <path d='M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11H9V9h2v4zm0-6H9V5h2v2z'/>
                </svg>
                Começar grátis
              </a>
              <a
                href='#como-funciona'
                className='inline-flex items-center justify-center gap-2 border border-[#22C55E] text-[#22C55E] font-bold px-7 py-3.5 rounded-xl text-base hover:bg-[#22C55E]/10 transition-all duration-200'
              >
                Ver como funciona
              </a>
            </div>

            <p className='text-xs text-gray-500'>Grátis para sempre no plano básico · Sem cartão de crédito</p>
          </div>

          {/* Coluna direita - animação do usuário */}
          <div className='relative flex justify-center items-center'>
            <video
              src={videoAnim}
              poster={posterFoto}
              autoPlay
              muted
              loop
              playsInline
              className='relative w-full shadow-2xl'
            />
            <img
              src={celularImg}
              alt='Aplicativo Driver Cash'
              className='absolute -bottom-14 -right-4 md:-right-12 w-48 md:w-64 animate-float drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
