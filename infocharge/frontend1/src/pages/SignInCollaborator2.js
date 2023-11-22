import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInCollaborator2.module.css";

const SignInCollaborator2 = () => {
  const navigate = useNavigate();

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-password-collaborator");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLargePrimaryContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.signInCollaborator2}>
      <div className={styles.coverSignIn}>
        <div className={styles.background} />
        <div className={styles.text}>
          <b className={styles.tittle}>Customizable Multipurpose Dashboard</b>
          <div className={styles.body}>
            Everything you need in an easily customizable dashboard.
          </div>
        </div>
        <div className={styles.background1} />
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
      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logo-11@2x.png" />
        </div>
        <div className={styles.header}>
          <b className={styles.tittle1}>Sign In to your Account</b>
          <div className={styles.body1}>
            Welcome back! please enter your detail
          </div>
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
        <div className={styles.forgotPassword}>
          <b
            className={styles.forgotPassword1}
            onClick={onForgotPasswordTextClick}
          >
            Forgot Password?
          </b>
        </div>
        <img
          className={styles.backButtonIcon}
          alt=""
          src="/back-button2.svg"
          onClick={onBackButtonClick}
        />
        <div
          className={styles.buttonlargeprimary}
          onClick={onButtonLargePrimaryContainerClick}
        >
          <b className={styles.button}>Sign In</b>
        </div>
      </div>
    </div>
  );
};

export default SignInCollaborator2;
