import { HiOutlineCloudArrowUp } from "react-icons/hi2";

function UploadBox() {
  return (
    <div
      className="rounded-3xl p-10 border-2 border-dashed transition-all duration-300 hover:scale-[1.01]"
      style={{
        background: "var(--surface)",
        borderColor: "var(--primary)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center">

        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{
            background: "linear-gradient(135deg,#7C3AED,#06B6D4)",
            color: "white",
          }}
        >
          <HiOutlineCloudArrowUp size={40} />
        </div>

        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Upload Your Resume
        </h2>

        <p
          className="mt-3"
          style={{ color: "var(--text-secondary)" }}
        >
          Drag & drop your resume here or click the button below.
          <br />
          Supported formats: PDF, DOC, DOCX
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          id="resume-upload"
        />

        <label
          htmlFor="resume-upload"
          className="mt-8 px-8 py-4 rounded-2xl cursor-pointer font-semibold text-white transition-transform hover:scale-105"
          style={{
            background: "linear-gradient(135deg,#7C3AED,#06B6D4)",
          }}
        >
          Choose Resume
        </label>
      </div>
    </div>
  );
}

export default UploadBox;