import { FunctionalComponent } from "preact";
import s from "./text.module.scss";
import clsx from "clsx";

interface TextProps {
  className?: string;
  caption?: boolean;
  light?: boolean;
  disableGutters?: boolean;
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
    ...rest
  } = props;

  return (
    <TextComponent
      className={clsx(s.root, className, {
        [s.caption]: caption,
        [s.gutters]: !disableGutters,
        [s.light]: light,
        [s.noDecoration]: noDecoration,
      })}
      {...rest}
    >
      {children}
    </TextComponent>
  );
};

export default Text;
