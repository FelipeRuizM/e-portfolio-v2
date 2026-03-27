const SectionHeader = ({ title, num }) => (
  <div className="flex items-baseline gap-4 mb-8 md:mb-12">
    <span className="text-4xl md:text-5xl font-heading text-portfolio-accent">{num}</span>
    <h3 className="text-4xl md:text-6xl font-heading text-portfolio-light uppercase tracking-tight">{title}</h3>
  </div>
);

export default SectionHeader;
