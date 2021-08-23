import s from "./apply-section.module.scss";
import Button from "../_shared/Button/Button";

const ApplySection = (props) => {
  return (
    <section className={s.root}>
      <h3 className={s.text}>Rami Numara'ya başvuru nasıl yapılır?</h3>
      <a href="/basvuru">
        <Button big className={s.button}>
          Tıklayınız
        </Button>
      </a>
    </section>
  );
};

export default ApplySection;
