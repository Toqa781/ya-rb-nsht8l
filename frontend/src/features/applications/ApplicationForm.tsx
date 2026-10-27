import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../../Components/UI/Button";
import Card from "../../Components/UI/Card";
import Badge from "../../Components/UI/Badge";
import Input from "../../Components/UI/Input";
import { statusOptions, type ApplicationFormValues } from "./type";
import { statusTones } from "./statusTones";


type ApplicationFormProps = {
  initialValues: ApplicationFormValues;
  onSubmit: (values: ApplicationFormValues) => void;
  onCancel: () => void;
  submitLabel?: string;
};

// One optional error message per form field
type FormErrors = Partial<Record<keyof ApplicationFormValues, string>>;

// Same look as Kermina's Input, reused for the select and the textarea
const fieldClasses =
  "w-full rounded-button border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none placeholder:text-subtle focus:border-primary focus:ring-2 focus:ring-focus";

function validate(values: ApplicationFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.companyName.trim()) {
    errors.companyName = "Enter a company name.";
  }
  if (!values.jobTitle.trim()) {
    errors.jobTitle = "Enter a job title.";
  }

  return errors;
}

function ApplicationForm({ initialValues, onSubmit, onCancel, submitLabel="Save Application" }: ApplicationFormProps) {
  const [values, setValues] = useState<ApplicationFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const errorCount = Object.values(errors).filter(Boolean).length;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));

    // Once the user starts fixing a field, remove its error
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const foundErrors = validate(values);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      return; // stop here: don't save an invalid form
    }

    onSubmit({
      ...values,
      companyName: values.companyName.trim(),
      jobTitle: values.jobTitle.trim(),
      location: values.location.trim(),
      salaryRange: values.salaryRange.trim(),
      listingUrl: values.listingUrl.trim(),
      notes: values.notes.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {errorCount > 0 && (
        <div
          role="alert"
          className="rounded-card border border-danger bg-tone-red-bg p-4"
        >
          <p className="text-sm font-semibold text-tone-red-text">
            Check the {errorCount} required {errorCount === 1 ? "field" : "fields"} below.
          </p>
          <p className="mt-1 text-xs text-tone-red-text">
            Enter a company name and job title to save your application.
          </p>
        </div>
      )}

      <Card>
        <h2 className="text-lg font-semibold text-ink">Opportunity details</h2>
        <p className="mt-1 text-sm text-muted">
          Start with the company and role you're excited about.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input
            id="companyName"
            name="companyName"
            label="Company *"
            value={values.companyName}
            onChange={handleChange}
            error={errors.companyName}
            placeholder="e.g. Orbit"
          />
          <Input
            id="jobTitle"
            name="jobTitle"
            label="Job title *"
            value={values.jobTitle}
            onChange={handleChange}
            error={errors.jobTitle}
            placeholder="e.g. Product Design Intern"
          />
          <Input
            id="location"
            name="location"
            label="Location"
            value={values.location}
            onChange={handleChange}
            placeholder="City, state or remote"
          />
          <Input
            id="salaryRange"
            name="salaryRange"
            label="Salary range"
            value={values.salaryRange}
            onChange={handleChange}
            placeholder="e.g. $32–40 / hr"
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-ink">Application details</h2>
        <p className="mt-1 text-sm text-muted">
          Keep the little details from slipping through the cracks.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input
            id="appliedOn"
            name="appliedOn"
            label="Application date"
            type="date"
            value={values.appliedOn}
            onChange={handleChange}
          />

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="status" className="text-sm font-medium text-ink">
                Status
            </label>

            <div className="flex items-center gap-3">
                <select
                id="status"
                name="status"
                value={values.status}
                onChange={handleChange}
                className={fieldClasses}
                >
                {statusOptions.map((status) => (
                    <option key={status} value={status}>
                    {status}
                    </option>
                ))}
                </select>

                <Badge tone={statusTones[values.status]}>
                {values.status}
                </Badge>
            </div>
          </div>

          <div className="sm:col-span-2">
            <Input
              id="listingUrl"
              name="listingUrl"
              label="Listing URL"
              type="url"
              value={values.listingUrl}
              onChange={handleChange}
              placeholder="https://careers.company.com/role"
            />
            <p className="mt-2 text-xs text-muted">
              Paste the original job listing so it's easy to find later.
            </p>
          </div>
          
          <div className="flex w-full flex-col gap-2 sm:col-span-2">
            <label htmlFor="jobDescription" className="text-sm font-medium text-ink">
                Job description
            </label>
            <textarea
                id="jobDescription"
                name="jobDescription"
                rows={6}
                value={values.jobDescription}
                onChange={handleChange}
                placeholder="Paste the job requirements and responsibilities..."
                className={fieldClasses}
            />
            <p className="text-xs text-muted">Paste the job requirements, responsibilities, and so on.</p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:col-span-2">
            <label htmlFor="notes" className="text-sm font-medium text-ink">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={values.notes}
              onChange={handleChange}
              placeholder="Contacts, interview prep, what you love about the role..."
              className={fieldClasses}
            />
            <p className="text-xs text-muted">Only you can see these notes.</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">* Company and job title are required.</p>

        <div className="flex gap-3">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{submitLabel}</Button>
        </div>
      </div>
    </form>
  );
}

export default ApplicationForm;