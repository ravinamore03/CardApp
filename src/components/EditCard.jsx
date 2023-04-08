import { DialogContent, DialogTitle, FormGroup, TextField } from "@mui/material";
import { forwardRef } from "react";
const EditCard = forwardRef((props, ref) => (
    <>
        <DialogTitle>Edit Form</DialogTitle>
        <DialogContent>
            <FormGroup sx={{ pt: "1rem", gap: '1rem' }} ref={ref}>
                <TextField
                    label="Enter card name"
                    required
                />
                <TextField
                    label="Enter embed mp3/mp4 link"
                    required
                />
            </FormGroup>
        </DialogContent>
    </>
))

export default EditCard
