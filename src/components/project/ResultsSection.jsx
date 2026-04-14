import SectionHeader from './SectionHeader';

const ResultFeatureCard = ({ title, description }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-3xl font-heading text-portfolio-light uppercase tracking-normal">{title}</h4>
    <p className="text-portfolio-light/70 text-lg leading-relaxed">{description}</p>
  </div>
);

const ResultsSection = ({ video, features = [], isVertical = false, showColor = false }) => (
  <section className="flex flex-col gap-16">
    <SectionHeader title="The Results" num="04" />

    {isVertical ? (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Mobile/Vertical Video Container */}
        <div className="lg:col-span-4 w-full aspect-[9/16] rounded-2xl overflow-hidden border border-portfolio-light/20 relative group bg-black mx-auto max-w-[320px] lg:max-w-none">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-contain ${!showColor ? 'grayscale opacity-90' : 'opacity-100'} duration-700 pointer-events-none`}
          ></video>
          <div className="absolute top-4 left-4 bg-portfolio-dark/90 px-4 py-2 font-body text-xs tracking-[0.2em] uppercase text-portfolio-accent rounded shadow-2xl backdrop-blur-md border border-portfolio-accent/20">
            Live Demo
          </div>
        </div>

        {/* Features for Vertical Layout */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((f, i) => (
            <ResultFeatureCard key={i} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    ) : (
      <>
        {/* Horizontal Layout (Original) */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-portfolio-light/20 relative group bg-black">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-contain ${!showColor ? 'grayscale opacity-90' : 'opacity-100'} duration-700 pointer-events-none`}
          ></video>
          <div className="absolute top-6 left-6 bg-portfolio-dark/90 px-6 py-3 font-body text-xs tracking-[0.2em] uppercase text-portfolio-accent rounded shadow-2xl backdrop-blur-md border border-portfolio-accent/20">
            Live Demo
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mt-8">
          {features.map((f, i) => (
            <ResultFeatureCard key={i} title={f.title} description={f.description} />
          ))}
        </div>
      </>
    )}
  </section>
);

export default ResultsSection;
