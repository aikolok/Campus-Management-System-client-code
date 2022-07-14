/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent, editStudent } = props;
  let campusInfo;
  if (student.campus == null) {
    campusInfo = (<p>(Not currently enrolled in a college)</p>);
  } else {
    campusInfo = (
      <Link to={`/campus/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
      </Link>
    );
  }
  
  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} height="100" width="100" alt="student avatar"/>
      <p><strong>First Name:</strong> {student.firstname}</p>
      <p><strong>Last Name:</strong> {student.lastname}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>
      {campusInfo}
      <Link to={`/editstudent/${student.id}`}>
        <button 
          style={{backgroundColor: '#ADD8E6', padding: '7px 15px', 
          borderRadius: '22px', fontWeight: 'bold', fontSize: '14px', color: '#11153e'}} 
          onClick={() => editStudent(student)}>
          Edit Student Information
        </button>
      </Link> 
      <br/><br/>
      <Link to={'/students'}>
      <button 
        style={{backgroundColor: '#FFF0F5', padding: '7px 15px', 
        borderRadius: '22px', fontWeight: 'bold', fontSize: '14px', color: 'red'}}
        onClick={() => deleteStudent(student.id)}>
        Delete Student
      </button>
      </Link>
    </div>
  );

};

export default StudentView;