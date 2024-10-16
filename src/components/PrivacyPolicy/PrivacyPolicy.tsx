'use client'

import Link from "next/link"
import SwiperComp from '@/components/shared/Swiper/SwiperComp'

const PrivacyPolicy = () => {
  return (
    <div className="py-8 ">
      <div className='custom-container'>
        <h1 className="lg:text-[40px] text-[28px]  text-[#CA7625] mb-8">
          Privacy and Policies for Akinde Pixels
        </h1>

        <div className='mb-4 '>
          <p className='font-semibold text-xl '>Introduction</p>
          <p>Welcome to Akinde Pixels. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [insert website URL], engage with our services, or interact with us in any other way. By using our website and services, you agree to the terms outlined in this policy.</p>
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl'>Personal Information</p>
          <p>We may collect personally identifiable information from you, including but not limited to:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location</li>
            <li>Payment information (for transactions)</li>
          </ul>
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl '>Non-Personal Information</p>
          <p>we may also collect non-personal information such as:</p>
          <ul>
            <li>Browser type and version</li>
            <li>IP address</li>
            <li>operating system</li>
            <li>Referring website</li>
            <li>Pages visited on our site</li>
            <li>Time and date of visit</li>
          </ul>
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl '>Cookies and Tracking Technologies</p>
          <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files placed on your device that help us understand your preferences and improve our services. You can set your browser to refuse cookies, but this may affect your ability to use certain features of our website.</p>
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl capitalize'>How we use your Information</p>
          <p>We use the collected information for various purposes, including:</p>
          <ul>
            <li>To provide, maintain, and improve our services</li>
            <li>To process transactions and send related information</li>
            <li>To communicate with you, including responding to inquiries and providing updates</li>
            <li>To analyze usage and trends to enhance user experience</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>  
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl capitalize'>How we share your information</p>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, and analytics.</li>
            <li>Legal Requirements: We may disclose your information if required to do so by law or in response to legal processes.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
          </ul>
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl capitalize'>data security</p>
          <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
        </div>

        <div className='mb-4 '>
          <p className='font-semibold text-xl capitalize'>Your rights and Choices</p>
          <p>You have the following rights regarding your personal infromation:</p>
          <ul>
            <li>Access: You may request access to the personal information we hold about you.</li>
            <li>Correction: You can request correction of any inaccuracies in your personal information.</li>
            <li>Deletion: You may request deletion of your personal information, subject to certain legal exceptions</li>
            <li>Opt-Out: You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in the emails or contacting us directly.</li>
          </ul>
        </div>

        <div className='mb-4'>
          <p className='font-semibold text-xl capitalize'>cancellation</p>
          <p>Client may terminate the Agreement (“Cancellation”) and/or reschedule the Services (“Rescheduling”) by providing Akinde Pixels with written notice no later than (10 days) before the original date of the Services (the “Minimum Notice”). Client acknowledges and agrees that Client is not relieved of any payment obligations for Cancellations and Rescheduling</p>
        </div>

        <div className='mb-4'>
        <p className='font-semibold text-xl capitalize'>Rescheduling</p>
        <p>In the event of rescheduling, We will use commercially reasonable efforts to accommodate Client’s change despite using commercially reasonable efforts, the parties agree that such rescheduling will be deemed as cancellation by client and that Akinde Pixels will be under no obligation to perform the services other than on the original date of the services</p>
        </div>

        <div className='mb-4'>
          <p className='font-semibold text-xl capitalize'>children's privacy</p>
          <p>Our website and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
        </div>

        <div className='mb-4'>
        <p className='font-semibold text-xl capitalize'>Changes to this Privacy Policy</p>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>
        </div>

        <div className='mb-4'>
          <p className='font-semibold text-xl capitalize'>Contact Us</p>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

            <br/>
          Akinde Pixels<br/>
          [Akindepixels@gmail.com] <br/>[Your Phone Number]</p>
        </div>

        <div className="my-12">
          <p className="text-2xl mb-4">Ready to Create Beautiful Memories?</p>
          <div className="md:gap-x-4 mb-8 lg:w-[40%] w-[100%]  bg-[#F28E2C] hover:bg-[#d88a3c] transition-all duration-300 shadow-md py-2 rounded-[5px] text-center">
            <Link href="/contact" className="font-lato  text-white capitalize">
              Contact Us!
            </Link>
          </div>
        </div>
      </div>
      <div>
        <SwiperComp/>
      </div>      
    </div>
    
  )
}

export default PrivacyPolicy