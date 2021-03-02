import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faGlobe, faMoneyCheckAlt, faSearchDollar, faFileContract, faBuilding } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state = {
    isLoading : false,
    jobs : [
      {
        "id" : "1",
        "CompanyName" : "Ebay",
        "Position" : "Sales",
        "Location" : "California",
        "whereWork": "remote"
      },

      {
        "id" : "2",
        "CompanyName" : "Reddit",
        "Position" : "Moderator",
        "Location" : "Washington",
        "whereWork": "onsite"
      },

      {
        "id" : "3",
        "CompanyName" : "Amazon",
        "Position" : "Sorter",
        "Location" : "Oregon",
        "whereWork": "remote"
      }
    ]
  }

  remove(id) {
    let updatedJobs = [...this.state.jobs].filter (i => i.id !== id)
    this.setState({jobs : updatedJobs });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allJobs = this.state.jobs;

    if (isLoading) {
      return(
        <div>Loading...</div>
      );
    }

    let jobs = 
    allJobs.map(job => 
      <tr key={job.Id}>
        <td>{job.CompanyName}</td>
        <td>{job.Position}</td>
        <td>{job.Location}</td>
        { job.whereWork === "remote" ? <td><FontAwesomeIcon icon={faGlobe} /> Remote</td> : <td><FontAwesomeIcon icon={faBuilding} /> <br/>OnSite</td>}
        <td><Button className='btn btn-lg btn-success' onClick={() => this.remove(job.id)}> <FontAwesomeIcon icon={faThumbsUp} /> Accepted </Button></td>
        <td><Button className='btn btn-lg btn-danger' onClick={() => this.remove(job.id)}> <FontAwesomeIcon icon={faThumbsDown} /> Denied </Button></td>
        <td><Button className='btn btn-lg btn-info' onClick={() => this.remove(job.id)}> <FontAwesomeIcon icon={faMoneyCheckAlt} /> No Response </Button></td>
        <td><Button className='btn btn-lg btn-warning' onClick={() => this.remove(job.id)}> <FontAwesomeIcon icon={faSearchDollar} /> ??? </Button></td>
        <td><Button className='btn btn-lg btn-info' onClick={() => this.remove(job.id)}> <FontAwesomeIcon icon={faFileContract} /> Job Posting </Button></td>
      </tr>
    )

    return ( 
      <div className='container border border-secondary rounded center'>
        <div className='row'>
          <div className='col-12'>
            <h4>Pending Application Response</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 center text-center'>
            <Table dark responsive striped bordered hover>
              <thead>
                <th>Company Name</th>
                <th>Position</th>
                <th>Location</th>
                <th>Work From</th>
                <th colSpan='4'>Actions</th>
                <th>Job Posting</th>
              </thead>

              <tbody>
                { this.state.jobs.length === 0 ? <td colSpan='8'>No pending Applications.</td> : jobs}
              </tbody>
            </Table>
          </div>
        </div>

      </div>
    );
  }
}

export default App;