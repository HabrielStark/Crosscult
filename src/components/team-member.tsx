interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index?: number;
}

export function TeamMember({ name, role, image, index }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl p-6 hover-lift press-effect
                    bg-gradient-to-br from-background to-muted/50">
      {/* Decorative Elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full 
                    group-hover:scale-150 group-hover:rotate-45 transition-all duration-500" />
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full 
                    group-hover:scale-150 group-hover:-rotate-45 transition-all duration-500 delay-100" />

      <div className="relative z-10">
        {/* Placeholder Avatar with Gradient */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden 
                      bg-gradient-to-br from-primary/20 to-primary/5
                      group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary/50">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-center group-hover:text-foreground transition-colors">
          {role}
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <SocialLink icon="linkedin" />
          <SocialLink icon="twitter" />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: string }) {
  return (
    <a href="#" className="text-primary/50 hover:text-primary transition-colors">
      <span className="sr-only">{icon}</span>
      <div className="w-5 h-5">{/* Icon SVG */}</div>
    </a>
  );
}