import React from 'react';
import './Dashboard.css';  // Importamos el CSS para estilos
import Stack from 'react-stackai';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="widgets">
        {/* Nuevo widget para el Iframe */}
        <div className="widget">
          <h2>Informe de Ventas</h2>
          <iframe 
            title="Sales Dashboard" 
            width="1000" 
            height="570" 
            src="https://app.powerbi.com/view?r=eyJrIjoiZDA1M2Y0ODUtMTQ4Yi00YTExLTlkMWYtOGNlMGU2MGNmZWYwIiwidCI6IjJhZTliMGQ5LTU1NzItNGY2Yy05ZDgwLWRhOTk3YjEwYzNhNyIsImMiOjR9" 
            frameborder="0" 
            allowFullScreen="false">
            </iframe>
        </div>
      </div>
      <Stack project="https://www.stack-ai.com/embed/5b53ef14-204a-45cf-b5d0-7a9315bd8f5d/1c764b73-6a85-4e52-af2e-b4792c24db8b/662e9d7f1b60bdaf9dd2e8fb" />
    </div>
  );
}

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { PowerBIEmbedded } from 'powerbi-embedded';
// import { Device } from 'react-device-detect';

// const Dashboard = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(Device.isMobile); // Detectar si es un dispositivo móvil
//   }, []);

//   const reportUrl = isMobile ? 'YOUR_MOBILE_REPORT_URL' : 'YOUR_DESKTOP_REPORT_URL';

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h1>Dashboard</h1>
//       </header>
//        <div className="widget">
//         <h2>Informe de Ventas</h2>
//         <iframe
//           title="Sales Dashboard"
//           width="100%" // Ajustar ancho para adaptabilidad
//           height="500" // Ajustar altura según tus necesidades
//           src={reportUrl}
//           frameborder="0"
//           allowFullScreen="false"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
