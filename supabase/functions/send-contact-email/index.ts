

import express from "express";
const app = express();
app.use(express.json());
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

app.options("/send-contact-email", (req, res) => {
  res.set(corsHeaders);
  res.sendStatus(204);
});

app.post("/send-contact-email", async (req, res) => {
  try {
    const { name, email, message }: ContactEmailRequest = req.body;

    console.log("Sending contact email from:", name, email);

    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sp.xayyalath@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your portfolio contact form.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    res.set(corsHeaders);
    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    res.set(corsHeaders);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});