const COUNTER = actionTypeReset('COUNTER', {
  ADD: '',
  MINUS: '',
  ADD_ASYNC: ''
});

const ROUTER = actionTypeReset('ROUTER', {
  DETAIL_ROUTER_BACK: '',
  SCAN_ENTER: '',
  REDIRECT_TO: '',
  NAVIGATE_TO: '',
  LOGOUT: '',
  SWITCH_TAB: '',
  LOGIN: ''
});

const USER = actionTypeReset('USER', {
  /** 请求刷新用户信息 */
  REFRESH_USER_INFO_REQUEST: '',
  REFRESH_USER_INFO: ''
});

const DOC = actionTypeReset('DOC', {
  /** 请求更多的文档 */
  FETCH_MORE_DOC_REQUEST: '',
  /** 请求更多的文档成功 */
  FETCH_MORE_DOC_SUCCESS: '',
  /** 没有更多文档了 */
  FETCH_MORE_DOC_END: '',
  FETCH_CREATED_DOC_REQUEST: '',
  INIT_CREATED_DOC_LIST_SUCCESS: '',
  FETCH_DOCUMENT_DETAIL_REQUEST: '',
  FETCH_DOCUMENT_DETAIL_SUCCESS: '',
  FETCH_DOCUMENT_DETAIL_ERROR: '',
  INIT_CREATED_DOC_LIST_REQUEST: '',
  INIT_CREATED_DOC_LIST_ERROR: '',
  CREATED_DOCUMENT_FETCH_ERROR: '',
  DELETE_DOCUMENT_REQUEST: '',
  /** 删除文档成功 */
  DELETE_DOCUMENT_SUCCESS: '',
  /** 最新文档页面的下拉刷新 */
  CREATED_DOCUMENT_PULL_DOWN_REFRESH_REQUEST: ''
});

const BOOK = actionTypeReset('REPO', {
  /** 获取用户创建的仓库列表 */
  FETCH_USER_BOOKS_REQUEST: '',
  /** 获取用户创建的仓库列表的结果 */
  FETCH_USER_BOOKS: ''
});

function actionTypeReset<T>(nameSpace, object: T): T {
  Object.keys(object).forEach(key => {
    object[key] = `${nameSpace}/${key}`;
  });
  return object;
}

export default {
  BOOK,
  COUNTER,
  ROUTER,
  USER,
  DOC
};
