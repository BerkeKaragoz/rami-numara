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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEVHcEzz9PP3+Pfq7er19vb//v/8/PyltKrx+PKz5b1z04cwxlYMwUMAvCkAvjMAvzoDwUBGTUiH2JiY3aXX8Nxcznbo6ulJymfQ1NHJzcq9wr8gaKU6AAAAG3RSTlMAOlmJ2f//Lvj+/v///////xX+/v7+rP56aF7BK/qjAAABgklEQVR4AX2Sh5qEMAiEbYyJqXa993/QAza5z2v7b8UMMKDNN9qu77u2+Yd+oMLQ/3UMeoCfktHIVTs5791kRWvGb73BV6YQU2ZSDJPo28c5hzYk/0UKlghfipnzl+C/ERZWVMHA59H7nL8pVp6mUTqp7310Ln1TbESdCtgQJ0fO2J+KnNl4cbhGnx0b3aJ/EO1rkoPIZZ9WAuCeNhLnHGrRBJUDtH53YdQmyEaWL1Lh+yCSxEsoeQn4btJr27kZQYtclym279uSqqMI1lTntqpI6VlhVg9M9gArsg92Cal6mHlPdfx8Emg75S6YV9dNN3WAaskTsi0Zh6bEMUH2cLHLqvDsA4LsTjzeerNhqvscJpYwa5Q9gS0w/XODKbjF2jPK3PXJrIMWcooxiyGSAkKvHX+QHICPRhnYQ0mr5LADpYFuShunWIeJ2VI5Z25gM8TA7jFEfu9Whr2awoEKi8ymYmAYm4oBh8fHfA8vESRme5URxz0XN9cxMMelcYWDt3wCfLshX3540l4AAAAASUVORK5CYII=" alt="whatsapp"/>
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
          id="gmap_canvas"
          title="Google Map"
          src="https://maps.google.com/maps?q=Rami%20Numara&t=&z=14&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
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
