import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import dayjs from 'dayjs';

import './index.scss';

interface IPrors {
  title: string;
  description: string;
  created_at: string;
  bookName: string;
  onclick: () => void;
}

export default class DocumentListNode extends Component<IPrors> {
  render() {
    return (
      <View className="documentList" onClick={this.props.onclick}>
        <Text className="documentList_title">{this.props.title}</Text>
        <Text className="documentList_description">
          {this.props.description}
        </Text>
        <Text className="documentList_time">
          {`${this.props.bookName} ${dayjs(this.props.created_at).format(
            'YYYY-MM-DD'
          )}`}
        </Text>
      </View>
    );
  }
}
