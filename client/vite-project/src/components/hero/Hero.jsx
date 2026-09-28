import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import GradientBlob from "./GradientBlob";

function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "var(--bg)",
      }}
    >
      {/* Aurora Blobs */}
      <GradientBlob
        color="#7C3AED"
        className="w-96 h-96 -top-20 -left-20"
      />

      <GradientBlob
        color="#06B6D4"
        className="w-[450px] h-[450px] bottom-0 right-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
