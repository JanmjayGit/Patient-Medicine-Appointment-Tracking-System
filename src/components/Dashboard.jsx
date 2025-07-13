import { useEffect, useState } from "react"

function Dashboard() {

    let [appointments, setAppointments] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {

        let allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        let userAppointment = allAppointments.filter(appointment => appointment.email === user.email);
        setAppointments(userAppointment);
    }, []);

    return (
        <div>
            <h1>{user.name}</h1>

            <ul>
                {appointments.map((appoinment, index) => (
                    <li key={index}>{appoinment.doctorName}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard;