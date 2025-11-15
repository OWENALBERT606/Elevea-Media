'use client'

export default function Team() {
  const team = [
    { name: 'Alex Chen', role: 'Creative Director', image: '/team-member-portrait.png' },
    { name: 'Sarah Martinez', role: 'Strategy Lead', image: '/team-member-portrait.png' },
    { name: 'James Wilson', role: 'Design Expert', image: '/team-member-portrait.png' },
    { name: 'Emma Davis', role: 'Marketing Specialist', image: '/team-member-portrait.png' },
  ]

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to delivering excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="scroll-scale-in text-center group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
