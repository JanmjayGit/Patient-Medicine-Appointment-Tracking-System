// import React, { useEffect, useState } from "react";

// function Prescription() {
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedPrescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];

//     if (storedUser) {
//       setUser(storedUser);
//       const userPrescriptions = storedPrescriptions.filter(
//         (prescription) => prescription.email === storedUser.email
//       );
//       setPrescriptions(userPrescriptions);
//     }
//   }, []);

//   if (!user) {
//     return <p>Please log in to view prescriptions.</p>;
//   }

//   return (
//     <div style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
//       <h2>🧾 Prescriptions for {user.name}</h2>

//       {prescriptions.length === 0 ? (
//         <p>No prescriptions found.</p>
//       ) : (
//         prescriptions.map((prescription, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "10px",
//               marginBottom: "10px"
//             }}
//           >
//             <p><strong>Doctor:</strong> {prescription.doctor}</p>
//             <p><strong>Date:</strong> {prescription.date}</p>
//             <p><strong>Medications:</strong></p>
//             <ul>
//               {prescription.medications.map((med, i) => (
//                 <li key={i}>{med}</li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Prescription;


import React, { useEffect, useState } from "react";
import "./Prescription.css";

function Prescription() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("view");
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form states
  const [newPrescription, setNewPrescription] = useState({
    doctor: "",
    date: "",
    medications: [{ name: "", dosage: "", frequency: "", duration: "", times: [] }],
    notes: ""
  });

  // Medication schedule states
  const [medicationSchedule, setMedicationSchedule] = useState([]);
  const [todaysMeds, setTodaysMeds] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "John Doe",
      email: "john@example.com"
    };
    const storedPrescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];
    const storedSchedule = JSON.parse(localStorage.getItem("medicationSchedule")) || [];

    setUser(storedUser);
    
    if (storedUser) {
      const userPrescriptions = storedPrescriptions.filter(
        (prescription) => prescription.email === storedUser.email
      );
      setPrescriptions(userPrescriptions);
      
      const userSchedule = storedSchedule.filter(
        (schedule) => schedule.email === storedUser.email
      );
      setMedicationSchedule(userSchedule);
      
      // Generate today's medication schedule
      generateTodaysSchedule(userSchedule);
    }
  }, []);

  const generateTodaysSchedule = (schedule) => {
    const today = new Date().toDateString();
    const todaysSchedule = [];
    
    schedule.forEach(med => {
      med.times.forEach(time => {
        todaysSchedule.push({
          id: `${med.name}-${time}`,
          name: med.name,
          dosage: med.dosage,
          time: time,
          taken: false,
          date: today
        });
      });
    });
    
    todaysSchedule.sort((a, b) => {
      const timeA = new Date(`1970/01/01 ${a.time}`);
      const timeB = new Date(`1970/01/01 ${b.time}`);
      return timeA - timeB;
    });
    
    setTodaysMeds(todaysSchedule);
  };

  const addMedication = () => {
    setNewPrescription({
      ...newPrescription,
      medications: [...newPrescription.medications, { name: "", dosage: "", frequency: "", duration: "", times: [] }]
    });
  };

  const removeMedication = (index) => {
    const updatedMeds = newPrescription.medications.filter((_, i) => i !== index);
    setNewPrescription({ ...newPrescription, medications: updatedMeds });
  };

  const updateMedication = (index, field, value) => {
    const updatedMeds = [...newPrescription.medications];
    updatedMeds[index][field] = value;
    setNewPrescription({ ...newPrescription, medications: updatedMeds });
  };

  const addMedicationTime = (medIndex, time) => {
    const updatedMeds = [...newPrescription.medications];
    if (!updatedMeds[medIndex].times.includes(time)) {
      updatedMeds[medIndex].times.push(time);
      setNewPrescription({ ...newPrescription, medications: updatedMeds });
    }
  };

  const removeMedicationTime = (medIndex, timeToRemove) => {
    const updatedMeds = [...newPrescription.medications];
    updatedMeds[medIndex].times = updatedMeds[medIndex].times.filter(time => time !== timeToRemove);
    setNewPrescription({ ...newPrescription, medications: updatedMeds });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const prescriptionData = {
      ...newPrescription,
      email: user.email,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    
    const updatedPrescriptions = [...prescriptions, prescriptionData];
    setPrescriptions(updatedPrescriptions);
    
    // Update localStorage
    const allPrescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];
    allPrescriptions.push(prescriptionData);
    localStorage.setItem("prescriptions", JSON.stringify(allPrescriptions));
    
    // Add to medication schedule
    const scheduleData = prescriptionData.medications.map(med => ({
      ...med,
      email: user.email,
      prescriptionId: prescriptionData.id
    }));
    
    const updatedSchedule = [...medicationSchedule, ...scheduleData];
    setMedicationSchedule(updatedSchedule);
    
    const allSchedules = JSON.parse(localStorage.getItem("medicationSchedule")) || [];
    allSchedules.push(...scheduleData);
    localStorage.setItem("medicationSchedule", JSON.stringify(allSchedules));
    
    // Regenerate today's schedule
    generateTodaysSchedule(updatedSchedule);
    
    // Reset form
    setNewPrescription({
      doctor: "",
      date: "",
      medications: [{ name: "", dosage: "", frequency: "", duration: "", times: [] }],
      notes: ""
    });
    setShowAddForm(false);
  };

  const markAsTaken = (medId) => {
    const updatedTodaysMeds = todaysMeds.map(med => 
      med.id === medId ? { ...med, taken: !med.taken } : med
    );
    setTodaysMeds(updatedTodaysMeds);
  };

  const generatePDF = (prescription) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Prescription - ${prescription.doctor}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; }
          .patient-info { margin: 20px 0; }
          .medications { margin: 20px 0; }
          .medication-item { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🏥 Medical Prescription</h1>
          <p>Dr. ${prescription.doctor}</p>
          <p>Date: ${prescription.date}</p>
        </div>
        
        <div class="patient-info">
          <h3>Patient Information:</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
        </div>
        
        <div class="medications">
          <h3>Prescribed Medications:</h3>
          ${prescription.medications.map((med, index) => `
            <div class="medication-item">
              <h4>${index + 1}. ${med.name}</h4>
              <p><strong>Dosage:</strong> ${med.dosage}</p>
              <p><strong>Frequency:</strong> ${med.frequency}</p>
              <p><strong>Duration:</strong> ${med.duration}</p>
              <p><strong>Times:</strong> ${med.times.join(', ')}</p>
            </div>
          `).join('')}
        </div>
        
        ${prescription.notes ? `
          <div class="notes">
            <h3>Additional Notes:</h3>
            <p>${prescription.notes}</p>
          </div>
        ` : ''}
        
        <div class="footer">
          <p>This prescription was generated on ${new Date().toLocaleDateString()}</p>
          <p>Please follow the medication schedule as prescribed</p>
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(pdfContent);
    printWindow.document.close();
    printWindow.print();
  };

  if (!user) {
    return (
      <div className="prescription-container">
        <div className="login-prompt">
          <h2>🔒 Access Restricted</h2>
          <p>Please log in to view prescriptions.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="prescription-container">
      <div className="header">
        <h1>🧾 Prescription Management</h1>
        <p>Welcome, {user.name}</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          📋 View Prescriptions
        </button>
        <button 
          className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          ⏰ Today's Schedule
        </button>
        <button 
          className={`tab ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          ➕ Add Prescription
        </button>
      </div>

      {activeTab === 'view' && (
        <div className="prescriptions-view">
          <h2>Your Prescriptions</h2>
          {prescriptions.length === 0 ? (
            <div className="empty-state">
              <p>No prescriptions found.</p>
              <button onClick={() => setActiveTab('add')} className="add-btn">
                Add Your First Prescription
              </button>
            </div>
          ) : (
            <div className="prescriptions-grid">
              {prescriptions.map((prescription, index) => (
                <div key={index} className="prescription-card">
                  <div className="prescription-header">
                    <h3>Dr. {prescription.doctor}</h3>
                    <span className="date">{prescription.date}</span>
                  </div>
                  
                  <div className="medications-list">
                    <h4>Medications:</h4>
                    {prescription.medications.map((med, i) => (
                      <div key={i} className="medication-item">
                        <div className="med-name">{med.name}</div>
                        <div className="med-details">
                          <span className="dosage">{med.dosage}</span>
                          <span className="frequency">{med.frequency}</span>
                          <span className="duration">{med.duration}</span>
                        </div>
                        {med.times.length > 0 && (
                          <div className="med-times">
                            <strong>Times:</strong> {med.times.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {prescription.notes && (
                    <div className="notes">
                      <strong>Notes:</strong> {prescription.notes}
                    </div>
                  )}
                  
                  <button 
                    className="pdf-btn"
                    onClick={() => generatePDF(prescription)}
                  >
                    📄 Download PDF
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="schedule-view">
          <h2>Today's Medication Schedule</h2>
          {todaysMeds.length === 0 ? (
            <div className="empty-state">
              <p>No medications scheduled for today.</p>
            </div>
          ) : (
            <div className="schedule-list">
              {todaysMeds.map((med) => (
                <div key={med.id} className={`schedule-item ${med.taken ? 'taken' : ''}`}>
                  <div className="schedule-time">{med.time}</div>
                  <div className="schedule-details">
                    <div className="med-name">{med.name}</div>
                    <div className="med-dosage">{med.dosage}</div>
                  </div>
                  <button 
                    className={`take-btn ${med.taken ? 'taken' : ''}`}
                    onClick={() => markAsTaken(med.id)}
                  >
                    {med.taken ? '✓ Taken' : 'Mark as Taken'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'add' && (
        <div className="add-prescription">
          <h2>Add New Prescription</h2>
          <form onSubmit={handleSubmit} className="prescription-form">
            <div className="form-group">
              <label>Doctor's Name:</label>
              <input
                type="text"
                value={newPrescription.doctor}
                onChange={(e) => setNewPrescription({...newPrescription, doctor: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                value={newPrescription.date}
                onChange={(e) => setNewPrescription({...newPrescription, date: e.target.value})}
                required
              />
            </div>
            
            <div className="medications-section">
              <h3>Medications</h3>
              {newPrescription.medications.map((med, index) => (
                <div key={index} className="medication-form">
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Medicine name"
                      value={med.name}
                      onChange={(e) => updateMedication(index, 'name', e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Dosage (e.g., 500mg)"
                      value={med.dosage}
                      onChange={(e) => updateMedication(index, 'dosage', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Frequency (e.g., Twice daily)"
                      value={med.frequency}
                      onChange={(e) => updateMedication(index, 'frequency', e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 7 days)"
                      value={med.duration}
                      onChange={(e) => updateMedication(index, 'duration', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="times-section">
                    <label>Medication Times:</label>
                    <div className="times-input">
                      <input
                        type="time"
                        onChange={(e) => {
                          if (e.target.value) {
                            addMedicationTime(index, e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                      <button type="button" onClick={() => addMedicationTime(index, '08:00')}>
                        Morning
                      </button>
                      <button type="button" onClick={() => addMedicationTime(index, '14:00')}>
                        Afternoon
                      </button>
                      <button type="button" onClick={() => addMedicationTime(index, '20:00')}>
                        Evening
                      </button>
                    </div>
                    
                    <div className="selected-times">
                      {med.times.map((time, timeIndex) => (
                        <span key={timeIndex} className="time-tag">
                          {time}
                          <button 
                            type="button"
                            onClick={() => removeMedicationTime(index, time)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {newPrescription.medications.length > 1 && (
                    <button 
                      type="button" 
                      className="remove-med-btn"
                      onClick={() => removeMedication(index)}
                    >
                      Remove Medicine
                    </button>
                  )}
                </div>
              ))}
              
              <button type="button" className="add-med-btn" onClick={addMedication}>
                Add Another Medicine
              </button>
            </div>
            
            <div className="form-group">
              <label>Additional Notes:</label>
              <textarea
                value={newPrescription.notes}
                onChange={(e) => setNewPrescription({...newPrescription, notes: e.target.value})}
                rows="3"
                placeholder="Any additional instructions or notes..."
              />
            </div>
            
            <button type="submit" className="submit-btn">
              Save Prescription
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Prescription;