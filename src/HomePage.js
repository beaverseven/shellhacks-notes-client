import React, { useEffect, useState } from "react";
import { omit, update } from "lodash";
import NotesTable from "./NotesTable";
import { getNotes } from "./Api";
import Select, {components} from 'react-select';
import './index.css';
import { TextField } from "@mui/material";

export default function HomePage() {
  const [notes, setNotes] = useState([]);
  const [queryParams, setQueryParams] = useState({});
  const [isLoading, setLoading] = useState(true);

  async function fetchNotes() {
    setLoading(true);
    await getNotes(queryParams)
      .then((res) => {
        setNotes(res.rows);
      })
      .catch((e) => console.log("error getting notes"))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchNotes();
  }, [queryParams]);

  const handleChange = selectedOption => {
    console.log('handleChange',selectedOption)

  }

  const SchoolOptions = [
    {value : 'CUNY Hunter College', label : "CUNY Hunter College"},
    {value : "Staten Island College", label: "Staten Island College"},
    {value : "Kings Borough College", label: "Kings Borough College"},
  ]

  const SubjectOptions = [
    {value : 'Data Structures & Algorithms', label: "Data Structures & Algorithms"},
    {value : "Biology" , label: "Biology"},
    {value : "Computer Science", label: "Computer Science"},
  ]

  const CourseOptions = [
    {value : "CSCI 335", label: "CSCI 335"}
  ]

  //Helper Function

  


  

  return (
    <>

    <div class = "header">
      <p class = "logo"> NFF</p>
      <button class = "button"> + </button>
        
    </div>
    <div class = "body">

      <h1 class = "text"> Welcome To NoteFinder Free! To start, search up notes on a particular topic (Ex. Trees), and feel free to search by your school if need be!</h1>
      

      {/* dropdown school filter */}

      <div class = "Scroll">

      

      <Select class = "schoolScroll" label = "School" options = {SchoolOptions}
        placeholder = "School" 
        onChange = {(selectedOption) => {
          const value = selectedOption.value;
          const updatedParams = value
            ? {
                ...queryParams,
                school: value,
            }
            : omit(queryParams, "school");

            setQueryParams(updatedParams);

        }
        }
      /> 
    
      {/* dropdown subject filter */}

      <Select 
      placeholder = "Subject"
      label = "Subject" 
      options = {SubjectOptions}
      onChange = {(selectedOption) => {
          const value = selectedOption.value;
          const updatedParams = value
            ? {
                ...queryParams,
                subject: value,
            }
            : omit(queryParams, "subject");

            setQueryParams(updatedParams);

        }
        }
      /> 






      {/* some course filter */}

      <Select label = "Course" options = {CourseOptions} 
        placeholder = "Course"
        onChange = {(selectedOption) => {
          const value = selectedOption.value;
          const updatedParams = value
            ? {
                ...queryParams,
                course: value,
            }
            : omit(queryParams, "course");

            setQueryParams(updatedParams);

        }
        }
      /> 



      <TextField class = "searchBar"
              fullWidth
              placeholder="Notes"
              type="text"
              onChange={(e) => {
                const value = e.target.value;
                const updatedParams = value
                  ? {
                      ...queryParams,
                      notes: value,
                    }
                  : omit(queryParams, "notes"); //Instead of omitting, we should add it to the options.

                setQueryParams(updatedParams);
              }}
            />

            </div>






             
      {!isLoading && <NotesTable rows={notes} />}
    </div>
    </>
  );
}
