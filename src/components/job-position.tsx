interface JobPositionProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export function JobPosition({ title, department, location, type, description }: JobPositionProps) {
  return (
    <div className="bg-background border border-border p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {department}
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
              {location}
            </span>
            <span className="px-3 py-1 text-sm font-medium bg-muted text-muted-foreground rounded-full">
              {type}
            </span>
          </div>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Apply Now
        </button>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}