import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactBanner from './components/ImpactBanner'
import Problem from './components/Problem'
import AppPresentation from './components/AppPresentation'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Differential from './components/Differential'
import ProfitPerHour from './components/ProfitPerHour'
import Goals from './components/Goals'
import Comparison from './components/Comparison'
import ForWho from './components/ForWho'
import Security from './components/Security'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-brand-dark min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ImpactBanner />
      <Problem />
      <AppPresentation />
      <HowItWorks />
      <Features />
      <Differential />
      <ProfitPerHour />
      <Goals />
      <Comparison />
      <ForWho />
      <Security />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
