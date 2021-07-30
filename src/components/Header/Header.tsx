import RamiNumaraLogo from "../RamiNumaraLogo/RamiNumaraLogo";
import styles from "./header.module.scss";

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
    <nav className={styles.nav}>
      {items.map((item, index) => (
        <a color="inherit" href={item.link} className={styles.a}>
          {item.text}
        </a>
      ))}
    </nav>
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
    </>
  );
};

export default Header;
