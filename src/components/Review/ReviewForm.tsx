"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import contactImage from "../../../public/images/Contact-page-image.png";
import Link from "next/link";

interface ReviewFormData {
  email: string;
  fullName: string;
  socialMediaHandle: string;
  dateOfService: string;
  sessionType: "portraits" | "birthday" | "wedding" | "family" | "other";
  overallSatisfaction: number;
  photographQuality: "yes" | "no" | "maybe";
  photographerProfessionalism: number;
  moodCapture: "yes" | "no" | "maybe";
  turnaroundTime: "yes" | "no" | "maybe";
  recommendation: "yes" | "no" | "maybe";
  overallExperience: string;
}

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    email: "",
    fullName: "",
    socialMediaHandle: "",
    dateOfService: "",
    sessionType: "other",
    overallSatisfaction: 0,
    photographQuality: "maybe",
    photographerProfessionalism: 0,
    moodCapture: "maybe",
    turnaroundTime: "maybe",
    recommendation: "maybe",
    overallExperience: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await axios.post(
        "https://akinde-backend.onrender.com/api/reviews",
        formData,
      );
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        email: "",
        fullName: "",
        socialMediaHandle: "",
        dateOfService: "",
        sessionType: "other",
        overallSatisfaction: 0,
        photographQuality: "maybe",
        photographerProfessionalism: 0,
        moodCapture: "maybe",
        turnaroundTime: "maybe",
        recommendation: "maybe",
        overallExperience: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="lg:flex gap-6">
      <div className="p-4 lg:block hidden">
        <Image src={contactImage} width={600} height={100} alt="" />
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.2,
          }}
          className="border border-b-[#A3A3A3] border-l-[#A3A3A3] border-r-0 p-4"
        >
          <motion.p
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              bounce: 0.2,
            }}
          >
            Welcome to Akindepixels, Please share Your Thoughts: Your Feedback
            Matters to Us
          </motion.p>
          <motion.p
            className="text-[#7B7B7B] "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
          >
            Thank you for choosing Akinde Pixels for your photography needs. We
            value your feedback and want to ensure that we are providing the
            best possible service. Please take a few moments to complete this
            quick survey. Your responses will help us identify areas for
            improvement and continue to deliver exceptional photography
            experiences.
          </motion.p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="space-y-4 mt-12"
        >
          <div className="">
            {submitStatus === "success" && (
              <div className="w-full bg-[#FFF4E5] border-l-4 border-[#F28E2C] text-[#D46B08] px-4 py-3 rounded-r flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#F28E2C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">
                  Review submitted successfully!
                </span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="w-full bg-[#FFF2F0] border-l-4 border-[#FF4D4F] text-[#CF1322] px-4 py-3 rounded-r flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#FF4D4F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="font-medium">
                  Failed to submit review. Please try again.
                </span>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <label
                  htmlFor="socialMediaHandle"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Social Media Handle (instagram, Facebook, X.com etc.)
                </label>
                <input
                  type="text"
                  name="socialMediaHandle"
                  value={formData.socialMediaHandle}
                  onChange={handleChange}
                  placeholder="Social Media Handle"
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <label
                  htmlFor="dateOfService"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Date of Service
                </label>
                <input
                  type="date"
                  name="dateOfService"
                  value={formData.dateOfService}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="w-full"
              >
                <label
                  htmlFor="sessionType"
                  className="block  text-sm font-medium text-gray-700"
                >
                  Types of sessions
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                  required
                >
                  <option value="" disabled>
                    wedding
                  </option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="portraits">Portraits</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="w-full"
              >
                <label
                  htmlFor="photographQuality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Were you satisfied with the quality of the photographs?
                </label>
                <select
                  name="photographQuality"
                  value={formData.photographQuality}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                >
                  <option value="yes">Photo Quality: Yes</option>
                  <option value="no">Photo Quality: No</option>
                  <option value="maybe">Photo Quality: Maybe</option>
                </select>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="w-full"
              >
                <label
                  htmlFor="overallSatisfaction"
                  className="block text-sm font-medium text-gray-700"
                >
                  How would you rate your overall satisfaction with our
                  services? (0-5)
                </label>
                <input
                  type="number"
                  name="overallSatisfaction"
                  min="0"
                  max="5"
                  value={formData.overallSatisfaction}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="w-full"
              >
                <label className="block text-sm font-medium text-gray-700">
                  How would you rate the professionalism of the photographer?
                  (0-5):
                </label>
                <input
                  type="number"
                  name="photographerProfessionalism"
                  min="0"
                  max="5"
                  value={formData.photographerProfessionalism}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.8 }}
                className="w-full"
              >
                <label
                  htmlFor="moodCapture"
                  className="block text-sm font-medium text-gray-700"
                >
                  Did the photographer effectively capture the desired
                  atmosphere or mood?
                </label>
                <select
                  name="moodCapture"
                  value={formData.moodCapture}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                >
                  <option value="yes">Mood Capture: Yes</option>
                  <option value="no">Mood Capture: No</option>
                  <option value="maybe">Mood Capture: Maybe</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
                className="w-full"
              >
                <label
                  htmlFor="photoEditing"
                  className="block text-sm font-medium text-gray-700"
                >
                  Were you happy with the turnaround time for receiving your
                  photos?
                </label>
                <select
                  name="turnaroundTime"
                  value={formData.turnaroundTime}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                >
                  <option value="" disabled>
                  choose options
                  </option>
                  <option value="yes">Turnaround Time: Yes</option>
                  <option value="no">Turnaround Time: No</option>
                  <option value="maybe">Turnaround Time: Maybe</option>
                </select>
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.2 }}
                className="w-full"
              >
                <label
                  htmlFor="recommendation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Would you recommend our services to others?
                </label>
                <select
                  name="recommendation"
                  value={formData.recommendation}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                  required
                >
                  <option value="" disabled>
                    choose options
                  </option>
                  <option value="yes">Recommend Services: Yes</option>
                  <option value="no">Recommend Services: No</option>
                  <option value="maybe">Recommend Services: Maybe</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.4 }}
                className="w-full"
              >
                <label
                  htmlFor="overallExperience"
                  className="block text-sm font-medium text-gray-700"
                >
                  What can you say about the overall experience of service?
                </label>
                <textarea
                  name="overallExperience"
                  value={formData.overallExperience}
                  onChange={handleChange}
                  placeholder="Tell us about your overall experience"
                  className="w-full p-2 border rounded"
                  rows={4}
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.6 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F28E2C] text-white p-2 rounded transition-all duration-300 hover:bg-[#d4873a] disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </motion.div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.8 }}
          className="w-full mt-4"
        >
          <Link
            href="/read-reviews"
            className="text-[#F28E2C] transition-all duration-300 hover:text-[#e79747]"
          >
            Read Other Client Reviews →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
