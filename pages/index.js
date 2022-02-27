import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Landing from "../components/Landing/landing";

export default function Home() {
  return (
    <div className=" dark:text-white dark:bg-gray-900 min-h-screen">
      <Meta title="Home" />
      <Nav />
      <Landing />

    </div>
  );
}
