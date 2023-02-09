/* main imports */
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

/* components imports */
import Layout from "../../layout/Layout";
import MainButton from "../buttons/MainButton";

/* styles imports */
import styles from "./ErrorPage.module.scss";

const ErrorPage = (props) => {
  const router = useRouter();

  const backHomeClickHandler = () => {
    router.push(props.href);
  };

  return (
    <>
      {props.layout ? (
        <Layout>
          <Head>
            <title>پیدا نشد | {router.asPath.split("/").join(" ")}</title>
          </Head>
          <div className={styles["error-wrapper"]}>
            <Image
              src={props.img.src}
              width={props.img.width}
              height={props.img.height}
              alt={props.title}
              loading="lazy"
            />
            <p>{props.title}</p>
            <MainButton onClick={backHomeClickHandler}>
              {props.children}
            </MainButton>
          </div>
        </Layout>
      ) : (
        <div className={styles["error-wrapper"]}>
          <Image
            src={props.img.src}
            width={props.img.width}
            height={props.img.height}
            alt={props.title}
            loading="lazy"
          />
          <p>{props.title}</p>
          <MainButton onClick={backHomeClickHandler}>
            {props.children}
          </MainButton>
        </div>
      )}
    </>
  );
};

export default ErrorPage;
