import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import ArrowLeft from "../components/Icon/ArrowLeft";
import ArrowRight from "../components/Icon/ArrowRight";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { TabButton } from "../components/TabButton/TabButton";

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
      <br />
      <ArrowLeft />
      <ArrowRight />
      <Checkbox label="Value" />
      <TabButton label="Tab Button" />
    </>
  );
}
