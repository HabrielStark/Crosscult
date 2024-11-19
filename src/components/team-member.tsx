interface TeamMemberProps {
  name: string;
  role: string;
}

export function TeamMember({ name, role }: TeamMemberProps) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl text-primary">{name[0]}</span>
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
}