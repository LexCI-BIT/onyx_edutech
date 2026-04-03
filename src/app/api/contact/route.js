import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { fullName, phoneNumber, email, message, courseName } = data;

    // Configure the transporter (you'll need actual credentials for production)
    // For this example, we'll set it up so the user can easily swap them in.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER || 'Info@onyxedutech.com', // Sender address
        pass: process.env.EMAIL_PASS || 'your-app-password', // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'Info@onyxedutech.com',
      to: 'Info@onyxedutech.com', // Destination address
      subject: `New Contact Request${courseName ? ` for ${courseName}` : ''}`,
      text: `
        New contact request received:
        
        Full Name: ${fullName}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Course: ${courseName || 'N/A'}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${courseName || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
