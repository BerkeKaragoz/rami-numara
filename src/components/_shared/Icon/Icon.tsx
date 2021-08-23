import { FunctionalComponent, JSX } from "preact";
import s from "./icon.module.scss";
import clsx from "clsx";

interface TextProps extends JSX.CSSProperties {
  className?: string;
  as?: any; //TODO
}

const Icon: FunctionalComponent<TextProps> = (props) => {
  const { children, className, as: IconComponent = "div", ...rest } = props;

  return (
    <IconComponent
      className={clsx(s.root, className, {
        //[s.gutters]: !disableGutters,
      })}
      {...rest}
    >
      {children}
    </IconComponent>
  );
};

export default Icon;
