import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Styles/BSTC.css";
const BSTC = () => {
  return (
    <div id="BSTC" className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h3 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h3>
            <Container>
               <h1 className='bstc-name'>December</h1>

               <table className="bstc-table">
                   <tr>
                       <th>Name</th>
                       <th>Marks</th>
                       <th>Name</th>
                       <th>Marks</th>
                   </tr>
                   <tr>
                       <th>Ashish Kanyal</th>
                       <th>33</th>
                       <th>Abhishek Singh</th>
                       <th>35</th>
                   </tr>
                   <tr>
                       <th>Ankit kumar</th>
                       <th>38</th>
                       <th>Jhalak Puri</th>
                       <th>35</th>
                   </tr>
                   <tr>
                       <th>Saksham Singh</th>
                       <th>36</th>
                       <th>Kunal Senapati</th>
                       <th>35</th>
                   </tr>
                   <tr>
                       <th>Biplab Halder</th>
                       <th>37</th>
                       <th>Vishal Sairwal</th>
                       <th>37</th>
                   </tr>
                   <tr>
                       <th>Namit Mehra</th>
                       <th>37</th>
                       <th>Akansha Singh</th>
                       <th>37</th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
