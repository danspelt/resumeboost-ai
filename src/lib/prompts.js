export function buildResumePackagePrompt(order) {
  return `You are an expert career coach and technical resume writer. A candidate wants a stronger application package for a specific job.

Candidate name: ${order.fullName}
Target job title: ${order.targetJobTitle}
Desired tone: ${order.tone}

CURRENT RESUME:
${order.resumeText}

JOB POSTING:
${order.jobPostingText}

Create a tailored application package. Be specific to the job posting. When relevant, highlight full-stack experience with Next.js, React, MongoDB, Firebase, GitHub, accessibility, and UX-focused web development.

Return valid JSON only with this exact structure:
{
  "resumeSummary": "string — improved professional summary paragraph",
  "topSkills": ["skill1", "skill2", "..."],
  "rewrittenBullets": ["bullet1", "bullet2", "..."],
  "coverLetter": "string — full cover letter",
  "interviewAnswers": [
    { "question": "string", "answer": "string" }
  ],
  "salaryExpectationAnswer": "string — how to answer salary questions for this role",
  "linkedInHeadline": "string — suggested LinkedIn headline"
}

Include at least 5 rewritten experience bullets and at least 6 interview Q&A pairs covering strengths, weaknesses, technical fit, teamwork, and why this company.`;
}
