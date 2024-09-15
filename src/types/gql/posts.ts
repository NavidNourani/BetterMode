export interface GetPostsResponse {
  posts: Posts;
}

export interface Posts {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: PostNode[];
}

export interface PostNode {
  id: string;
  slug: string;
  mappingFields: MappingField[];
  fields: Field[];
  subscribersCount: number;
  postTypeId: string;
  reactionsCount: number;
  hasMoreContent: boolean;
  isAnonymous: boolean;
  isHidden: boolean;
  shortContent: string;
  createdAt: string;
  publishedAt: string;
  ownerId: string;
  createdById: string;
  status: string;
  spaceId: string;
  imageIds: any[];
  pinnedInto: any[];
  repliesCount: number;
  totalRepliesCount: number;
  locked: boolean;
  repliedToIds: any[];
  repliedToId?: any;
  title: string;
  description: string;
  textContent: string;
  thumbnail?: any;
  embedIds: any[];
  mentionedMembers: any[];
  primaryReactionType: string;
  lastActivityAt: string;
  language: string;
  customSeoDetail: CustomSeoDetail;
  relativeUrl: string;
  url: string;
  owner: Owner;
  space: Space;
}

export interface Space {
  id: string;
  networkId: string;
  name: string;
  description: string;
  slug: string;
  type: string;
  layout: string;
  isHomepage: boolean;
  address: Address;
  createdById: string;
  groupId?: any;
  imageId: string;
  bannerId: string;
  membersCount: number;
  createdAt: string;
  updatedAt: string;
  private: boolean;
  hidden: boolean;
  inviteOnly: boolean;
  nonAdminsCanInvite: boolean;
  customOrderingIndexInGroup: number;
  whoCanPost?: any;
  whoCanReact?: any;
  whoCanReply?: any;
  customSeoDetail: CustomSeoDetail2;
  relativeUrl: string;
  url: string;
  image: Image;
}

export interface Image {
  __typename: string;
  id: string;
  text: string;
  variant: string;
}

export interface CustomSeoDetail2 {
  description?: any;
  noIndex?: any;
  thumbnail?: any;
  thumbnailId?: any;
  title?: any;
}

export interface Address {
  path: string;
  exact: boolean;
  editable: boolean;
}

export interface Owner {
  __typename: string;
  member: Member;
}

export interface Member {
  displayName?: any;
  name: string;
  id: string;
  locale: string;
  profilePictureId: string;
  bannerId?: any;
  status: string;
  username: string;
  email: string;
  emailStatus: string;
  newEmail?: any;
  tagline?: any;
  lastSeenAt: string;
  createdAt: string;
  updatedAt: string;
  relativeUrl: string;
  url: string;
  externalId?: any;
  roleId: string;
  flagged: boolean;
  teammate: boolean;
  staffReasons: string[];
  profilePicture: ProfilePicture;
  badges: any[];
}

export interface ProfilePicture {
  __typename: string;
  id: string;
  url: string;
  width?: any;
  height?: any;
  dominantColorHex?: any;
  dpi?: any;
  cropHeight?: any;
  cropWidth?: any;
  cropX: number;
  cropY: number;
  cropZoom: number;
  urls: Urls;
}

export interface CustomSeoDetail {
  description?: any;
  noIndex?: any;
  thumbnail?: Thumbnail;
  thumbnailId?: string;
  title?: any;
  canonicalUrl?: any;
}

export interface Thumbnail {
  __typename: string;
  id: string;
  url: string;
  width: number;
  height: number;
  dominantColorHex?: any;
  dpi: number;
  cropHeight?: any;
  cropWidth?: any;
  cropX: number;
  cropY: number;
  cropZoom: number;
  urls: Urls;
}

export interface Field {
  key: string;
  value: string;
  relationEntities?: RelationEntity;
}

export interface RelationEntity {
  __typename: string;
  medias: Media[];
  members: any[];
  posts: any[];
  spaces: any[];
  tags: any[];
}

export interface Media {
  __typename: string;
  cropHeight?: any;
  cropWidth?: any;
  cropX: number;
  cropY: number;
  cropZoom: number;
  dominantColorHex?: any;
  downloadUrl: string;
  dpi: number;
  height: number;
  id: string;
  name: string;
  url: string;
  urls: Urls;
  width: number;
}

export interface Urls {
  __typename: string;
  full: string;
  large: string;
  medium: string;
  small: string;
  thumb: string;
}

export interface MappingField {
  key: string;
  type: string;
  value: string;
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

// {
//   "id": "8iVzQjfb8ZVxyJE",
//   "slug": "customer-success-what-it-means-why-it-matters",
//   "mappingFields": [
//     {
//       "key": "title",
//       "type": "text",
//       "value": "\"Customer Success: What It Means & Why It Matters\""
//     },
//     {
//       "key": "content",
//       "type": "html",
//       "value": "\"<p>Over the last decade, cultural trends, customer expectations, and business realities have combined to compel more and more businesses to prioritize customer success. Companies understand that, for customers to continue growing their lifetime value, they first need to feel successful with the product.</p><p>However, a lot of confusion has sprung up around how to ensure customers are successful: Are there specific metrics one needs to follow? Is there a playbook that companies can adopt to ensure success? Similarly, is customer success any different from other functions, such as customer support?</p><p>Below, we share an overview of everything you need to know about customer success.</p><h2 class=\\\"text-xl\\\">What is customer success?</h2><p>Customer success is the effort a business undertakes to help its customers be most successful, both with its product and in their own business operations.</p><p>However, it is no longer sufficient to assume that the company as a whole will take on customer success management; for your customers to shine, you'll need someone (or a team) to be wholly focused on it. Dedicated customer success teams take a proactive, data-led approach to helping customers more effectively use a product.</p><p>Depending on the structure and maturity of the team, it may handle everything from trial user engagement through renewal. This comprehensive approach helps businesses reach several top-level goals, including:</p><ul><li><p>Increasing renewal sales and revenue.</p></li><li><p>Inspiring customer loyalty and retention.</p></li><li><p>Boosting lifetime customer value and annual recurring revenue (ARR).</p></li><li><p>Reducing churn.</p></li></ul><p>Customer success increases the likelihood that users will stick around by maximizing their mastery of the product. For subscription-based businesses, that's a vital component of growing monthly recurring revenue (MRR). For companies that don't follow that particular model, the value of customer success shows itself with leading product insights and word-of-mouth marketing.</p><p>However, customer success experiences overlap with other customer-facing functions, such as customer support, customer experience, and even account management. As easy as it is to talk about what customer success <em>is</em>, it's equally important to distinguish what it <em>isn't.</em></p>\""
//     },
//     {
//       "key": "previewImageId",
//       "type": "image",
//       "value": "null"
//     }
//   ],
//   "fields": [
//     {
//       "key": "coverImage",
//       "value": "{\"id\":\"T3rYVICwCkOYqSdmHmy08\",\"relation\":\"Media\"}",
//       "relationEntities": {
//         "__typename": "CustomFieldRelation",
//         "medias": [
//           {
//             "__typename": "Image",
//             "cropHeight": null,
//             "cropWidth": null,
//             "cropX": 0,
//             "cropY": 0,
//             "cropZoom": 0,
//             "dominantColorHex": null,
//             "downloadUrl": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?auto=compress,format&dl",
//             "dpi": 46078,
//             "height": 810,
//             "id": "T3rYVICwCkOYqSdmHmy08",
//             "name": "new png.png",
//             "url": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?fit=max&w=1000&auto=compress,format",
//             "urls": {
//               "__typename": "MediaUrls",
//               "full": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?auto=compress,format",
//               "large": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?fit=max&w=2000&auto=compress,format",
//               "medium": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?fit=max&w=1000&auto=compress,format",
//               "small": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?fit=max&w=500&auto=compress,format",
//               "thumb": "https://tribe-s3-production.imgix.net/T3rYVICwCkOYqSdmHmy08?fit=max&w=200&auto=compress,format"
//             },
//             "width": 1440
//           }
//         ],
//         "members": [],
//         "posts": [],
//         "spaces": [],
//         "tags": []
//       }
//     },
//     {
//       "key": "title",
//       "value": "\"Customer Success: What It Means & Why It Matters\"",
//       "relationEntities": null
//     },
//     {
//       "key": "content",
//       "value": "\"<p>Over the last decade, cultural trends, customer expectations, and business realities have combined to compel more and more businesses to prioritize customer success. Companies understand that, for customers to continue growing their lifetime value, they first need to feel successful with the product.</p><p>However, a lot of confusion has sprung up around how to ensure customers are successful: Are there specific metrics one needs to follow? Is there a playbook that companies can adopt to ensure success? Similarly, is customer success any different from other functions, such as customer support?</p><p>Below, we share an overview of everything you need to know about customer success.</p><h2 class=\\\"text-xl\\\">What is customer success?</h2><p>Customer success is the effort a business undertakes to help its customers be most successful, both with its product and in their own business operations.</p><p>However, it is no longer sufficient to assume that the company as a whole will take on customer success management; for your customers to shine, you'll need someone (or a team) to be wholly focused on it. Dedicated customer success teams take a proactive, data-led approach to helping customers more effectively use a product.</p><p>Depending on the structure and maturity of the team, it may handle everything from trial user engagement through renewal. This comprehensive approach helps businesses reach several top-level goals, including:</p><ul><li><p>Increasing renewal sales and revenue.</p></li><li><p>Inspiring customer loyalty and retention.</p></li><li><p>Boosting lifetime customer value and annual recurring revenue (ARR).</p></li><li><p>Reducing churn.</p></li></ul><p>Customer success increases the likelihood that users will stick around by maximizing their mastery of the product. For subscription-based businesses, that's a vital component of growing monthly recurring revenue (MRR). For companies that don't follow that particular model, the value of customer success shows itself with leading product insights and word-of-mouth marketing.</p><p>However, customer success experiences overlap with other customer-facing functions, such as customer support, customer experience, and even account management. As easy as it is to talk about what customer success <em>is</em>, it's equally important to distinguish what it <em>isn't.</em></p>\"",
//       "relationEntities": null
//     },
//     {
//       "key": "featured",
//       "value": "false",
//       "relationEntities": null
//     }
//   ],
//   "subscribersCount": 1,
//   "postTypeId": "DsiFoKTCQgZ7EqX",
//   "reactionsCount": 0,
//   "hasMoreContent": true,
//   "isAnonymous": false,
//   "isHidden": false,
//   "shortContent": "<p>Over the last decade, cultural trends, customer expectations, and business realities have combined to compel more and more businesses to prioritize customer success. Companies understand that, for ...</p>",
//   "createdAt": "2024-09-07T20:34:52.993Z",
//   "publishedAt": "2024-09-07T20:34:53.241Z",
//   "ownerId": "r8jUTa7LyN",
//   "createdById": "r8jUTa7LyN",
//   "status": "PUBLISHED",
//   "spaceId": "ght2FaPCwPb5",
//   "imageIds": [],
//   "pinnedInto": [],
//   "repliesCount": 0,
//   "totalRepliesCount": 0,
//   "locked": false,
//   "repliedToIds": [],
//   "repliedToId": null,
//   "title": "Customer Success: What It Means & Why It Matters",
//   "description": "Over the last decade, cultural trends, customer expectations, and business realities have combined to compel more and more businesses to prioritize customer success. Companies understand that, for ...",
//   "textContent": "Over the last decade, cultural trends, customer expectations, and business realities have combined to compel more and more businesses to prioritize customer success. Companies understand that, for customers to continue growing their lifetime value, they first need to feel successful with the product.\nHowever, a lot of confusion has sprung up around how to ensure customers are successful: Are there specific metrics one needs to follow? Is there a playbook that companies can adopt to ensure success? Similarly, is customer success any different from other functions, such as customer support?\nBelow, we share an overview of everything you need to know about customer success.\nWhat is customer success?\nCustomer success is the effort a business undertakes to help its customers be most successful, both with its product and in their own business operations.\nHowever, it is no longer sufficient to assume that the company as a whole will take on customer success management; for your customers to shine, you'll need someone (or a team) to be wholly focused on it. Dedicated customer success teams take a proactive, data-led approach to helping customers more effectively use a product.\nDepending on the structure and maturity of the team, it may handle everything from trial user engagement through renewal. This comprehensive approach helps businesses reach several top-level goals, including:\nIncreasing renewal sales and revenue.\nInspiring customer loyalty and retention.\nBoosting lifetime customer value and annual recurring revenue (ARR).\nReducing churn.\nCustomer success increases the likelihood that users will stick around by maximizing their mastery of the product. For subscription-based businesses, that's a vital component of growing monthly recurring revenue (MRR). For companies that don't follow that particular model, the value of customer success shows itself with leading product insights and word-of-mouth marketing.\nHowever, customer success experiences overlap with other customer-facing functions, such as customer support, customer experience, and even account management. As easy as it is to talk about what customer success is, it's equally important to distinguish what it isn't.",
//   "thumbnail": null,
//   "embedIds": [],
//   "mentionedMembers": [],
//   "primaryReactionType": "EMOJI_BASE",
//   "lastActivityAt": "2024-09-07T20:34:53.241Z",
//   "language": "en",
//   "customSeoDetail": {
//     "description": null,
//     "noIndex": null,
//     "thumbnail": null,
//     "thumbnailId": null,
//     "title": null,
//     "canonicalUrl": null
//   },
//   "relativeUrl": "/posts-s7g9or1d/post/customer-success-what-it-means-why-it-matters-8iVzQjfb8ZVxyJE",
//   "url": "https://navid.bettermode.io/posts-s7g9or1d/post/customer-success-what-it-means-why-it-matters-8iVzQjfb8ZVxyJE",
//   "owner": {
//     "__typename": "SpaceMember",
//     "member": {
//       "displayName": null,
//       "name": "Navid Nourani",
//       "id": "r8jUTa7LyN",
//       "locale": "en-US",
//       "profilePictureId": "qBVtieqc9zfIhXECtIT1R",
//       "bannerId": null,
//       "status": "VERIFIED",
//       "username": "r8jUTa7LyN",
//       "email": "nnourani72@gmail.com",
//       "emailStatus": "verified",
//       "newEmail": null,
//       "tagline": null,
//       "lastSeenAt": "2024-09-15T17:33:33.179Z",
//       "createdAt": "2024-02-24T19:06:26.579Z",
//       "updatedAt": "2024-09-08T20:20:09.890Z",
//       "relativeUrl": "/member/r8jUTa7LyN",
//       "url": "https://navid.bettermode.io/member/r8jUTa7LyN",
//       "externalId": null,
//       "roleId": "OJyU7RRXoZ",
//       "flagged": false,
//       "teammate": true,
//       "staffReasons": [
//         "NetworkStaffRole",
//         "SpaceStaffRole"
//       ],
//       "profilePicture": {
//         "__typename": "Image",
//         "id": "qBVtieqc9zfIhXECtIT1R",
//         "url": "https://lh3.googleusercontent.com/a/ACg8ocIBY5tbGGA9LAudX1AyBM-O0-mS37GALuo3agvc5FdhVUrs=s96-c",
//         "width": null,
//         "height": null,
//         "dominantColorHex": null,
//         "dpi": null,
//         "cropHeight": null,
//         "cropWidth": null,
//         "cropX": 0,
//         "cropY": 0,
//         "cropZoom": 0,
//         "urls": {
//           "__typename": "MediaUrls",
//           "full": "https://lh3.googleusercontent.com/a/ACg8ocIBY5tbGGA9LAudX1AyBM-O0-mS37GALuo3agvc5FdhVUrs=s96-c",
//           "large": "https://lh3.googleusercontent.com/a/ACg8ocIBY5tbGGA9LAudX1AyBM-O0-mS37GALuo3agvc5FdhVUrs=s96-c",
//           "medium": "https://lh3.googleusercontent.com/a/ACg8ocIBY5tbGGA9LAudX1AyBM-O0-mS37GALuo3agvc5FdhVUrs=s96-c",
//           "small": "https://lh3.googleusercontent.com/a/ACg8ocIBY5tbGGA9LAudX1AyBM-O0-mS37GALuo3agvc5FdhVUrs=s96-c",
//           "thumb": "https://lh3.googleusercontent.com/a/ACg8ocIBY5tbGGA9LAudX1AyBM-O0-mS37GALuo3agvc5FdhVUrs=s96-c"
//         }
//       },
//       "badges": []
//     }
//   },
//   "space": {
//     "id": "ght2FaPCwPb5",
//     "networkId": "ENmgkLZt0F",
//     "name": "Posts",
//     "description": "",
//     "slug": "posts-s7g9or1d",
//     "type": "Group",
//     "layout": "DEFAULT",
//     "isHomepage": false,
//     "address": {
//       "path": "posts-s7g9or1d",
//       "exact": false,
//       "editable": true
//     },
//     "createdById": "r8jUTa7LyN",
//     "groupId": null,
//     "imageId": "icon/layout-alt-02",
//     "bannerId": "i0jefCJ80ttBSdFABvkK9",
//     "membersCount": 1,
//     "createdAt": "2024-09-07T20:34:52.785Z",
//     "updatedAt": "2024-09-07T20:34:53.568Z",
//     "private": true,
//     "hidden": true,
//     "inviteOnly": true,
//     "nonAdminsCanInvite": false,
//     "customOrderingIndexInGroup": 0,
//     "whoCanPost": null,
//     "whoCanReact": null,
//     "whoCanReply": null,
//     "customSeoDetail": {
//       "description": null,
//       "noIndex": null,
//       "thumbnail": null,
//       "thumbnailId": null,
//       "title": null
//     },
//     "relativeUrl": "/posts-s7g9or1d",
//     "url": "https://navid.bettermode.io/posts-s7g9or1d",
//     "image": {
//       "__typename": "Glyph",
//       "id": "icon/layout-alt-02",
//       "text": "layout-alt-02",
//       "variant": "icon"
//     }
//   }
// }
