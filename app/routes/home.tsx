import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Questions from "~/Questions1/questions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Questions />;
}
