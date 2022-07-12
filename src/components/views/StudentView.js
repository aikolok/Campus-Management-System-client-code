/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent } = props;
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
      <img src={student.imageUrl} height="50" width="50" alt="student avatar" />
      <p>First Name: {student.firstname}</p>
      <p>Last Name: {student.lastname}</p>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      {campusInfo}
      <Link to={'/students'}>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </Link>
    </div>
  );

};

export default StudentView;