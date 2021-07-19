import "./index.scss";
import React from "react";
import { View, Text, VirtualList } from "@tarojs/components";

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}

const Row = React.memo(({index, style, data}) => {
  return (
    <View className={`list-item ${index % 2 ? "ListItemOdd" : "ListItemEven"}`} style={style}>
      Row {index} : {data[index]}
    </View>
  );
});


export default class PageView extends React.Component {
  state = {
    data: buildData(0)
  };

  $ref = React.createRef();

  onScroll = (data) => {
    console.log(data);
  }

  componentDidMount() {
    console.log(this.$ref);

    setTimeout(() => {
      this.$ref.current.scrollTo({offset: 200});
    }, 3000);
  }


  onScrollNative = (e) => {
    console.log(e);
  }

  render() {
    const { data } = this.state;
    const dataLen = data.length;
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Text>虚拟列表</Text>
        </View>
        <VirtualList
          style={{backgroundColor: 'yellow'}}
          height={300}
          ref={this.$ref}
          width="100%"
          itemData={data}
          itemCount={dataLen}
          itemSize={100}
          // onScrollNative={this.onScrollNative}
          // onScroll={this.onScroll}
          overscanCount={10}
          scrollWithAnimation
        >
          {Row}
        </VirtualList>
      </View>
    );
  }
}
