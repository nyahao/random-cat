"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      <button type="button" onClick={refreshImage} className={styles.button}>
        One more cat!
      </button>
      {imageUrl && <img src={imageUrl} alt="ねこの画像" className={styles.img} />}
    </div>
  );
}
