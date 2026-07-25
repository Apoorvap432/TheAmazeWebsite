import {
  CalendarDays,
  CreditCard,
  BarChart3,
  Users,
  ShieldCheck,
  Hotel,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Smart Reservations",
    description:
      "Manage reservations across multiple channels from one dashboard.",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Billing & Payments",
    description:
      "Generate invoices and securely manage online payments.",
    icon: CreditCard,
  },
  {
    id: 3,
    title: "Analytics",
    description:
      "Track occupancy, revenue and business performance in real time.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Guest Management",
    description:
      "Store guest information and improve customer experience.",
    icon: Users,
  },
  {
    id: 5,
    title: "Secure Platform",
    description:
      "Enterprise-grade security with cloud backup and user roles.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Property Management",
    description:
      "Manage multiple hotels, apartments and vacation rentals easily.",
    icon: Hotel,
  },
];

export default features;