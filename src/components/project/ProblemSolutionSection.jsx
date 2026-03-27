import SectionHeader from './SectionHeader';

const ProblemSolutionSection = ({ problem, solution }) => (
  <section className="flex flex-col gap-12">
    <SectionHeader title="The Problem & Solution" num="02" />
    <div className="flex flex-col gap-16 lg:gap-24">

      {/* Problem Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
          <strong className="text-portfolio-light text-2xl font-heading uppercase tracking-wide block mb-4">{problem.title}</strong>
          {problem.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <img src={problem.image} alt={problem.imageAlt} className="w-full h-auto object-contain rounded-xl bg-portfolio-light/5" />
      </div>

      {/* Solution Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6 text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
          <strong className="text-portfolio-light text-2xl font-heading uppercase tracking-wide block mb-4">{solution.title}</strong>
          {solution.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <img src={solution.image} alt={solution.imageAlt} className="w-full h-auto object-contain mix-blend-screen rounded-xl" />
      </div>

    </div>
  </section>
);

export default ProblemSolutionSection;
