
export const PROMOTION_API =	process.env.NODE_ENV === 'production'
		? 'https://flipboard-web-service.flipchina.cn/api/promotion'
		: process.env.REACT_APP_PROMOTION_API;

export const WECHAT_SIGNATURE_API =	process.env.NODE_ENV === 'production'
		? 'https://flipboard-web-service.flipchina.cn/api/wechat-sdk/signature'
		: process.env.REACT_APP_WECHAT_SIGNATURE_API;

export const DOWNLOAD_URL = 'https://www.flipboard.cn/mobileapp/store';

export const WECHAT_SHARE_ICON = 'https://s.flipchina.cn/assets/logo/f-logo-f52828.png';
export const WECHAT_SHARE_DESC = '分享自 红板报 —— 一个有“想法”的新鲜事聚集地。';

export const PAGE_MAX_WIDTH = 500;

export const FLIPBOARD_HOME_PAGE = 'https://www.flipboard.cn';

export default {};
