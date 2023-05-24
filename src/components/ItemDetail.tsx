import styles from "../styles/ItemDetail.module.css";
import View from "./template/View";

interface ItemDetailProps {
  title?: string;
  description?: string;
  isVisible:boolean
  setVisible: (e:any)=> void
}

export default function ItemDetail(props: ItemDetailProps) {
  return (
    <div className={styles.box}>
      <View isVisible={props?.isVisible} setVisible={props.setVisible}  title="Detalhes">
        <div className={styles.details}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </View>
    </div>
  );
}
