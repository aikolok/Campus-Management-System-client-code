/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus, editCampus, unenroll} = props;

  let studentInfo;
  if (campus.students.length === 0) {
    studentInfo = (<p>(No students currently enrolled in this college)</p>);
  } else {
    studentInfo = (<h3>Total Students: {campus.students.length}</h3>);
  }
  
  // Render a single Campus view with list of its students (if any)
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} height="200" width="200" alt="college campus"/>
      <p><strong>Address:</strong> {campus.address}</p>
      <p><strong>Description:</strong> {campus.description}</p>
      <Link to={`/editcampus/${campus.id}`}>
        <button 
          style={{backgroundColor: '#ADD8E6', padding: '7px 15px', 
          borderRadius: '22px', margin: '10px 10px', 
          fontWeight: 'bold', fontSize: '14px', color: '#11153e'}} 
          onClick={() => editCampus(campus)}>
          Edit Campus Information
        </button>
      </Link> 
      <Link to={'/campuses'}>
        <button 
          style={{backgroundColor: '#FFF0F5', padding: '7px 15px', 
          borderRadius: '22px', margin: '10px 20px', 
          fontWeight: 'bold', fontSize: '14px', color: 'red'}}
          onClick={() => deleteCampus(campus.id)}>
          Delete Campus
        </button>
      </Link> 
      {studentInfo}
      <div style={{backgroundColor: '#BDB76B', margin: '0px 200px'}}>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>        
              <button 
                style={{backgroundColor: 'brown', padding: '7px 15px', 
                border: 'none', fontSize: '12px', color: 'white'}}
                onClick={() => unenroll(student.id)}>
                Unenroll
              </button>
            </div>
          );
        })}
      </div>
      <br/>
      <Link to={'/students'}>
        <button
          style={{backgroundColor: '#11153e', padding: '7px 15px', 
          border: 'none', margin: '10px 20px', borderRadius: '22px', 
          fontSize: '14px', color: 'white', fontWeight: 'bold'}}>
          Enroll New Student
        </button>
      </Link> 
      <br/><br/>
    </div>
  );
};

export default CampusView;