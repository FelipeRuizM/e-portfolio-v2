import SectionHeader from './SectionHeader';

const PlotTwistSection = ({ heading, body, image, imageAlt }) => (
  <section className="relative w-full border border-portfolio-accent p-8 md:p-16 lg:p-24 rounded-3xl overflow-hidden group">
    <div className="absolute inset-0 bg-portfolio-accent/5 transition-colors duration-500"></div>
    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1 flex flex-col gap-8">
        <SectionHeader title="The Plot Twist" num="03" />
        {heading}
        {body}
      </div>
      <div className="w-full lg:w-5/12 shrink-0">
        <img src={image} alt={imageAlt} className="w-full h-auto object-contain drop-shadow-2xl mix-blend-screen opacity-90 rounded-xl" />
      </div>
    </div>
  </section>
);

export default PlotTwistSection;
