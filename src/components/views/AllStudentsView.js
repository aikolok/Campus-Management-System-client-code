/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button
          style={{backgroundColor: '#11153e', padding: '7px 15px', 
          border: 'none', margin: '10px 20px', borderRadius: '22px', 
          fontSize: '14px', color: 'white', fontWeight: 'bold'}}>
          Add New Student
        </button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
              <img src={student.imageUrl} height="100" width="100" alt="student avatar"/>
              <br/><br/>
              <button 
                style={{backgroundColor: '#B22222', padding: '7px 15px', 
                borderRadius: '22px', fontWeight: 'bold', fontSize: '14px', color: 'white'}}
                onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <button
          style={{backgroundColor: '#11153e', padding: '7px 15px', 
          border: 'none', margin: '10px 20px', borderRadius: '22px', 
          fontSize: '14px', color: 'white', fontWeight: 'bold'}}>
          Add New Student
        </button>
      </Link>
      <br/><br/>
    </div>
  );
};

export default AllStudentsView;