import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Avatar,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Checkbox,
  InputAdornment,
  IconButton
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const [role, setRole] = useState("Customer");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  const togglePassword = () => setShowPassword(prev => !prev);

  const { handleSubmit, control, formState: { errors }, getValues } = useForm({
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
      organization: "",
      address: ""
    }
  });

  // ===== DEMO OTP GENERATOR =====
  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert(`Demo OTP (for presentation): ${otp}`);
  };

  const verifyOtp = (data) => {
    if (Number(enteredOtp) === generatedOtp) {
      alert("OTP Verified! Registration Successful ✅");
      console.log("Registered Data:", { ...data, role });
      // TODO: backend API call here
    } else {
      alert("Invalid OTP ❌");
    }
  };

  const password = getValues("password");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1976d2, #0d47a1)",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={10} sx={{ p: 4, borderRadius: 3 }}>
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 1 }}>
              <PersonAddAlt1Icon />
            </Avatar>
            <Typography variant="h5" fontWeight="bold">
              Create Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              OTP Based Signup Demo
            </Typography>
          </Box>

          {/* ROLE SELECTION */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <FormLabel>Select Account Type</FormLabel>
            <RadioGroup row value={role} onChange={(e) => setRole(e.target.value)}>
              <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
              <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
            </RadioGroup>
          </FormControl>

          <Box component="form" onSubmit={handleSubmit(otpSent ? verifyOtp : sendOtp)}>
            <Grid container spacing={2}>
              {/* FULL NAME */}
              <Grid item xs={12}>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Full Name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Full Name"
                      fullWidth
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                  )}
                />
              </Grid>

              {/* CONTACT NUMBER */}
              <Grid item xs={12}>
                <Controller
                  name="contact"
                  control={control}
                  rules={{ required: "Contact is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid number" } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Contact Number"
                      type="tel"
                      fullWidth
                      error={!!errors.contact}
                      helperText={errors.contact?.message}
                    />
                  )}
                />
              </Grid>

              {/* EMAIL */}
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email Address"
                      type="email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>

              {/* CUSTOMER FIELDS */}
              {role === "Customer" && (
                <>
                  <Grid item xs={12}>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: "Password required", minLength: { value: 6, message: "Min 6 characters" } }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={togglePassword}>
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      rules={{
                        required: "Confirm Password required",
                        validate: value => value === getValues("password") || "Passwords do not match"
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Confirm Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          error={!!errors.confirmPassword}
                          helperText={errors.confirmPassword?.message}
                        />
                      )}
                    />
                  </Grid>
                </>
              )}

              {/* SELLER FIELDS */}
              {role === "Seller" && (
                <>
                  <Grid item xs={12}>
                    <Controller
                      name="organization"
                      control={control}
                      rules={{ required: "Organization required" }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Organization / Shop Name"
                          fullWidth
                          error={!!errors.organization}
                          helperText={errors.organization?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="address"
                      control={control}
                      rules={{ required: "Address required" }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Business Address"
                          fullWidth
                          multiline
                          rows={2}
                          error={!!errors.address}
                          helperText={errors.address?.message}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Product Categories</Typography>
                    <FormControlLabel control={<Checkbox />} label="Mobile Phones" />
                    <FormControlLabel control={<Checkbox />} label="Earbuds" />
                    <FormControlLabel control={<Checkbox />} label="Power Banks" />
                    <FormControlLabel control={<Checkbox />} label="Bluetooth Speakers" />
                    <FormControlLabel control={<Checkbox />} label="Chargers" />
                    <FormControlLabel control={<Checkbox />} label="Mobile Covers" />
                    <FormControlLabel control={<Checkbox />} label="Screen Protectors" />
                    <FormControlLabel control={<Checkbox />} label="Charging Cables" />
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: "Password required", minLength: { value: 6, message: "Min 6 characters" } }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={togglePassword}>
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      rules={{
                        required: "Confirm Password required",
                        validate: value => value === password || "Passwords do not match"
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Confirm Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          error={!!errors.confirmPassword}
                          helperText={errors.confirmPassword?.message}
                        />
                      )}
                    />
                  </Grid>
                </>
              )}

              {/* OTP SECTION */}
              {!otpSent ? (
                <Grid item xs={12}>
                  <Button type="button" variant="outlined" fullWidth onClick={sendOtp}>
                    Send OTP
                  </Button>
                </Grid>
              ) : (
                <>
                  <Grid item xs={12}>
                    <TextField
                      label="Enter OTP"
                      fullWidth
                      value={enteredOtp}
                      onChange={(e) => setEnteredOtp(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="button" variant="contained" fullWidth onClick={handleSubmit(verifyOtp)}>
                      Verify & Register
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>

            <Link to="/login">
              <Typography
                variant="body2"
                sx={{ mt: 2, textAlign: "center", cursor: "pointer" }}
                color="primary"
              >
                Already have an account? Login
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
