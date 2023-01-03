import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button/Button";
import Icon from "../components/Icon/Icon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Button
        size="medium"
        variant="secondary"
        state="default"
        iconType="lead"
        icon={<Icon />}
      >
        Button
      </Button>
    </>
  );
}
