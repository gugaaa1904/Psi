import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpAdmin.module.css";

const SignUpAdmin = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-admin");
  }, [navigate]);

  const onButtonLargePrimaryContainerClick = useCallback(() => {
    navigate("/company-info");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/choose-the-3-types-user");
  }, [navigate]);

  return (
    <div className={styles.signUpAdmin}>
      <div className={styles.content}>
        <b className={styles.signIn} onClick={onSignInTextClick}>
          Sign In
        </b>
        <div className={styles.doYouAlreadyContainer}>
          <span>Do you already have an account or a collaborator account?</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.orSignInWith}>
          <div className={styles.line} />
          <div className={styles.orSignIn}>Or sign in with</div>
          <div className={styles.line1} />
        </div>
        <div
          className={styles.buttonlargeprimary}
          onClick={onButtonLargePrimaryContainerClick}
        >
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
        <input
          className={styles.password}
          name="Password"
          id="password_company"
          placeholder="Password"
          type="password"
        />
        <input
          className={styles.phoneNumber}
          name="Gender"
          id="gender"
          placeholder="gender"
          type="number"
        />
        <input
          className={styles.employeesNumber}
          name="Age"
          id="age"
          placeholder="Age"
          type="number"
        />
        <input
          className={styles.companyAddress}
          name="Phone"
          id="phone"
          placeholder="Phone"
          type="text"
        />
        <input
          className={styles.companyEmail}
          name="E-mail Admin"
          id="email"
          placeholder="E-mail"
          type="email"
        />
        <input
          className={styles.cnpj}
          name="Surname"
          id="surname"
          placeholder="Surname"
          type="number"
        />
        <input
          className={styles.companyName}
          name="Name"
          id="admin_name"
          placeholder="Name"
          type="text"
        />
        <div className={styles.header}>
          <div className={styles.welcomeEnterYour}>
            Welcome! Enter your admin details
          </div>
          <b className={styles.signUpYour}>
            Assign an Adminstrator to your Company
          </b>
        </div>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        </div>
        <input
          className={styles.companyName1}
          name="Company Name"
          id="company_name"
          placeholder="Company Name"
          type="text"
        />
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

export default SignUpAdmin;
