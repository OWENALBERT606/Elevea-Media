'use client'

export default function CTA() {
  return (
    <section className="py-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let's work together to create innovative solutions that drive growth and success
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105">
            Get Free Consultation
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}
