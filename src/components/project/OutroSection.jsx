const OutroSection = ({ href, label }) => {
  const isLink = Boolean(href);
  const Component = isLink ? 'a' : 'div';
  const additionalProps = isLink ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <section className="w-full pt-16 pb-32 flex justify-center">
      <Component
        {...additionalProps}
        className={`group relative px-16 py-8 overflow-hidden rounded-full border border-portfolio-accent w-full md:w-auto text-center ${isLink ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="absolute inset-0 bg-portfolio-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"></div>
        <span className="relative z-10 text-portfolio-accent group-hover:text-portfolio-dark font-heading text-2xl md:text-4xl tracking-widest uppercase transition-colors duration-500">
          {label}
        </span>
      </Component>
    </section>
  );
};

export default OutroSection;
