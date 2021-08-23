import RamiNumaraLogo from "../RamiNumaraLogo/RamiNumaraLogo";
import styles from "./header.module.scss";
import Icon from "../_shared/Icon/Icon";
import { func } from "../../../../../../Users/BlackRainbow/AppData/Local/Microsoft/TypeScript/4.3/node_modules/@types/assert-plus";
const items = [
  {
    text: "Anasayfa",
    link: "/",
    icon: `<HomeIcon />`,
  },
  {
    text: "Fiyat Listesi",
    link: "/fiyat",
    icon: `<LocalOfferIcon />`,
  },
  {
    text: "Numara Başvurusu",
    link: "/basvuru",
    icon: `<DescriptionIcon />`,
  },
  {
    text: "Hakkımızda",
    link: "/hakkimizda",
    icon: `<InfoIcon />`,
  },
];

interface NavigationItem {
  text: string;
  link: string;
  icon: any;
}

interface NavigationProps {
  items: Array<NavigationItem>;
}

const Navigation = (props: NavigationProps) => {
  const { items } = props;

  return (
    <>
      <nav className={styles.nav}>
        {items.map((item, index) => (
          <a color="inherit" href={item.link} className={styles.a}>
            {item.text}
          </a>
        ))}
      </nav>

      <nav className={styles.mobileNav}>
        <Icon
          button
          className={styles.mobileButton}
          onClick={() => console.log("ads")}
        >
          menu
        </Icon>
      </nav>
    </>
  );
};

const Header = () => {
  return (
    <>
      <header className={styles.root}>
        <RamiNumaraLogo />
        <Navigation items={items} />
      </header>

      <div className={styles.spacing} />

      <div className={styles.list}>
        {items.map((item, index) => (
          <a color="inherit" href={item.link} className={styles.listItem}>
            {item.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
