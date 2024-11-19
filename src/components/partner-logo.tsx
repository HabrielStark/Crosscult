interface PartnerLogoProps {
  name: string;
}

export function PartnerLogo({ name }: PartnerLogoProps) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg flex items-center justify-center min-h-[100px]">
      <span className="text-lg font-semibold text-muted-foreground text-center">
        {name}
      </span>
    </div>
  );
}