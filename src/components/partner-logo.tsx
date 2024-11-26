interface PartnerLogoProps {
  name: string;
  logo: string;
  index?: number;
}

export function PartnerLogo({ name, logo, index }: PartnerLogoProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl p-6 hover-lift press-effect
                    bg-gradient-to-br from-background to-muted/50">
      <div className="relative aspect-video flex items-center justify-center">
        {/* Placeholder Logo with Gradient */}
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-transparent
                      flex items-center justify-center p-4
                      group-hover:scale-105 transition-transform duration-300">
          <span className="text-xl font-bold text-primary/70 text-center
                         group-hover:text-primary transition-colors">
            {name}
          </span>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}