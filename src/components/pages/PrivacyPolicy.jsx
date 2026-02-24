import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
          Aviso de Privacidad
        </h1>

        <p className="mb-6">
          OrangeBee (en adelante, “La Empresa”), en cumplimiento con la Ley
          Federal de Protección de Datos Personales en Posesión de los
          Particulares (LFPDPPP), informa a los usuarios de su sitio web que es
          responsable del tratamiento de los datos personales que se recaben a
          través del mismo.
        </p>

        <p className="mb-10">
          El presente Aviso de Privacidad aplica exclusivamente a los visitantes
          del sitio web oficial de OrangeBee y a las personas que proporcionen
          información mediante formularios electrónicos de contacto.
        </p>

        {/* Datos recabados */}
        <h2 className="text-2xl font-semibold mb-4">Datos personales que se recaban</h2>
        <p className="mb-4">
          La Empresa podrá recabar los siguientes datos personales cuando el
          usuario complete un formulario de contacto o establezca comunicación
          voluntaria:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Nombre completo</li>
          <li>Empresa o razón social</li>
          <li>Correo electrónico</li>
          <li>Número telefónico</li>
          <li>Cargo o puesto</li>
        </ul>

        <p className="mb-10">
          La Empresa no solicita datos personales sensibles a través de su
          sitio web.
        </p>

        {/* Finalidad */}
        <h2 className="text-2xl font-semibold mb-4">Finalidad del tratamiento</h2>
        <p className="mb-4">
          Los datos personales recabados serán utilizados exclusivamente para:
        </p>

        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>Atender solicitudes de información.</li>
          <li>Dar seguimiento a consultas realizadas a través del sitio.</li>
          <li>Contactar al usuario para proporcionar información sobre nuestros servicios.</li>
          <li>Elaborar propuestas comerciales cuando el usuario lo solicite.</li>
        </ul>

        {/* Transferencias */}
        <h2 className="text-2xl font-semibold mb-4">Transferencia de datos</h2>
        <p className="mb-10">
          OrangeBee no vende, renta ni comercializa datos personales recabados
          a través del sitio web. Los datos podrán ser compartidos únicamente
          cuando sea requerido por autoridad competente conforme a la ley o
          cuando exista una obligación legal.
        </p>

        {/* Derechos ARCO */}
        <h2 className="text-2xl font-semibold mb-4">Derechos ARCO</h2>
        <p className="mb-4">
          El titular podrá ejercer en cualquier momento sus derechos de Acceso,
          Rectificación, Cancelación u Oposición (Derechos ARCO) enviando una
          solicitud al correo:
        </p>

        <p className="font-semibold mb-6">
          conecta@orangebee.mx
        </p>

        <p className="mb-10">
          La solicitud deberá incluir nombre completo, medio para comunicar la
          respuesta, descripción clara del derecho que desea ejercer y documento
          que acredite su identidad.
        </p>

        {/* Cookies */}
        <h2 className="text-2xl font-semibold mb-4">Uso de cookies</h2>
        <p className="mb-10">
          Nuestro sitio puede utilizar cookies y tecnologías similares para
          mejorar la experiencia de navegación y obtener estadísticas de uso.
          Estas tecnologías no recaban información que permita identificar
          personalmente al usuario.
        </p>

        {/* Modificaciones */}
        <h2 className="text-2xl font-semibold mb-4">Modificaciones</h2>
        <p className="mb-10">
          OrangeBee se reserva el derecho de modificar el presente Aviso de
          Privacidad para adaptarlo a cambios legales o administrativos. Las
          modificaciones serán publicadas en este sitio web.
        </p>

        {/* Consentimiento */}
        <h2 className="text-2xl font-semibold mb-4">Consentimiento</h2>
        <p>
          Al proporcionar sus datos personales a través del sitio web, el
          usuario reconoce haber leído y comprendido el presente Aviso de
          Privacidad y otorga su consentimiento para su tratamiento conforme a
          lo aquí establecido.
        </p>

      </div>
    </div>
  );
}