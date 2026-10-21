
"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "2348000000000"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hello DREVANET! I would like to discuss a project."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with DREVANET on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2} aria-hidden="true" />
      <span className="whatsapp-float-label">Chat with us</span>
    </a>
  );
}
