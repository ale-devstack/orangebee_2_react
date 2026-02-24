import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const CONTACT = {
  phone: '+52 (81) 3267-7226',
  phoneHref: 'tel:+528132677226',
  email: 'conecta@orangebee.mx',
  emailHref: 'mailto:conecta@orangebee.mx',
  whatsappHref: 'https://wa.me/528132677226',
  address: 'Av. Manuel Gómez Morín 350 PB, Valle Campestre. C.P. 66265, San Pedro Garza García, Nuevo León',
  hours: 'Lunes a Viernes: 9:00 - 18:00',
  hoursShort: 'Lun - Vie: 9:00 - 18:00',
  social: {
    linkedin: 'https://www.linkedin.com/company/108113067',
    facebook: 'https://www.facebook.com/share/1C9zKLAWFf/?mibextid=wwXIfr',
  },
};

export const CONTACT_ITEMS = [
  { icon: MapPin, title: 'Ubicación',          lines: [CONTACT.address] },
  { icon: Phone,  title: 'Teléfono',           lines: [CONTACT.phone] },
  { icon: Mail,   title: 'Correo electrónico', lines: [CONTACT.email] },
  { icon: Clock,  title: 'Horario',            lines: [CONTACT.hours] },
];
