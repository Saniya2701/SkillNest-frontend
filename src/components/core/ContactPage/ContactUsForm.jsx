import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);

      console.log("Sending Data:", data);

      const response = await fetch(
        "http://localhost:5000/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      alert("Message sent successfully! 🚀");
      reset();
    } catch (error) {
      console.log("ERROR WHILE CONTACT US - ", error.message);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(submitContactForm)}
    >
      {/* First & Last Name */}
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-sm text-yellow-100">
              Please enter your first name.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-sm text-yellow-100">
            Please enter your email address.
          </span>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="lable-style">Phone Number</label>

        <div className="flex gap-5">
          <select
            className="form-style w-[90px]"
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((ele, i) => (
              <option key={i} value={ele.code}>
                {ele.code}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="1234567890"
            className="form-style flex-1"
            {...register("phoneNo", {
              required: "Please enter your phone number.",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              maxLength: {
                value: 12,
                message: "Phone number is too long",
              },
            })}
          />
        </div>

        {errors.phoneNo && (
          <span className="text-sm text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          placeholder="Enter your message here"
          className="form-style"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-sm text-yellow-100">
            Please enter your message.
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-yellow-50 px-6 py-3 font-bold text-black transition-all duration-200 hover:scale-95 disabled:bg-richblack-500"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactUsForm;