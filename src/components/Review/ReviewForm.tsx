"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import contactImage from "../../../public/images/side-img.jpg";
import Link from "next/link";

interface ReviewFormData {
  fullName: string;
  socialMediaHandle: string;
  dateOfService: string;
  sessionType: "portraits" | "birthday" | "wedding" | "family" | "other";
  overallSatisfaction: number;
  projectQuality: number;
  professionalism: number;
  performance: number;
  deliveryTimeliness: number;
  recommendation: "yes" | "no" | "maybe";
  extraRemarks: string;
}

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    fullName: "",
    socialMediaHandle: "",
    dateOfService: "",
    sessionType: "portraits",
    overallSatisfaction: 0,
    projectQuality: 0,
    professionalism: 0,
    performance: 0,
    deliveryTimeliness: 0,
    recommendation: "maybe",
    extraRemarks: "",
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
        "https://akinde-backend-equf.onrender.com/api/reviews",
        formData,
      );
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        fullName: "",
        socialMediaHandle: "",
        dateOfService: "",
        sessionType: "portraits",
        overallSatisfaction: 0,
        projectQuality: 0,
        professionalism: 0,
        performance: 0,
        deliveryTimeliness: 0,
        recommendation: "maybe",
        extraRemarks: "",
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
      <div className="p-4 lg:block hidden w-[600px]">
        <div className="relative w-full h-full">
          <Image
            src={contactImage}
            alt="akinde pixels"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="">
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
            <p className="mb-4">
              Please note that fields marked with{" "}
              <span className="text-red-500">*</span> are required
            </p>
            <div className="grid grid-cols-1 gap-4">
              {/* <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
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
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
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
                  Types of session <span className="text-red-500">*</span>
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
                  htmlFor="projectQuality"
                  className="block text-sm font-medium text-gray-700"
                >
                  How would you rate the quality of the project delivered?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="projectQuality"
                  min="0"
                  max="5"
                  value={formData.projectQuality}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
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
                  services? (0-5) <span className="text-red-500">*</span>
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
                <label
                  htmlFor="professionalism"
                  className="block text-sm font-medium text-gray-700"
                >
                  How would you rate our professionalism? (0-5){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="professionalism"
                  min="0"
                  max="5"
                  value={formData.professionalism}
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
                  htmlFor="performance"
                  className="block text-sm font-medium text-gray-700"
                >
                  How would you rate the performance of the photographer?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="performance"
                  min="0"
                  max="5"
                  value={formData.performance}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
                className="w-full"
              >
                <label
                  htmlFor="deliveryTimeliness"
                  className="block text-sm font-medium text-gray-700"
                >
                  How would you rate the delivery timeliness?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="deliveryTimeliness"
                  min="0"
                  max="5"
                  value={formData.deliveryTimeliness}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
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
                  htmlFor="extraRemarks"
                  className="block text-sm font-medium text-gray-700"
                >
                  What can you say about the overall experience of service?
                </label>
                <textarea
                  name="extraRemarks"
                  value={formData.extraRemarks}
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
