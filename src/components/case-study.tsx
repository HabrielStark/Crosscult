interface CaseStudyProps {
  title: string;
  description: string;
  category: string;
}

export function CaseStudy({ title, description, category }: CaseStudyProps) {
  return (
    <div className="bg-background p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}