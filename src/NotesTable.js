import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";

export default function NotesTable(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>School</TableCell>
          <TableCell>Subject</TableCell>
          <TableCell>Course</TableCell>
          <TableCell>Notes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((document, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell>{document.school}</TableCell>
              <TableCell>{document.subject}</TableCell>
              <TableCell>{document.course || "--"}</TableCell>
              <TableCell>{document.notes}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
