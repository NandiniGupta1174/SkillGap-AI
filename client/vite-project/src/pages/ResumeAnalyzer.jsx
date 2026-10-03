import UploadBox from "../components/resume/UploadBox";
import ATSScoreCard from "../components/resume/ATSScoreCard";
import SkillGapCard from "../components/resume/SkillGapCard";
import JobMatchCard from "../components/resume/JobMatchCard";
import LearningRoadmap from "../components/resume/LearningRoadmap";

function ResumeAnalyzer() {
  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Resume Analyzer
      </h1>

      <UploadBox />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <ATSScoreCard />
        <SkillGapCard />
        <JobMatchCard />
        <LearningRoadmap />
      </div>
    </div>
  );
}

export default ResumeAnalyzer;