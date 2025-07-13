// import React, { useState, useEffect } from "react";
// import "./AppointmentBooking.css";

// const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Gupta", "Dr. Patel"];
// const times = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"];

// const AppointmentBooking = () => {
//   const [doctor, setDoctor] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [appointments, setAppointments] = useState([]);

//   // Load saved appointments from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("appointments");
//     if (saved) {
//       setAppointments(JSON.parse(saved));
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!doctor || !date || !time) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const newAppointment = { doctor, date, time };
//     const updatedAppointments = [...appointments, newAppointment];

//     // Save to state and localStorage
//     setAppointments(updatedAppointments);
//     localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

//     // Reset form
//     setDoctor("");
//     setDate("");
//     setTime("");
//   };

//   return (
//     <div className="booking-container">
//       <h2 className="booking-title">Book an Appointment</h2>
//       <form className="booking-form" onSubmit={handleSubmit}>
//         <label>
//           Select Doctor:
//           <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
//             <option value="">-- Choose Doctor --</option>
//             {doctors.map((doc, index) => (
//               <option key={index} value={doc}>{doc}</option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Select Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>

//         <label>
//           Select Time:
//           <select value={time} onChange={(e) => setTime(e.target.value)}>
//             <option value="">-- Choose Time --</option>
//             {times.map((t, index) => (
//               <option key={index} value={t}>{t}</option>
//             ))}
//           </select>
//         </label>

//         <button type="submit">Book Appointment</button>
//       </form>

//       {appointments.length > 0 && (
//         <div className="confirmation-box">
//           <h3>📋 Booked Appointments:</h3>
//           <ul>
//             {appointments.map((appt, index) => (
//               <li key={index}>
//                 <strong>{appt.doctor}</strong> — {appt.date} at {appt.time}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentBooking;



import React, { useState, useEffect } from "react";
import "./AppointmentBooking.css";

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Gupta", "Dr. Patel"];
const times = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"];

const AppointmentBooking = () => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointments, setAppointments] = useState([]);

  // Load saved appointments from state (using React state instead of localStorage)
  useEffect(() => {
    // Initialize with some sample data for demonstration
    const sampleAppointments = [
      { doctor: "Dr. Smith", date: "2024-07-15", time: "10:00 AM" },
      { doctor: "Dr. Johnson", date: "2024-07-16", time: "02:00 PM" }
    ];
    setAppointments(sampleAppointments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!doctor || !date || !time) {
      alert("Please fill in all fields.");
      return;
    }

    const newAppointment = { doctor, date, time };
    const updatedAppointments = [...appointments, newAppointment];
    
    // Save to state (in a real app you'd send this to a server)
    setAppointments(updatedAppointments);

    // Reset form
    setDoctor("");
    setDate("");
    setTime("");
  };

  const handleDelete = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-container">
      {/* Header */}
      <div className="header">
        <div className="header-icon">🏥</div>
        <h1 className="title">Book Your Appointment</h1>
        <p className="subtitle">Schedule your visit with our healthcare professionals</p>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Booking Form */}
        <div className="form-card">
          <h2 className="form-title">Book New Appointment</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="label">
                <span className="label-text">Select Doctor</span>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="select"
                >
                  <option value="">Choose your doctor</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={doc}>{doc}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-text">Select Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </label>
            </div>

            <div className="form-group">
              <label className="label">
                <span className="label-text">Select Time</span>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="select"
                >
                  <option value="">Choose available time</option>
                  {times.map((t, index) => (
                    <option key={index} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>

            <button type="submit" className="submit-button">
              <span className="button-icon">📅</span>
              Book Appointment
            </button>
          </form>
        </div>

        {/* Appointments List */}
        {appointments.length > 0 && (
          <div className="appointments-card">
            <h2 className="appointments-title">Your Appointments</h2>
            <div className="appointments-list">
              {appointments.map((appt, index) => (
                <div key={index} className="appointment-item">
                  <div className="appointment-icon">👨‍⚕️</div>
                  <div className="appointment-details">
                    <div className="doctor-name">{appt.doctor}</div>
                    <div className="appointment-meta">
                      <span className="date">{new Date(appt.date).toLocaleDateString()}</span>
                      <span className="time">{appt.time}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;