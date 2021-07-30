import styles from "./footer.module.scss";
import "../../style/global.scss";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <h2 className={styles.header}>İletişim</h2>

        <div className={"grid-3 " + styles.grid}>
          <div className={"flex"}>
            <img
              className={styles.icon}
              src="https://via.placeholder.com/140x100"
            />
            <div>
              <a href="tel:02125454940">Tel: 0212 545 49 40 (Pbx)</a>
              <p>Fax: 0212 545 12 51</p>
            </div>
          </div>

          <div className={"flex"}>
            <img
              className={styles.icon}
              src="https://via.placeholder.com/140x100"
            />
            <address>
              Rami Meydanı, Talimhane Cad., Topçulardeğirmeni Sk., Numara:14/A,
              Rami, Eyüp/İstanbul (Eyüp Trafik Şubesi ve İtfaiye Karşı Sokağı)
            </address>
          </div>

          <div className={"flex"}>
            <img
              className={styles.icon}
              src="https://via.placeholder.com/140x100"
            />
            <a href="mailto:raminumara@gmail.com">raminumara@gmail.com</a>
          </div>

          <div className={"gi-2 flex"}>
            <img
              className={styles.icon}
              src="https://via.placeholder.com/140x100"
            />
            <a href="https://api.whatsapp.com/send?phone=+905327357272&text=Merhaba,%20">
              Whatsapp Destek Hattı 0532 735 72 72
            </a>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          width="100%"
          height="500"
          id="gmap_canvas"
          title="Google Map"
          src="https://maps.google.com/maps?q=Rami%20Numara&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <hr className={styles.divider} />
      <div className={styles.lowerBar}>
        Rami Numara © {new Date().getUTCFullYear()}.
      </div>
    </footer>
  );
}
