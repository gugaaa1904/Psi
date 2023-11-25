import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpCompany.module.css";
import React, { useState } from "react";

const SignUpCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    telephone: "",
    email: "",
    funcs: "",
    cnpj: "",
  });

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-admin");
  }, [navigate]);
console.log(formData)
const onSignUpClick = useCallback(() => {
  // Aqui você deve fazer a requisição para o backend
  fetch("http://localhost/Psi/backend/routes.php/company", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: new URLSearchParams(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Lógica para lidar com a resposta do backend
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro na solicitação:", error);
    });
  navigate("/sign-in-admin");
}, [formData, navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    // Abrir o seletor de arquivo quando a imagem é clicada
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      companyImage: image,
    }));
  };

  return (
    <div className={styles.signUpCompany}>
      <div className={styles.content}>

        <b className={styles.signIn} onClick={onSignInTextClick}>
          Sign In
        </b>

        <div className={styles.doYouAlreadyContainer}>
          <span>Do you already have an account?</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.orSignInWith}>
          <div className={styles.line} />
          <div className={styles.orSignIn}>Or sign in with</div>
          <div className={styles.line1} />
        </div>

        <div className={styles.buttonlargeprimary} onClick={onSignUpClick}>
          <b className={styles.button}>Sign Up</b>
        </div>

        <div className={styles.byCreatingAnAccountMeansY}>
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
        </div>
        <div className={styles.addYourCompany}>Add your Company Image</div>
        <label htmlFor="fileInput" className={styles.iconCamera} onClick={handleImageClick}>
          <img loading="eager" alt="" src="/camera@3x.png"  style={{ width: '24px', height: '24px', marginRight: '5px' }} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        <input
          className={styles.phoneNumber}
          name="telephone"
          id="phone_number"
          placeholder="Phone Number"
          type="integer"
          onChange={handleInputChange}
          value={formData.telephone}
        />
        <input
          className={styles.employeesNumber}
          name="funcs"
          id="employess_number"
          placeholder="Employees Number"
          type="integer"
          onChange={handleInputChange}
          value={formData.funcs}
        />
        <input
          className={styles.companyAddress}
          name="address"
          id="company_address"
          placeholder="Company Address"
          type="text"
          onChange={handleInputChange}
          value={formData.address}
        />
        <input
          className={styles.companyEmail}
          name="email"
          id="company_email"
          placeholder="Company Email"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <input
          className={styles.cnpj}
          name="cnpj"
          id="cnpj"
          placeholder="CNPJ (National Register of Legal Entities)"
          type="integer"
          onChange={handleInputChange}
          value={formData.cnpj}
        />
        <input
          className={styles.companyName}
          name="name"
          id="company_name"
          placeholder="Company Name"
          type="text"
          onChange={handleInputChange}
          value={formData.name}
        />
        <div className={styles.header}>
          <div className={styles.welcomeEnterYour}>
            Welcome! Enter your company details
          </div>
          <b className={styles.signUpYour}>Sign Up Company</b>
        </div>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        </div>
        <img
          className={styles.backButtonIcon}
          alt=""
          src="/back-button.svg"
          onClick={onBackButtonClick}
        />
      </div>







      <div className={styles.cover}>
        <div className={styles.background} />
        <div className={styles.background1} />
        <div className={styles.text}>
          <b className={styles.tittle}>Customizable Multipurpose Dashboard</b>
          <div className={styles.body}>
            Everything you need in an easily customizable dashboard.
          </div>
        </div>
        <div className={styles.illustration}>
          <img
            className={styles.illustrationChild}
            alt=""
            src="/group-10.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <b className={styles.activity}>Activity</b>
            <div className={styles.frameParent}>
              <div className={styles.mParent}>
                <div className={styles.m}>M</div>
                <div className={styles.m}>T</div>
                <div className={styles.m}>W</div>
                <div className={styles.m}>T</div>
                <div className={styles.m}>F</div>
                <div className={styles.m}>S</div>
                <div className={styles.m}>S</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
                <div className={styles.groupChild2} />
                <div className={styles.groupChild3} />
                <div className={styles.groupChild4} />
              </div>
            </div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupChild5} />
              <div className={styles.groupChild6} />
              <div className={styles.groupChild7} />
              <div className={styles.ellipseDiv} />
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.groupDiv}>
                <div className={styles.groupChild8} />
                <div className={styles.groupChild9} />
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.groupChild10} />
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild11} />
                  <div className={styles.groupChild12} />
                  <div className={styles.groupChild13} />
                  <div className={styles.groupChild14} />
                  <div className={styles.div}>70%</div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild15} />
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild16} />
                  <div className={styles.groupChild17} />
                </div>
                <div className={styles.parent}>
                  <b className={styles.b}>$1,235,00</b>
                  <div className={styles.completed}>Completed</div>
                </div>
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.groupChild15} />
                <div className={styles.rectangleParent3}>
                  <div className={styles.groupChild16} />
                  <div className={styles.groupChild17} />
                </div>
                <div className={styles.group}>
                  <b className={styles.b}>$2,266,70</b>
                  <div className={styles.completed}>Completed</div>
                </div>
              </div>
              <div className={styles.rectangleParent6}>
                <div className={styles.groupChild21} />
                <div className={styles.groupChild22} />
                <div className={styles.groupChild23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCompany;
