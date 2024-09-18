export interface GetPostResponse {
  post: Post;
}

export interface Post {
  id: string;
  slug: string;
  allowedReactions: string[];
  mappingFields: MappingField[];
  reactions: Reaction[];
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
  thumbnail?: any;
  embedIds: any[];
  mentionedMembers: any[];
  primaryReactionType: string;
  lastActivityAt: string;
  language: string;
  customSeoDetail: CustomSeoDetail;
  relativeUrl: string;
  url: string;
  attachments: any[];
  authMemberProps: AuthMemberProps;
  postType: PostType;
  owner: Owner;
  tags: Tag[];
  embeds?: any;
  mentions: any[];
  space: Space;
  replies: Replies;
  repliedTos: any[];
  pinnedReplies: any[];
}

export interface Replies {
  nodes: any[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface PageInfo {
  endCursor?: any;
  hasNextPage: boolean;
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
  postsCount: number;
  image: Icon;
  banner: Banner;
  highlightedTags: any[];
  collection?: any;
  authMemberProps: AuthMemberProps3;
  slate: Slate2;
}

export interface Slate2 {
  rootBlock: string;
  blocks: Block2[];
  restrictions?: any;
}

export interface Block2 {
  id: string;
  name: string;
  props: string;
  extraProps?: string;
  children: string;
  output?: any;
}

export interface AuthMemberProps3 {
  context: string;
  lastReadAt: string;
  membershipStatus: string;
  scopes: string[];
  unreadPostsCount: number;
  subscribed: boolean;
  permissions: Permission2[];
  availablePostTypes: AvailablePostType[];
}

export interface AvailablePostType {
  __typename: string;
  archived: boolean;
  allowedEmojis?: any;
  context: string;
  createdAt: string;
  forbiddenEmojis?: any;
  id: string;
  languageTemplate: string;
  name: string;
  description?: any;
  nativeFieldsTemplates: NativeFieldsTemplates;
  negativeReactions?: any;
  pluralName: string;
  positiveReactions?: any;
  primaryReactionType: string;
  shortContentTemplate: string;
  singleChoiceReactions: string[];
  allowedReactions: string[];
  customReactions: CustomReaction[];
  slug: string;
  titleTemplate: string;
  updatedAt: string;
  mappings: Mapping[];
}

export interface Permission2 {
  name: string;
  isAuthorized: IsAuthorized;
  inputPermissions: InputPermission[];
  outputPermissions: any[];
}

export interface Banner {
  __typename: string;
  id: string;
  url: string;
  width: number;
  height: number;
  dominantColorHex: string;
  dpi: number;
  cropHeight?: any;
  cropWidth?: any;
  cropX: number;
  cropY: number;
  cropZoom: number;
  urls: Urls;
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

export interface Tag {
  description?: any;
  id: string;
  slug: string;
  title: string;
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

export interface PostType {
  __typename: string;
  archived: boolean;
  allowedEmojis?: any;
  context: string;
  createdAt: string;
  forbiddenEmojis?: any;
  id: string;
  languageTemplate: string;
  name: string;
  description?: any;
  nativeFieldsTemplates: NativeFieldsTemplates;
  negativeReactions?: any;
  pluralName: string;
  positiveReactions?: any;
  primaryReactionType: string;
  shortContentTemplate: string;
  singleChoiceReactions: string[];
  allowedReactions: string[];
  customReactions: CustomReaction[];
  slug: string;
  titleTemplate: string;
  updatedAt: string;
  mappings: Mapping[];
  postFields: PostFields;
  validReplyTypes: ValidReplyType[];
}

export interface ValidReplyType {
  __typename: string;
  archived: boolean;
  allowedEmojis?: any;
  context: string;
  createdAt: string;
  forbiddenEmojis?: any;
  id: string;
  languageTemplate: string;
  name: string;
  description?: any;
  nativeFieldsTemplates: NativeFieldsTemplates;
  negativeReactions?: any;
  pluralName: string;
  positiveReactions?: any;
  primaryReactionType: string;
  shortContentTemplate: string;
  singleChoiceReactions?: any;
  allowedReactions?: any;
  customReactions: any[];
  slate: Slate;
  slug: string;
  titleTemplate?: any;
  updatedAt: string;
  mappings: Mapping[];
  postFields: PostFields2;
  icon: Icon;
  validReplyTypes: AvailableReplyType[];
  authMemberProps: AuthMemberProps2;
}

export interface AuthMemberProps2 {
  context: string;
  scopes: string[];
}

export interface Icon {
  __typename: string;
  id: string;
  text: string;
  variant: string;
}

export interface PostFields2 {
  __typename: string;
}

export interface Slate {
  rootBlock: string;
  blocks: Block[];
  restrictions?: any;
}

export interface Block {
  id: string;
  name: string;
  props?: any;
  extraProps?: any;
  children: string;
  output?: any;
}

export interface PostFields {
  __typename: string;
  fields: Field2[];
}

export interface Field2 {
  default?: any;
  description?: string;
  externalKeys?: any;
  key: string;
  name: string;
  archived?: any;
  readPrivacy: ReadPrivacy;
  required?: boolean;
  searchable?: any;
  settings: Setting[];
  type: string;
  typeOptions?: TypeOption;
  validators?: any;
  writePrivacy: WritePrivacy;
  items?: any;
  properties?: any;
}

export interface WritePrivacy {
  allow: string[];
}

export interface TypeOption {
  dateType?: any;
  numberType?: any;
  relationType?: string;
  richTextType?: string;
  textType?: string;
}

export interface Setting {
  key: string;
  value: string;
}

export interface ReadPrivacy {
  allow: any[];
}

export interface CustomReaction {
  __typename: string;
  activeColor?: any;
  activeGlyphId: string;
  activeName: string;
  color?: any;
  glyphId: string;
  key: string;
  name: string;
}

export interface AuthMemberProps {
  context: string;
  scopes: string[];
  subscribed: boolean;
  permissions: Permission[];
  availableReplyTypes: AvailableReplyType[];
  canReact: boolean;
}

export interface AvailableReplyType {
  __typename: string;
  archived: boolean;
  allowedEmojis?: any;
  context: string;
  createdAt: string;
  forbiddenEmojis?: any;
  id: string;
  languageTemplate: string;
  name: string;
  description?: any;
  nativeFieldsTemplates: NativeFieldsTemplates;
  negativeReactions?: any;
  pluralName: string;
  positiveReactions?: any;
  primaryReactionType: string;
  shortContentTemplate: string;
  singleChoiceReactions?: any;
  allowedReactions?: any;
  customReactions: any[];
  slug: string;
  titleTemplate?: any;
  updatedAt: string;
  mappings: Mapping[];
}

export interface Mapping {
  key: string;
  field: string;
  type: string;
  title: string;
  description: string;
  required?: boolean;
  isMainContent?: boolean;
  isSearchable?: boolean;
  default?: any;
}

export interface NativeFieldsTemplates {
  description: string;
  thumbnailId: string;
  title: string;
}

export interface Permission {
  name: string;
  isAuthorized: IsAuthorized;
  inputPermissions: InputPermission[];
  outputPermissions: InputPermission[];
}

export interface InputPermission {
  path: string;
  isAuthorized: IsAuthorized;
}

export interface IsAuthorized {
  authorized: boolean;
  reason?: any;
  requiredPlan?: any;
}

export interface CustomSeoDetail {
  description?: any;
  noIndex: boolean;
  thumbnail?: any;
  thumbnailId?: any;
  title: string;
  canonicalUrl?: any;
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
  dominantColorHex: string;
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

export interface Reaction {
  count: number;
  reacted: boolean;
  reaction: string;
  participants: Participants;
}

export interface Participants {
  nodes: Node[];
}

export interface Node {
  participant: Participant;
}

export interface Participant {
  id: string;
  name: string;
}

export interface MappingField {
  key: string;
  type: string;
  value: string;
}
