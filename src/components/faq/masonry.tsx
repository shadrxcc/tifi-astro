import type { ReactNode } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import DetailCard from "../DetailCard";
function MansoryGrid({items}: {items: any[]}) {
  // const items = Array.from({ length: 20 }).map((_, index) => (
  //   <img
  //     key={index}
  //     src={`https://picsum.photos/200/${Math.floor(
  //       Math.random() * (300 - 200 + 1) + 200
  //     )}`}
  //     style={{ width: "100%", borderRadius: "8px" }}
  //   />
  // ));
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