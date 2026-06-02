import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "2348059434243"; // International format for 08059434243
  const message = encodeURIComponent("Hello MUNASSAP! I'm interested in your electric scooters and would like to get more information.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
