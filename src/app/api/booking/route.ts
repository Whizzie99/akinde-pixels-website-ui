import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL, // Your Zoho email address
      to: "bookings@akindepixels.com",
      subject: `New Booking Submission from ${data.firstName} ${data.lastName}`,
      // text: `
      //   Name: ${data.firstName} ${data.lastName}
      //   Email: ${data.email}
      //   Message: ${data.textArea}
      // `,
      html: `
        <h3>Hey there, someone has just made a bookinig, please find the info below:</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phoneNumber}</p>
        <p><strong>Session Type:</strong> ${data.sessionType}</p>
        <p><strong>Preferred Service:</strong> ${data.preferredService}</p>
        <p><strong>Alternative session type:</strong> ${data.alternativeSessionType || "Not selected"}</p>
        <p><strong>Event location:</strong> ${data.location || "Not selected"}</p>
        <p><strong>Event Date:</strong> ${data.eventDate || "Not selected"}</p>
        <p><strong>Event Time:</strong> ${data.eventTimes || "Not selected"}</p>
        <p><strong>Budget:</strong> ${data.budget || "Not selected"}</p>
        <p><strong>Additional Messages:</strong> ${data.textArea || "No info entered"}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
