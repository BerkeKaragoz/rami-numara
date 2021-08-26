import { FunctionalComponent } from "preact";
import s from "./text.module.scss";
import clsx from "clsx";

interface TextProps {
  className?: string;
  caption?: boolean;
  light?: boolean;
  disableGutters?: boolean;
  headline?: boolean;
  heading?: boolean;
  noDecoration?: boolean;
  as?: any; //TODO
}

const Text: FunctionalComponent<TextProps> = (props) => {
  const {
    children,
    className,
    caption,
    as: TextComponent = "p",
    disableGutters,
    noDecoration,
    light,
    headline,
    heading,
    ...rest
  } = props;

  return (
    <TextComponent
      className={clsx(s.root, className, {
        [s.caption]: caption,
        [s.headline]: headline,
        [s.heading]: heading,
        [s.light]: light,
        [s.noDecoration]: noDecoration,
        [s.noGutters]: disableGutters,
      })}
      {...rest}
    >
      {children}
    </TextComponent>
  );
};

export default Text;
