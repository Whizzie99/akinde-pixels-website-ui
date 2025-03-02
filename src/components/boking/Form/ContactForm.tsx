/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import contactImage from "../../../../public/images/side-img.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  sessionType: string;
  alternativeSessionType?: string;
  preferredService: string;
  location: string;
  eventTimes: string;
  // needStylist: string;
  // needMakeupArtist: string;
  eventDate: string;
  // videoSessionDate: string;
  // venues: string;
  budget: string;
  // guestCount: string;
  textArea: string;
}

type PreferredService =
  | "videography"
  | "photography"
  | "both"
  | "headshots"
  | "group potrait"
  | "conceptual portriat"
  | "fine art portrait"
  | "others";

type PreferredServiceToShow = {
  wedding: PreferredService[];
  birthday: PreferredService[];
  graduation: PreferredService[];
  maternity: PreferredService[];
  newBorn: PreferredService[];
  portrait: PreferredService[];
  commercialEvents: PreferredService[];
  others: PreferredService[];
};

const preferredServiceToShow: PreferredServiceToShow = {
  wedding: ["videography", "photography", "both"],
  birthday: ["videography", "photography", "both"],
  graduation: ["videography", "photography", "both"],
  maternity: ["videography", "photography", "both"],
  newBorn: ["videography", "photography", "both"],
  portrait: [
    "headshots",
    "group potrait",
    "conceptual portriat",
    "fine art portrait",
    "others",
  ],
  commercialEvents: ["videography", "photography", "both"],
  others: ["videography", "photography", "both"],
};

const sessionTypesData = [
  "wedding",
  "birthday",
  "graduation",
  "maternity",
  "newBorn",
  "portrait",
  "commercialEvents",
  "others",
];

const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    sessionType: "",
    alternativeSessionType: "",
    preferredService: "",
    location: "",
    eventDate: "",
    budget: "",
    textArea: "",
    eventTimes: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName) {
      toast.error("Please enter your first name");
      return;
    }

    if (!formData.lastName) {
      toast.error("Please enter your last name");
      return;
    }

    if (!formData.email) {
      toast.error("Please enter your email");
      return;
    }

    if (!formData.phoneNumber) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!formData.sessionType) {
      toast.error("Please select a session type");
      return;
    }

    if (!formData.preferredService) {
      toast.error("Please select a preferred service");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("/api/booking", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        sessionType: "",
        preferredService: "",
        eventTimes: "",
        eventDate: "",
        budget: "",
        textArea: "",
        location: "",
      });
      toast.success("Booking submitted successfully");
      return response;
    } catch (error) {
      toast.error("Something went wrong");
      return false;
    } finally {
      setIsLoading(false);
    }

    // Send form data to the server
  };

  return (
    <div className="lg:flex gap-6 font-lato">
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
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.2,
          }}
          className="text-[#7B7B7B] border border-b-[#A3A3A3] border-l-[#A3A3A3] border-r-0 p-4"
        >
          <motion.p
            className="mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              bounce: 0.2,
            }}
          >
            At Akinde Pixel&apos;s, we capture the essence of life&apos;s most
            precious moments. From weddings and families to portraits and
            special events, we create stunning photographs that tell your unique
            story.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
          >
            Explore our services and book your session today to experience the
            magic of our photography. We can&apos;t wait to work with you!
          </motion.p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 space-y-8"
        >
          <p>
            Fields marked with <span className="text-red-500">*</span> are
            required
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
              />
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="w-full"
            >
              <label
                htmlFor="sessionType"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Type of session <span className="text-red-500">*</span>
              </label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2 capitalize"
              >
                <option label="please select" disabled>
                  please select
                </option>
                {sessionTypesData.map((type, index) => (
                  <option key={index} value={type} className="capitalizie">
                    {type}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="w-full"
            >
              <label
                htmlFor="preferredService"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Preferred services <span className="text-red-500">*</span>
              </label>
              <select
                id="preferredService"
                name="preferredService"
                value={formData.preferredService}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2 capitalize"
              >
                <option label="please select" disabled>
                  Please select
                </option>
                {formData.sessionType &&
                  preferredServiceToShow[
                    formData.sessionType as keyof PreferredServiceToShow
                  ].map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="capitalize"
                    >
                      {service}
                    </option>
                  ))}
              </select>
            </motion.div>
          </div>

          {formData.sessionType === "others" && (
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="w-full"
              >
                <label
                  htmlFor="sessionType"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Kindly specify the type of session{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="alternativeSessionType"
                  name="alternativeSessionType"
                  placeholder="specify the type of session"
                  value={formData.alternativeSessionType}
                  onChange={handleChange}
                  className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                />
              </motion.div>
            </div>
          )}

          <div className="flex space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="w-full"
            >
              <label
                htmlFor="eventDate"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
              />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="w-full"
            >
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                placeholder="Event Location"
                onChange={handleChange}
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
                htmlFor="eventTimes"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Time of event <span className="text-red-500">*</span>
              </label>
              <select
                id="eventTimes"
                name="eventTimes"
                value={formData.eventTimes}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2 capitalize"
              >
                <option label="please select" disabled>
                  please select
                </option>
                {times.map((time, index) => (
                  <option key={index} value={time} className="capitalizie">
                    {time}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="w-full"
            >
              <label
                htmlFor="budget"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                What is your estimated budget? ($)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="Enter your estimated budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
          >
            <label
              htmlFor="textArea"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Can you provide more information about this sesssion?
            </label>
            <textarea
              id="textArea"
              name="textArea"
              placeholder="Message"
              rows={4}
              value={formData.textArea}
              onChange={handleChange}
              className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#A3A3A3] p-2 resize-none"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.0 }}
            className="w-full bg-[#F28E2C] text-white p-2 rounded hover:bg-[#e0954a] transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Please wait.." : "Submit"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
