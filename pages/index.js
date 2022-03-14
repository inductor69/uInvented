import Meta from "../components/Meta";
import {Nav} from "../components/Nav";
import Landing from "./landing";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Meta title="Home" />
      <Nav />
      <Landing />
      <Footer />


    </div>
  );
}
