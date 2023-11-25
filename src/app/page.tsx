import { Compare } from "../../components/Compare";
import { GetApp } from "../../components/GetApp";
import { Hero } from "../../components/Hero";
import { Search } from "../../components/Search";

export default function Home() {
  return (
    <>
      <Hero />
      <Search />
      <Compare />
      <GetApp />
    </>
  );
}
