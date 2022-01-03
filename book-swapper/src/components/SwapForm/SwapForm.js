import React, {useState, Fragment} from 'react';
import { Card, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';

export default function SwapForm() {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);
    const options = ["AL", "WX"];

    console.log("HELLO");
    
    async function getBooks() {
      const querySnapshot = await getDocs(collection(db, "books"));
    }

    getBooks();
  
    return (
      <Card className="mx-auto" style={{ width: '50rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Let's find you some swaps</h2>
            <Form.Group style={{ marginTop: '20px' }}>
            <Form.Label>What books do you have?</Form.Label>
            <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections}
                options={options}
                placeholder="Choose several books..."
                selected={multiSelections}
            />
            </Form.Group>
          </Card.Body>
      </Card>
    );
  }