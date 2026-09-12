import { useEffect, useRef } from 'react'
import videoAnim from '../assets/video.mp4'
import posterFoto from '../assets/imagem_carro.png'
import celularImg from '../assets/celular.png'
import Logo from './Logo'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('section-hidden')
      ref.current.classList.add('section-visible')
    }
  }, [])

  return (
    <section id='inicio' className='relative min-h-screen flex items-center pt-24 pb-20 px-4 overflow-hidden bg-[#050B14]'>
      {/* Partículas discretas */}
      <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
        <span className='particle' style={{ left: '12%', top: '30%', animationDelay: '0s' }} />
        <span className='particle' style={{ left: '20%', top: '65%', animationDelay: '1.2s' }} />
        <span className='particle' style={{ left: '35%', top: '20%', animationDelay: '2.1s' }} />
        <span className='particle' style={{ left: '48%', top: '75%', animationDelay: '0.6s' }} />
        <span className='particle' style={{ left: '62%', top: '15%', animationDelay: '1.8s' }} />
        <span className='particle' style={{ left: '72%', top: '55%', animationDelay: '2.7s' }} />
        <span className='particle' style={{ left: '85%', top: '35%', animationDelay: '0.9s' }} />
        <span className='particle' style={{ left: '92%', top: '70%', animationDelay: '2.3s' }} />
      </div>

      {/* Brilhos de fundo */}
      <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#21d36b]/8 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#10b981]/6 rounded-full blur-3xl' />
      </div>

      <div ref={ref} className='section-hidden max-w-7xl mx-auto w-full relative'>
        <div className='grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-10 items-center'>
          {/* Texto principal */}
          <div className='space-y-7 text-center lg:text-left relative z-10'>
            <div className='inline-flex items-center gap-2 bg-[#21d36b]/10 border border-[#21d36b]/30 rounded-full px-4 py-1.5'>
              <span className='w-2 h-2 rounded-full bg-[#21d36b] animate-pulse' />
              <span className='text-[#21d36b] text-sm font-semibold'>Para motoristas de Uber, 99 e inDrive</span>
            </div>

            <h1 className='text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] text-white'>
              Seu dinheiro,
              <br />
              <span className='gradient-text'>no controle.</span>
            </h1>

            <p className='text-lg xl:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0'>
              Tenha uma visão completa dos seus ganhos, despesas e lucros. Organize sua vida financeira e tome decisões melhores com o DriverCash.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1'>
              <a
                href='#planos'
                className='group inline-flex items-center justify-center gap-2 bg-[#21d36b] text-black font-bold px-8 py-4 rounded-2xl text-base hover:bg-[#16a34a] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#21d36b]/30'
              >
                Começar agora
                <svg viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1'>
                  <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </a>
              <a
                href='#recursos'
                className='inline-flex items-center justify-center border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:border-[#21d36b]/60 hover:text-[#21d36b] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200'
              >
                Conhecer recursos
              </a>
            </div>
          </div>


          {/* Vídeo panorâmico com celular flutuante */}
          <div className='relative'>
            <div className='relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-[0_50px_120px_-30px_rgba(16,185,129,0.2)]'>
              <video
                src={videoAnim}
                poster={posterFoto}
                autoPlay
                muted
                loop
                playsInline
                className='w-full aspect-video object-cover'
              />
              {/* Máscara escura em degradê */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#050B14]/85 via-black/30 to-black/45' />
              <div className='absolute inset-0 bg-gradient-to-t from-[#050B14]/85 via-transparent to-transparent' />
            </div>

            {/* Celular flutuante sobre o vídeo */}
            <div className='absolute -right-2 sm:right-1 lg:-right-5 top-1/2 -translate-y-1/2 w-[33%] max-w-[230px] rotate-[5deg]'>
              <div className='animate-float relative drop-shadow-[0_45px_60px_rgba(0,0,0,0.75)]'>
                <img src={celularImg} alt='Aplicativo DriverCash' className='w-full' />
                <div className='absolute left-[50.7%] top-[16%] w-[36%] -translate-x-1/2'>
                  <Logo className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
