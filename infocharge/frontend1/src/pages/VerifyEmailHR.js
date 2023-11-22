import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VerifyEmailHR.module.css";

const VerifyEmailHR = () => {
  const navigate = useNavigate();

  const onConfirmContainerClick = useCallback(() => {
    navigate("/add-colaborator");
  }, [navigate]);

  return (
    <div className={styles.verifyEmailHr}>
      <div className={styles.content}>
        <div className={styles.confirm} onClick={onConfirmContainerClick}>
          <b className={styles.confirm1}>Confirm</b>
        </div>
        <div className={styles.dontReceiveAnContainer}>
          <span>{`Don’t receive an email? `}</span>
          <b className={styles.resend}>Resend</b>
        </div>
        <input
          className={styles.numberConfirmationEmail}
          name="Confirmation Number"
          id="confirmation_number"
          placeholder="Confirmation Number"
          type="number"
        />
        <div className={styles.enterTheNumber}>
          Enter the number you received in the email:
        </div>
        <b className={styles.verifyYourEmail}>Verify your Email</b>
        <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
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

export default VerifyEmailHR;
