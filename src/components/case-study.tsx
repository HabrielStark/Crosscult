interface CaseStudyProps {
  title: string;
  description: string;
  category: string;
  image?: string;
}

export function CaseStudy({ title, description, category, image }: CaseStudyProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl hover-lift press-effect">
      {/* Background Image or Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent
                  group-hover:scale-105 transition-transform duration-500"
        style={image ? {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
      />
      
      <div className="relative p-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium 
                        bg-primary/10 text-primary rounded-full
                        group-hover:bg-primary/20 transition-colors">
            {category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
          {description}
        </p>

        {/* View Case Study Button */}
        <button className="flex items-center text-primary group/btn">
          <span className="text-sm font-medium group-hover/btn:mr-2 transition-all">
            View Case Study
          </span>
          <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" 
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full 
                      transform translate-x-16 -translate-y-16
                      group-hover:scale-150 group-hover:rotate-45 transition-all duration-500" />
      </div>
    </div>
  );
}