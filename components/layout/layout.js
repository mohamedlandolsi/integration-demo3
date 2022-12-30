import { Fragment } from "react";
import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}
