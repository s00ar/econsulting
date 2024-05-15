import React from 'react';
import './Dashboard.css';  // Importamos el CSS para estilos

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
