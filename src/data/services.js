import { Building2, Landmark, Scale, FileText } from 'lucide-react';

export const SERVICES = [
{
  id: 'preventiva',
  icon: Building2,
  title: 'Cobranza Preventiva',
  descriptionShort:
    'Seguimiento estructurado y comunicación estratégica antes del vencimiento.',
  description:
    'Aplicamos un esquema de gestión preventiva previo al vencimiento que combina recordatorios automatizados, comunicación multicanal y monitoreo continuo para reducir el riesgo de mora y preservar la salud de la cartera.',
  featuresPreview: [
    'Recordatorios automatizados',
    'Comunicación multicanal',
    'Alertas tempranas de riesgo'
  ],
  features: [
    'Recordatorios automatizados programados',
    'Supervisión de pagos próximos a vencer',
    'Comunicación multicanal estructurada',
    'Monitoreo de comportamiento de pago',
    'Alertas tempranas de posibles incumplimientos',
    'Indicadores claros de desempeño'
  ],
  stat: { value: '-35%', label: 'Reducción de mora temprana' },
  imageUrl: import.meta.env.BASE_URL + 'cobranza-preventiva.avif',
},
{
  id: 'administrativa',
  icon: Landmark,
  title: 'Cobranza Administrativa',
  descriptionShort:
    'Gestión de adeudos mediante estrategia multicanal y seguimiento estructurado previo a la vía judicial.',
  description:
    'Gestionamos adeudos por la vía administrativa a través de una estrategia multicanal que integra contacto telefónico, WhatsApp, correo electrónico y SMS, complementada con visitas domiciliarias cuando el caso lo requiere. Mantenemos seguimiento continuo hasta la negociación formal de acuerdos y la recuperación efectiva del pago, asegurando control y trazabilidad en cada gestión.',
  featuresPreview: [
    'Segmentación de cartera',
    'Recordatorios automatizados',
    'Negociación de acuerdos'
  ],
  features: [
    'Segmentación estratégica por perfil y riesgo',
    'Recordatorios automatizados multicanal',
    'Gestión telefónica estructurada',
    'Negociación formal de convenios de pago',
    'Visitas domiciliarias programadas',
    'Escalamiento previo a fase judicial'
  ],
  stat: { value: '24h', label: 'Inicio de gestión' },
  imageUrl: import.meta.env.BASE_URL + 'cobranza-administrativa.avif',
},
{
  id: 'judicial',
  icon: Scale,
  title: 'Cobranza Judicial',
  descriptionShort:
    'Acciones legales estratégicas para la recuperación formal de adeudos.',
  description:
    'Ejecutamos la recuperación de adeudos mediante procesos judiciales estructurados, análisis de viabilidad legal y ejecución de garantías cuando el caso lo requiere, asegurando seguimiento procesal y control en cada etapa.',
  featuresPreview: [
    'Demandas mercantiles',
    'Embargos',
    'Ejecución de garantías'
  ],
  features: [
    'Análisis de viabilidad legal',
    'Presentación de demandas mercantiles',
    'Juicios ejecutivos',
    'Embargo y aseguramiento de bienes',
    'Ejecución de garantías',
    'Seguimiento procesal continuo'
  ],
  stat: { value: 'Alto índice', label: 'Efectividad procesal' },
  imageUrl: import.meta.env.BASE_URL + 'cobranza-judicial.avif',
},
  {
  id: 'consultoria',
  icon: FileText,
  title: 'Consultoría',
  descriptionShort:
    'Estrategia y optimización de crédito y cobranza para fortalecer control y recuperación.',
  description:
    'Desarrollamos estrategias para fortalecer las políticas de crédito y optimizar los procesos internos de cobranza, mejorando control, eficiencia operativa y desempeño de recuperación en tu empresa.',
  featuresPreview: [
    'Diagnóstico de cartera',
    'Capacitación especializada',
    'Mejora de procesos'
  ],
  features: [
    'Diagnóstico de cartera',
    'Diseño de políticas de crédito',
    'Capacitación de equipos',
    'Optimización operativa',
    'Implementación de controles',
    'Mejores prácticas sectoriales'
  ],
  stat: { value: '+15', label: 'Años de experiencia en cobranza' },
  imageUrl: import.meta.env.BASE_URL + 'consultoria-cobranza.avif',
},
];