import { Box, TextField } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";
import {
  FormValues,
  initialValue,
  validationSchema,
} from "../../common/formData";

const Profile = () => {
  const handleFormSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Box margin="1rem">
      <Header title="Create User" subTitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValue}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="1rem"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
            >
              <TextField
                fullWidth
                name="firstName"
                variant="filled"
                label="First Name"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                name="lastName"
                variant="filled"
                label="Last Name"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                name="email"
                variant="filled"
                label="Email"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                name="phone"
                variant="filled"
                label="Contact Details"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                name="add1"
                variant="filled"
                label="Address 1"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.add1}
                error={!!touched.add1 && !!errors.add1}
                helperText={touched.add1 && errors.add1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                name="add2"
                variant="filled"
                label="Address 2"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.add2}
                error={!!touched.add2 && !!errors.add2}
                helperText={touched.add2 && errors.add2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default Profile;
