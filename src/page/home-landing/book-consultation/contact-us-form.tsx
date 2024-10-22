import { getCookie } from "@/utils/cookie";
import clsx from "clsx";
import { useState } from "react";
import { FC } from "react";

const ContactUsForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function formv3() {
    const url =
      "https://api.hsforms.com/submissions/v3/integration/submit/47787293/b125aa6b-362f-4523-915c-91a42aaa4ffb";

    // Retrieve the hubspotutk cookie
    const hutk = getCookie("hubspotutk");
    const form = document.querySelector("form") as HTMLFormElement;
    const formData = new FormData(form);

    // Example request JSON:
    const data = {
      submittedAt: Date.now().toString(),
      fields: [
        {
          objectTypeId: "0-1",
          name: "full_name",
          value: formData.get("name"),
        },
        {
          objectTypeId: "0-1",
          name: "email",
          value: formData.get("email"),
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: formData.get("phone"),
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: formData.get("company"),
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: formData.get("message"),
        },
      ],
      context: {
        hutk: hutk, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
        pageUri: "www.korvol.com",
        pageName: "Landing page",
      },
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: true,
          text: "I agree to allow Korvol to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Korvol.",
            },
          ],
        },
      },
    };

    const final_data = JSON.stringify(data);

    setIsSubmitting(true);

    fetch(url, {
      method: "POST",
      body: final_data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
        setError("Something went wrong. Try other methods to contact us.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formv3();
  };

  return (
    <form className="flex flex-col gap-4 md:gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="w-full md:w-1/2 p-4 border border-solid border-gray-300 rounded-md bg-black"
          required
          minLength={3}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className="w-full md:w-1/2 p-4 border border-solid border-gray-300 rounded-md bg-black"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          className="w-full md:w-1/2 p-4 border border-solid border-gray-300 rounded-md bg-black"
          required
          minLength={10}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="w-full md:w-1/2 p-4 border border-solid border-gray-300 rounded-md bg-black"
          minLength={3}
        />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-4 border border-solid border-gray-300 rounded-md bg-black"
        rows={4}
        minLength={5}
      ></textarea>
      <div className="flex flex-col gap-4">
        <label className="text-white">
          <input type="checkbox" className="mr-2" required />I agree to allow
          Korvol to store and process my personal data and to receive marketing
          communications from Korvol.
        </label>
        <div className="flex gap-4 items-center">
          <button
            className={clsx(
              "rounded-md px-12 py-2 w-full md:w-fit !text-white !bg-secondary font-bold text-md",
              isSubmitting && "bg-gray-500"
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>{" "}
          {submitted && (
            <p className="text-secondary ">Form submitted successfully!</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
