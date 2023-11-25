import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInAdmin.module.css";

const SignInAdmin = () => {
  const navigate = useNavigate();

  const onForgotPasswordContainerClick = useCallback(() => {
    navigate("/forgot-password-admin");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password-admin");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLargePrimaryContainerClick = useCallback(() => {
    navigate("/company-info");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-admin");
  }, [navigate]);

  const onSignUpCompanyClick = useCallback(() => {
    navigate("/sign-up-company");
  }, [navigate]);

  return (
    <><div><img
      className={styles.backButtonIcon}
      alt=""
      src="/back-button.svg"
      onClick={onBackButtonClick} />
    </div>
    <div className={styles.signInAdmin}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          </div>
          <div className={styles.header}>
            <b className={styles.tittle}>Sign In Administrator</b>
            <div className={styles.body}>
              Welcome back! please enter your detail
            </div>
          </div>
          <div className={styles.input}>
            <input
              className={styles.email}
              name="Email"
              id="email"
              placeholder="Email"
              type="email" />
            <input
              className={styles.password}
              name="Password"
              id="password"
              placeholder="Password"
              type="password" />
          </div>
          <div
            className={styles.forgotPassword}
            onClick={onForgotPasswordContainerClick}
          >
            <b
              className={styles.forgotPassword1}
              onClick={onForgotPasswordTextClick}
            >
              Forgot Password?
            </b>
          </div>
          <div
            className={styles.buttonlargeprimary}
            onClick={onButtonLargePrimaryContainerClick}
          >
            <b className={styles.button}>Sign In</b>
          </div>
          <b className={styles.signUp} onClick={onSignUpTextClick}>
            Sign Up
          </b>
          <div className={styles.dontHaveAnContainer}>
            <span>Don’t have an account?</span>
            <span className={styles.span}>{` `}</span>
          </div>

          <b className={styles.signUpCompany1} onClick={onSignUpCompanyClick}>
            Sign Up Company
          </b>
          <div className={styles.dontHaveAContainer}>
            <span>Don’t have a Company?</span>
            <span className={styles.span}>{` `}</span>
          </div>
        </div>
      </div></>
  );
};

export default SignInAdmin;
