import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import DetailCard from "../DetailCard";
function MansoryGrid({items}: {items: any[]}) {
  return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 500: 1, 700: 2 , 1440: 3}}
      >
        <Masonry gutter="16px 24px">
          {items.map((item, id) => <DetailCard key={id} item={item}/>)}
        </Masonry>
      </ResponsiveMasonry>
  );
}

export default MansoryGrid;