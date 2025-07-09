import { Mail, MapPin, Phone } from "lucide-react";

export const mockContact = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "mahmoud_h_98@hotmail.com",
    link: "mailto:mahmoud_h_98@hotmail.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: "(+972) 52 208 7004",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: "Kaboul,Israel",
  },
];
