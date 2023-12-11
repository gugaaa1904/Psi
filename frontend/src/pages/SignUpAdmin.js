import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpAdmin.module.css";
import React, { useState } from "react";

const SignUpAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    admin_name: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
    companyname: "",
    companyImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      companyImage: image,
    }));
  };

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-admin");
  }, [navigate]);
  console.log(formData);
  const onSignUpClick = useCallback(async () => {
    try {
      const formDataWithImage = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'companyImage') {
          formDataWithImage.append('companyImage', value);
        } else {
          formDataWithImage.append(key, value);
        }
      });

      const response = await fetch("http://localhost/Psi/backend/routes.php/admin", {
        method: "POST",
        body: formDataWithImage,
      });

      if (!response.ok) {
        console.error("Erro na solicitação:", response.statusText);
        // Lógica para lidar com o erro
        return;
      }

      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Erro na solicitação:", error.message);
    }
    navigate("/sign-in-admin");
  }, [formData, navigate]);


  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signUpAdmin}>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button.svg"
        onClick={onBackButtonClick}
      />
      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logoinfocharge.png" />
        </div>
        <div className={styles.header}>
          <b className={styles.signUpYour}>Assign an Adminstrator</b>
          <div className={styles.welcomeEnterYour}>
            Welcome! Enter your admin details
          </div>
        </div>

        <input
          className={styles.admin_name}
          name="admin_name"
          id="admin_name"
          placeholder="Name"
          type="text"
          onChange={handleInputChange}
          value={formData.admin_name}
        />

        <input
          className={styles.email}
          name="email"
          id="email"
          placeholder="E-mail"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
        />

        <input
          className={styles.password}
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={formData.password}
        />

        <input
          className={styles.companyName}
          name="companyname"
          id="companyname"
          placeholder="Company Name"
          type="text"
          onChange={handleInputChange}
          value={formData.companyname}
        />

        <select
          className={styles.gender}
          required={true}
          name="gender"
          id="gender"
          onChange={handleInputChange}
          value={formData.gender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          className={styles.employeesNumber}
          name="age"
          id="age"
          placeholder="Age"
          type="integer"
          onChange={handleInputChange}
          value={formData.age}
        />
        <input
          className={styles.phone}
          name="phone"
          id="phone"
          placeholder="Phone"
          type="integer"
          onChange={handleInputChange}
          value={formData.phone}
        />

        <input
          className={styles.address}
          name="address"
          id="address"
          placeholder="Address"
          type="text"
          onChange={handleInputChange}
          value={formData.address}
        />
        
        <label htmlFor="fileInput" className={styles.iconCamera} onClick={handleImageClick}>
          <img loading="eager" alt="" src="/camera@3x.png"  style={{ width: '24px', height: '24px', marginRight: '5px' }} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          name="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />



      </div>
      <div className={styles.buttonlargeprimary} onClick={onSignUpClick}>
        <b className={styles.button}>Sign Up</b>
      </div>

      <div className={styles.byCreatingAnAccountMeansY} />
      <input
        className={styles.checkbox}
        required={true}
        id="terms_conditions"
        type="checkbox"
      />
      <div className={styles.byCreatingAnContainer}>
        <p className={styles.byCreatingAnAccountMeansY1}>
          <span>{`By creating an account means you agree to the `}</span>
          <span className={styles.terms}>Terms</span>
        </p>
        <p className={styles.conditionsAndOurPrivacyPol}>
          <span className={styles.terms}>{`& Conditions`}</span>
          <span className={styles.andOur}>{` and our `}</span>
          <span className={styles.privacyPolicy}>Privacy Policy</span>
        </p>
      </div>

      <div className={styles.orSignInWith}>
        <div className={styles.line} />
        <div className={styles.orSignIn}>Or sign in with</div>
        <div className={styles.line1} />
      </div>

      <div className={styles.doYouAlreadyContainer}>
        <span>Do you already have an account?</span>
        <span className={styles.span}>{` `}</span>
      </div>

      <b className={styles.signIn} onClick={onSignInTextClick}>
        Sign In
      </b>
    </div>
  );
};

export default SignUpAdmin;


        