interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
}

export function ServiceCard({ title, description, items }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden glass-effect rounded-xl p-8 hover-lift press-effect
                    before:absolute before:inset-0 before:bg-gradient-to-br 
                    before:from-primary/5 before:to-transparent before:opacity-0
                    before:transition-opacity hover:before:opacity-100">
      <div className="relative">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 
                     bg-clip-text text-transparent">
          {title}
        </h3>
        
        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full 
                      group-hover:scale-[1.5] group-hover:rotate-45 transition-all duration-500" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/5 rounded-full 
                      group-hover:scale-[2] group-hover:-rotate-45 transition-all duration-500 delay-100" />
      </div>

      <p className="text-muted-foreground mb-8 group-hover:text-foreground transition-colors">
        {description}
      </p>

      <ul className="space-y-4 relative">
        {items.map((item, index) => (
          <li key={item} 
              className="flex items-center text-muted-foreground group/item 
                       hover:bg-primary/5 p-2 rounded-lg transition-all
                       hover:translate-x-2"
              style={{ transitionDelay: `${index * 50}ms` }}>
            <span className="mr-3 text-primary text-lg 
                         group-hover/item:scale-125 transition-transform">•</span>
            <span className="group-hover/item:text-foreground transition-colors">{item}</span>
          </li>
        ))}
      </ul>

      {/* Bottom Gradient Line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}