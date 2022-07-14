/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {allCampuses, deleteCampus} = props;
  // If there is no campus, display a message.
  if (!allCampuses.length) {
    return (
    <div>
      <p>There are no campuses.</p>
      <Link to={`newcampus`}>
        <button
          style={{backgroundColor: '#11153e', padding: '7px 15px', 
          border: 'none', margin: '10px 20px', borderRadius: '22px', 
          fontSize: '14px', color: 'white', fontWeight: 'bold'}}>
          Add New Campus
        </button>
      </Link>
    </div>
    );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>Campus ID: {campus.id}</h4>
          <img src={campus.imageUrl} height="200" width="200" alt="college campus"/>
          <br/><br/>
          <button 
            style={{backgroundColor: '#B22222', padding: '7px 15px', 
            borderRadius: '22px', fontWeight: 'bold', fontSize: '14px', color: 'white'}}
            onClick={() => deleteCampus(campus.id)}>
            Delete
          </button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button
          style={{backgroundColor: '#11153e', padding: '7px 15px', 
          border: 'none', margin: '10px 20px', borderRadius: '22px', 
          fontSize: '14px', color: 'white', fontWeight: 'bold'}}>
          Add New Campus
        </button>
      </Link>
      <br/><br/>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;