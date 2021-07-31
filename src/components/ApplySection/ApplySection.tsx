import s from "./apply-section.module.scss";

const ApplySection = (props) => {
  return (
    <section className={s.root}>
      <h3 className={s.text}>Rami Numara'ya başvuru nasıl yapılır?</h3>
      <a href="/basvuru">
        <button className={s.button}>Tıklayınız</button>
      </a>
    </section>
  );
};

export default ApplySection;
