import { FormLabel, Container, Input, TextField,Button,Box } from "@mui/material";
// import TextareaAutosize from "@mui/base/TextareaAutosize";
import { MuiTelInput } from "mui-tel-input";
import { React, useState } from "react";

const ConsultantForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    // Extract only digits (to count them)
    const digits = newValue.replace(/\D/g, "");

    // Remove country code (1–3 digits after '+')
    const userDigits = digits.replace(/^\d{1,3}/, "");

    // Allow update only if user digits ≤ 10
    if (userDigits.length <= 9) {
      setValue(newValue); // <-- keeps spaces/formatting
    }
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", margin:'40px auto'}}>
      <Box sx={{color:'#2E2883',fontWeight:'750',fontSize:'30px',fontFamily:'Arial',textAlign:'center',marginBottom:'10px'}}>Need Help in finding the perfect Gift?</Box>
      <Box sx={{color:'#2E2883',fontSize:'20px',fontFamily:'Arial',textAlign:'center',marginBottom:'10px'}}>Complete the form & We will call you ASAP</Box>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
        }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        {/* <TextField id="outlined-basic" label="Phone" variant="outlined" /> */}
        <MuiTelInput
          value={value}
          onChange={handleChange}
          defaultCountry="IN"
        />
        <TextField id="outlined-basic" label="Company Name" variant="outlined" />

        
        <TextField
          label="Summarise Your Requirements..."
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          
        />
        <Button variant="outlined" sx={{}}>Submit</Button>
      </form>
    </Container>
  );
};

export default ConsultantForm;
