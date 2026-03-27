import SectionHeader from './SectionHeader';

const OverviewDetail = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <span className="text-portfolio-accent font-bold uppercase tracking-widest text-sm">{label}</span>
    <span className="text-portfolio-light/80 text-lg">{children}</span>
  </div>
);

const OverviewSection = ({ headline, details = [] }) => (
  <section className="flex flex-col gap-12 border-t border-b border-portfolio-light/20 py-16">
    <SectionHeader title="The Overview" num="01" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 font-body">
      <div className="md:col-span-3 text-2xl md:text-4xl leading-tight font-bold text-portfolio-light w-full md:w-3/4">
        {headline}
      </div>
      {details.map((d, i) => (
        <OverviewDetail key={i} label={d.label}>{d.value}</OverviewDetail>
      ))}
    </div>
  </section>
);

export default OverviewSection;
