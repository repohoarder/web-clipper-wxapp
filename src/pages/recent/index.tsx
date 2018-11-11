/*eslint "no-unused-vars": ["error", { "varsIgnorePattern": "Taro|minus|goToTheEnd" }],*/
/*eslint "taro/this-props-function": 0,*/
import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.scss';
import { DocStateInterface } from 'src/store/reducers/doc';
import {
  initCreatedDocListRequest,
  createdDocumentPulldownRefreshRequest
} from '../../store/actions/doc';
import { navigateTo } from '../../store/actions/router';

import DocumentListNode from '../../components/document';
import { PageStateInterface } from '../../store/reducers/page';
import * as svg from '../../static/svg/index';

type PageStateProps = {
  doc: DocStateInterface;
  page: PageStateInterface;
};

type PageDispatchProps = {
  initCreatedDocListRequest: () => void;
  createdDocumentPulldownRefreshRequest: () => void;
  navigateTo: (param: Taro.navigateTo.Param) => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

@connect(
  ({ doc, page }) => ({
    doc,
    page
    }),
  dispatch => ({
    createdDocumentPulldownRefreshRequest() {
    dispatch(createdDocumentPulldownRefreshRequest());
    },
    initCreatedDocListRequest() {
    dispatch(initCreatedDocListRequest());
    },
    navigateTo(param: Taro.navigateTo.Param) {
    dispatch(navigateTo(param));
    }
    })
)
class Index extends Component<IProps, PageState> {
  config: Config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '最新',
    backgroundTextStyle: 'dark'
  };

  componentDidMount = () => {
    this.props.initCreatedDocListRequest();
  };

  handleClickNode = documentNode => {
    this.props.navigateTo({
      url: `/pages/recent/detail?id=${documentNode.id}&repo_id=${
        documentNode.book.id
      }`
    });
  };

  onPullDownRefresh = () => {
    this.props.createdDocumentPulldownRefreshRequest();
  };

  onReachBottom = () => {
    //todo 滚动加载
  };

  render() {
    const initStatus = this.props.page.createdDocumentPageInitStatus;
    const empty = this.props.doc.createdDocs.length === 0;
    if ((empty && initStatus.loading) || 1) {
      const tempArray = new Array(10);
      console.log(tempArray);
      return (
        <View className="skeleton__page">
          <View>
            {tempArray.map((o, index) => {
              return (
                <View key={index} className="skeleton__node">
                  <View class="skeleton__title" />
                  <View class="skeleton__content" />
                  <View class="skeleton__content" />
                  <View class="skeleton__info" />
                </View>
              );
            })}
          </View>
        </View>
      );
    }
    if (empty && initStatus.error) {
      return (
        <View className="info-page">
          <Image src={svg.error} />
          <View>加载错误</View>
        </View>
      );
    }
    if (empty) {
      return (
        <View className="info-page">
          <Image src={svg.empty} />
          <View>还没有数据</View>
        </View>
      );
    }
    return (
      <View>
        {this.props.doc.createdDocs.map(o => {
          return (
            <DocumentListNode
              key={o.id}
              title={o.title}
              bookName={o.book.name}
              description={o.description}
              created_at={o.created_at}
              onclick={this.handleClickNode.bind(this, o)}
            />
          );
        })}
        {/* <View className="loading-footer">正在加载...</View>
        <View className="footer">我是有底线的</View> */}
      </View>
    );
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>;
