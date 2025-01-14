import styles from "./footer.module.scss";
import "../../style/global.scss";
import Text from "../_shared/Text/Text";
import Icon from "../_shared/Icon/Icon";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <Text headline>İletişim</Text>

        <div className={"grid-3 " + styles.grid}>
          <div className={"flex"}>
            <Icon
              className={styles.icon}
              style={{ color: "rgb(66, 133, 244)" }}
            >
              phone
            </Icon>
            <div>
              <Text as="a" href="tel:02125454940">
                Tel: 0212 545 49 40 (Pbx)
              </Text>
              <Text as="a" href="tel:05327357272">
                Mob: 0532 735 7272
              </Text>
              <Text>Fax: 0212 545 12 51</Text>
            </div>
          </div>

          <div className={"flex"}>
            <Icon className={styles.icon} style={{ color: "rgb(219, 68, 55)" }}>
              room
            </Icon>
            <Text as="address">
              Rami Meydanı, Talimhane Cad., Topçulardeğirmeni Sk., Numara:14/A,
              Rami, Eyüp/İstanbul (Eyüp Trafik Şubesi ve İtfaiye Karşı Sokağı)
            </Text>
          </div>

          <div className={"flex"}>
            <Icon className={styles.icon} style={{ color: "rgb(244, 180, 0)" }}>
              mail
            </Icon>
            <Text as="a" href="mailto:raminumara@gmail.com">
              raminumara@gmail.com
            </Text>
          </div>

          <div className={"gi-2 flex"}>
            <Icon
              className={styles.icon}
              style={{ color: "rgb(37, 211, 102)" }}
            >
              <img src="/img/whatsapp.png" alt="whatsapp" />
            </Icon>
            <Text
              as="a"
              href="https://api.whatsapp.com/send?phone=+905327357272&text=Merhaba,%20"
            >
              Whatsapp Destek Hattı <br /> 0532 735 72 72
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=28.91872733831406%2C41.0462512032805%2C28.922064006328586%2C41.04878985326963&amp;layer=mapnik&marker=41.047429%2C28.920314"
        ></iframe>
      </div>
      <div className={styles.lowerBar}>
        <hr className={styles.divider} />
        <Text caption disableGutters>
          Rami Numara © {new Date().getUTCFullYear()}.
        </Text>
      </div>
    </footer>
  );
}
