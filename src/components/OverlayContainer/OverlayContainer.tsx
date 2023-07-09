import Image from "next/image";
import { FC, ReactNode } from "react";
import styles from "./OverlayContainer.module.css";

type Props = {
  imgSrc: string;
  imgSrc2?: string;
  imgAlt?: string;
  children: ReactNode;
};

const OverlayContainer: FC<Props> = ({
  imgSrc,
  imgSrc2,
  imgAlt = "",
  children,
}) => (
  <div className={`${styles.imgContainer}`}>
    {imgSrc2 ? (
      <>
        <div className="hidden sm:block w-full">
          <Image
            className={styles.img}
            src={imgSrc}
            alt={imgAlt}
            width={858}
            height={414}
            priority
          />
        </div>
        <div className="block sm:hidden w-full">
          <Image
            className={styles.img}
            src={imgSrc2}
            alt={imgAlt}
            width={710}
            height={710}
            priority
          />
        </div>
      </>
    ) : (
      <Image
        className={styles.img}
        src={imgSrc}
        alt={imgAlt}
        width={710}
        height={710}
      />
    )}

    {children}
    <div className={styles.imgOverlay}></div>
    <div className={styles.overlayBorder}></div>
    <div className={styles.overlayBorder2}></div>
  </div>
);

export default OverlayContainer;