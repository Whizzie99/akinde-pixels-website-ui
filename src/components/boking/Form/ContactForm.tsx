"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import contactImage from "../../../../public/images/Contact-page-image.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  sessionType: string;
  preferredService: string;
  needStylist: string;
  needMakeupArtist: string;
  eventDate: string;
  videoSessionDate: string;
  venues: string;
  budget: string;
  guestCount: string;
  textArea: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    sessionType: "",
    preferredService: "",
    needStylist: "",
    needMakeupArtist: "",
    eventDate: "",
    videoSessionDate: "",
    venues: "",
    budget: "",
    guestCount: "",
    textArea: "",
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
            Thank you for stopping by our photography website! We would love to
            hear from you and discuss how we can help you capture your special
            moments.
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
            Whether you have a question, would like to book a session, or simply
            want to say hello, please don&apos;t hesitate to reach out as we
            look forward to connecting with you and capturing the beauty of your
            world!
          </motion.p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 space-y-8"
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
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
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
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
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
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
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
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
                <option value="editorials">Editorials</option>
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
                Preferred services
              </label>
              <select
                id="preferredService"
                name="preferredService"
                value={formData.preferredService}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
              >
                <option value="" disabled>
                  videography
                </option>
                <option value="videography">Videography</option>
                <option value="cinematography">Cinematography</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="w-full"
            >
              <label
                htmlFor="needStylist"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Do you need a stylist?
              </label>
              <select
                id="needStylist"
                name="needStylist"
                value={formData.needStylist}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
              >
                <option value="" disabled>
                  choose options
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="w-full"
            >
              <label
                htmlFor="needMakeupArtist"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Do you need a make up artist?
              </label>
              <select
                id="needMakeupArtist"
                name="needMakeupArtist"
                value={formData.needMakeupArtist}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
              >
                <option value="" disabled>
                  choose options
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </motion.div>
          </div>

          <div className="flex space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="w-1/2"
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
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="w-1/2"
            >
              <label
                htmlFor="videoSessionDate"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Video Session Date
              </label>
              <input
                type="date"
                id="videoSessionDate"
                name="videoSessionDate"
                value={formData.videoSessionDate}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
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
                htmlFor="venues"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Venue(s)
              </label>
              <input
                type="text"
                id="venues"
                name="venues"
                placeholder="Enter venue name(s) or location(s)"
                value={formData.venues}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
              />
            </motion.div>

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
                Do you have a budget? ($)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="Enter your estimated budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
              className="w-full"
            >
              <label
                htmlFor="guestCount"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                How many guests do you expect to attend?
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                placeholder="Enter estimated number of guests"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#F28E2C] p-2"
                required
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
              Additional Information or questions
            </label>
            <textarea
              id="textArea"
              name="textArea"
              placeholder="message"
              rows={4}
              value={formData.textArea}
              onChange={handleChange}
              className="w-full bg-[#F8F8F8] text-[#A3A3A3] border-b border-gray-300 focus:outline-none focus:border-[#A3A3A3] p-2 resize-none"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.0 }}
            className="w-full bg-[#F28E2C] text-white p-2 rounded hover:bg-[#e0954a] transition duration-300"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
