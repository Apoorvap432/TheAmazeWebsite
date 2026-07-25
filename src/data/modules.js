import {
  Building2,
  Hotel,
  House,
  Building,
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Hotel Management",
    description:
      "Handle reservations, room availability, housekeeping, billing and guest services from one dashboard.",
    icon: Hotel,
  },

  {
    id: 2,
    title: "Vacation Rentals",
    description:
      "Manage Airbnb, Booking.com and direct reservations with channel synchronization.",
    icon: House,
  },

  {
    id: 3,
    title: "Apartment Management",
    description:
      "Track tenants, rent collection, maintenance requests and occupancy.",
    icon: Building2,
  },

  {
    id: 4,
    title: "Multi Property Management",
    description:
      "Operate multiple hotels or properties through a centralized cloud platform.",
    icon: Building,
  },
];

export default modules;