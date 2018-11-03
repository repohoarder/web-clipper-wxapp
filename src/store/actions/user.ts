import { UserDetailSerializer } from './../../interface/interface';
import actionTypes from '../actionTypes';

const { USER } = actionTypes;

export interface RefreshUserInfoAction {
  type: string;
  playload: {
    userInfo: UserDetailSerializer;
  };
}

export const refreshUserInfo = (userInfo: UserDetailSerializer) => {
  return {
    type: USER.REFRESH_USER_INFO,
    playload: {
      userInfo
    }
  };
};