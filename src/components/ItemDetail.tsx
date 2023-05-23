import styles from "../styles/ItemDetail.module.css";
import View from "./template/View";

interface ItemDetailProps {
  title?: string;
  description?: string;
}

export default function ItemDetail(props: ItemDetailProps) {
  return (
    <div className={styles.box}>
      <View title="Detalhes">
        <div className={styles.details}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </View>
    </div>
  );
}
