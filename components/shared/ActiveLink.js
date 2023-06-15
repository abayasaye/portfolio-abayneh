import { useRouter } from "next/router";
import Link from "next/link";
import { Children } from "react";

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = Children.only(children);
  let className = child.props.className || "";

  if(router.asPath === props.href && props.activeClassName){
    className = `${className}${props.activeClassName}`;
  }

  delete props.activeClassName;
  return <Link>{...props}</Link>;
};

export default ActiveLink;
