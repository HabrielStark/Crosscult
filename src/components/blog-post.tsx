interface BlogPostProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
}

export function BlogPost({ title, excerpt, category, date, readingTime }: BlogPostProps) {
  return (
    <div className="bg-background p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
          {category}
        </span>
        <div className="text-sm text-muted-foreground">
          {date} • {readingTime} read
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{excerpt}</p>
      <button className="text-primary font-medium hover:underline">
        Read More →
      </button>
    </div>
  );
}