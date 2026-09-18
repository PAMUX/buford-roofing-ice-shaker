import Header from './components/Header'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import ColorSection from './components/ColorSection'
import BenefitsSection from './components/BenefitsSection'
import UseCasesSection from './components/UseCasesSection'
import QuoteSection from './components/QuoteSection'
import NationwideStrip from './components/NationwideStrip'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <ColorSection />
        <BenefitsSection />
        <UseCasesSection />
        <QuoteSection />
        <NationwideStrip />
      </main>
      <Footer />
    </>
  )
}
