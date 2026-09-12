export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden py-16 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#052e16] via-[#14532d] to-[#052e16]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E] to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <span className="inline-block text-4xl">💡</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
          "Faturar{' '}
          <span className="text-[#22C55E]">R$ 300</span>{' '}
          não significa{' '}
          <span className="underline decoration-[#22C55E] decoration-4 underline-offset-4">ganhar</span>{' '}
          R$ 300."
        </h2>
        <p className="text-lg md:text-xl text-green-200/80 max-w-2xl mx-auto leading-relaxed">
          Combustível, manutenção, depreciação, internet, alimentação… tudo isso come seu lucro.
          <strong className="text-white"> Driver Cash</strong> revela quanto você realmente embolsa no final do dia.
        </p>
      </div>
    </section>
  )
}
