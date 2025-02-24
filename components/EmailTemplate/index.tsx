import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  code: string;
  location: string;
  eventDate: string;
  services: string;
  event: string;
  referral: string;
  message: string;
}

const EmailTemplate = async ({
  name,
  email,
  phone,
  code,
  location,
  eventDate,
  services,
  event,
  referral,
  message,
}: EmailTemplateProps): Promise<React.ReactNode> => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <h1 style={{ color: '#333' }}>New Event Request</h1>
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#666' }}>Client Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Code:</strong> {code}</p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#666' }}>Event Details</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Event Date:</strong> {eventDate}</p>
      <p><strong>Event Type:</strong> {event}</p>
      <p><strong>Services Required:</strong> {services}</p>
      <p><strong>Referral Source:</strong> {referral}</p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#666' }}>Additional Message</h2>
      <p>{message}</p>
    </div>
  </div>
);

const AutoReplyEmailTemplate = async ({
  name
}: { name: string }): Promise<React.ReactNode> => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <h1 style={{ color: '#333' }}>Thank You for Your Request</h1>
    <div style={{ marginBottom: '20px' }}>
      <p>Dear {name},</p>
      <p>Thank you for using our services. We have received your event request and appreciate your interest in working with us.</p>
      <p>Our team will review your request and contact you within the next two business days to discuss your event in detail.</p>
      <p>Best regards,</p>
      <p>The Events Team</p>
    </div>
  </div>
);

export { EmailTemplate, AutoReplyEmailTemplate };