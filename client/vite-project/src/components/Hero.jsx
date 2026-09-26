import Button from "./Button";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-bold text-slate-900">
          Bridge Your Skill Gap
          <span className="text-blue-600"> with AI</span>
        </h1>

        <p className="mt-6 text-xl text-slate-600">
          Analyze resumes, identify missing skills,
          match jobs and prepare for interviews using AI.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Button>Get Started</Button>

          <Button variant="secondary">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}

export default Hero;