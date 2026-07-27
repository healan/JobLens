# JobLens AI: Project Requirements

## Product goal

When a user provides a job description and a resume, JobLens AI should:

1. Calculate and explain a JobLens Match Score between the resume and the job description.
2. Extract skills from both documents.
3. Show matched skills, missing job-required skills, and additional resume skills that are not relevant to the role.
4. Recommend concrete, truthful improvements to the resume.
5. Generate a tailored resume version and re-evaluate it against a target match score of 90% or higher.

The score is an internal job-fit indicator, not a prediction of hiring outcome or interview success.

## User-facing input and output

### Inputs

- `job_description`: The full job posting or job requirements text.
- `resume_text`: The user's current resume text.
- Optional target score, defaulting to `90`.

### Outputs

- `match_score`: A 0–100 JobLens Match Score.
- `semantic_similarity_score`: The similarity between the job description and resume embeddings.
- `skill_match_score`: The percentage of required job skills found in the resume.
- `requirement_match_score`: The score for structured requirements such as experience, education, certifications, location, and work authorization when available.
- `matched_skills`: Skills found in both the job description and resume.
- `missing_skills`: Job-relevant skills not found in the resume.
- `additional_resume_skills`: Resume skills that are not relevant to the current job.
- `recommendations`: Clear, prioritized advice for improving the resume.
- `tailored_resume`: A revised, job-targeted resume that remains truthful.
- `before_after_comparison`: Match scores and skill differences before and after tailoring.

## Match-score design

The first version should use a transparent weighted score:

| Component | Weight | Purpose |
|---|---:|---|
| Semantic similarity | 50% | Compare job-description and resume meaning with SBERT embeddings. |
| Skill match | 35% | Measure coverage of required and preferred job skills. |
| Structured requirements | 15% | Compare experience, education, certifications, location, and other explicit requirements when available. |

The weights and score calibration should be evaluated with labelled data and user feedback. The Match Score must not be described as a real-world hiring probability.

## Required functional pipeline

The notebook or application should provide functions with responsibilities similar to the following:

```python
analyze_application(job_description, resume_text) -> dict
extract_resume_skills(resume_text, config) -> list[str]
extract_job_skills(job_description, config) -> list[str]
normalize_skills(skills) -> list[str]
compare_skills(job_skills, resume_skills) -> dict
calculate_match_score(job_description, resume_text, job_skills, resume_skills) -> dict
generate_improved_resume(job_description, resume_text, analysis) -> str
validate_resume_claims(original_resume, revised_resume) -> dict
```

`analyze_application` should return the user-facing outputs in one structured result.

## Skill extraction and normalization

- Extract skills from both the job description and the resume, not only from job postings.
- Use the BERT NER and O*NET keyword methods already explored in the notebook, with a documented hybrid strategy.
- Normalize equivalent skills before comparison, for example `AWS` and `Amazon Web Services`, or `JS` and `JavaScript`.
- Distinguish required skills from preferred skills whenever the job description makes that distinction clear.
- Explain why each skill is classified as matched or missing.

## Resume-tailoring rules

The revised resume must be based only on the user's real background.

- Do not invent skills, job titles, employers, dates, qualifications, certificates, projects, or measurable achievements.
- Rephrase existing experience to emphasize relevant, verifiable skills.
- If a required skill is absent, identify it as a learning or experience gap rather than adding it to the resume.
- Preserve the user's original facts and provide a clear before/after comparison.
- Validate the revised content against the original resume before showing it to the user.

If the score remains below the target, the system should report the remaining gaps and recommend realistic actions instead of fabricating content.

## Development priorities

1. Add direct user input for one job description and one resume.
2. Implement a single-pair match score; the existing Precision@K and NDCG@K ranking metrics are model-evaluation metrics and are not the user-facing Match Score.
3. Implement two-way skill extraction, skill normalization, and matched/missing skill reporting.
4. Provide explainable recommendations based on the score components and missing skills.
5. Generate a truthful tailored resume and calculate before/after scores.
6. Evaluate and calibrate the scoring approach with labelled examples and user feedback.

## Relationship to the current notebook

`JobLens_merged.ipynb` currently provides:

- Dataset-based resume–job ranking evaluation with TF-IDF and SBERT models.
- Fine-tuning support for SBERT.
- Functional job-posting skill extraction using BERT NER, O*NET keyword matching, and a hybrid result.

It still needs the user-facing single-pair analysis, resume-side skill extraction, score explanation, resume-tailoring, claim validation, and before/after comparison described above.
