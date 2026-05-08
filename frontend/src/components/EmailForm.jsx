import { useState } from "react";
import API from "../services/api";

function EmailForm({ setEmail }) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    professor_name: "",
    subject: "",
    student_name: "",
    issue: "",
    tone: "respectful"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (
      !formData.professor_name.trim() ||
      !formData.subject.trim() ||
      !formData.student_name.trim() ||
      !formData.issue.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        professor_name: formData.professor_name.trim(),
        subject: formData.subject.trim(),
        student_name: formData.student_name.trim(),
        issue: formData.issue.trim(),
        tone: formData.tone
      };

      console.log("Sending payload:", payload);

      const response = await API.post("/generate", payload);

      setEmail(response.data.email);

    } catch (error) {

      console.log("❌ Error response:", error.response?.data);
      console.log("❌ Status:", error.response?.status);

      alert("Failed to generate email. Check console for details.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>

      <input
        className="input-field"
        type="text"
        name="professor_name"
        placeholder="Professor Name"
        value={formData.professor_name || ""}
        onChange={handleChange}
      />

      <input
        className="input-field"
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject || ""}
        onChange={handleChange}
      />

      <input
        className="input-field"
        type="text"
        name="student_name"
        placeholder="Your Name"
        value={formData.student_name || ""}
        onChange={handleChange}
      />

      <textarea
        className="textarea-field"
        name="issue"
        placeholder="Describe your issue..."
        value={formData.issue || ""}
        onChange={handleChange}
      />

      <select
        className="select-field"
        name="tone"
        value={formData.tone || "respectful"}
        onChange={handleChange}
      >
        <option value="respectful">respectful</option>
        <option value="formal">formal</option>
        <option value="apologetic">apologetic</option>
        <option value="urgent">urgent</option>
      </select>

      <button
        className="submit-btn"
        type="submit"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>

    </form>
  );
}

export default EmailForm;