import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EmployeeDetail.css";

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const result = await response.json();
        setEmployee(result);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading employee details...</div>;
  }

  return (
    <div className="employee-detail-container">
      <div className="employee-card">
        <h2>Employee Detail for {employee.name}</h2>
        <p>
          <strong>Id:</strong> {employee.id}
        </p>
        <p>
          <strong> Name:</strong> {employee.name}
        </p>
        <p>
          <strong> Username:</strong> {employee.username}
        </p>
        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Company Name</strong> {employee.company.name}
        </p>
        <p>
          <strong>Address:</strong> {employee.address.city},{" "}
          {employee.address.zipcode}
        </p>
      </div>
    </div>
  );
}

export default EmployeeDetail;
