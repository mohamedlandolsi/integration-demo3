import { Fragment } from "react";
import Discover from "../components/home/discover";
import HowItWorks from "../components/home/howItWorks";
import Top from "../components/home/top";

export default function HomePage() {
  return (
    <Fragment>
      <Top />
      <Discover />
      <HowItWorks />
    </Fragment>
  );
}
