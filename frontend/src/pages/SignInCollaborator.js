import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInCollaborator.module.css";

const SignInCollaborator = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLargePrimaryContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password-collaborator");
  }, [navigate]);

  return (
    <>
      <div>
        <img
          className={styles.backButtonIcon}
          alt=""
          src="/back-button.svg"
          onClick={onBackButtonClick}
        />
      </div>
      <div className={styles.signInCollaborator}>
        <div className={styles.content}>
          <div
            className={styles.buttonlargeprimary}
            onClick={onButtonLargePrimaryContainerClick}
          >
            <b className={styles.button}>Sign In</b>
          </div>
          <div className={styles.forgotPassword}>
            <b
              className={styles.forgotPassword1}
              onClick={onForgotPasswordTextClick}
            >
              Forgot Password?
            </b>
          </div>
          <div className={styles.input}>
            <input
              className={styles.email}
              name="Email"
              id="email"
              placeholder="Email"
              type="email"
            />
            <input
              className={styles.password}
              name="Password"
              id="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className={styles.header}>
            <b className={styles.tittle1}>Sign In to your Account</b>
            <div className={styles.body1}>
              Welcome back! please enter your detail
            </div>
          </div>
          <div className={styles.logo}>
            <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInCollaborator;
