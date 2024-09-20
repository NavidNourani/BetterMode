import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts(
    $after: String
    $before: String
    $excludePins: Boolean
    $filterBy: [PostListFilterByInput!]
    $limit: Int!
    $offset: Int
    $orderBy: PostListOrderByEnum
    $orderByString: String
    $postTypeIds: [String!]
    $reverse: Boolean
    $spaceIds: [ID!]
    $query: String
  ) {
    posts(
      after: $after
      before: $before
      excludePins: $excludePins
      filterBy: $filterBy
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderByString: $orderByString
      postTypeIds: $postTypeIds
      reverse: $reverse
      spaceIds: $spaceIds
      query: $query
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        slug
        allowedReactions
        mappingFields {
          key
          type
          value
          __typename
        }
        fields {
          key
          value
          relationEntities {
            __typename
            medias {
              __typename
              ... on Emoji {
                __typename
                id
                text
              }
              ... on File {
                __typename
                downloadUrl
                extension
                id
                name
                size
                url
              }
              ... on Image {
                __typename
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                dominantColorHex
                downloadUrl
                dpi
                height
                id
                name
                url
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
                width
              }
            }
            members {
              __typename
              bannerId
              blockedMemberIds
              createdAt
              displayName
              email
              emailStatus
              externalId
              externalUrl
              flagged
              id
              lastSeen
              lastSeenAt
              locale
              name
              networkId
              newEmail
              overrideTeammate
              profilePicture {
                __typename
                ... on Image {
                  __typename
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  dominantColorHex
                  downloadUrl
                  dpi
                  height
                  id
                  name
                  url
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                  width
                }
              }
              profilePictureId
              relativeUrl
              roleId
              score
              staffReasons
              status
              subscribersCount
              tagline
              teammate
              updatedAt
              url
              username
              verifiedAt
            }
            posts {
              __typename
              allowedEmojis
              allowedReactions
              attachmentIds
              createdAt
              createdById
              description
              embedIds
              externalId
              externalUrl
              followersCount
              forbiddenEmojis
              forbiddenReactions
              hasMoreContent
              id
              imageIds
              isAnonymous
              isHidden
              language
              lastActivityAt
              locked
              mentionedMembers
              negativeReactions
              negativeReactionsCount
              networkId
              ownerId
              pinnedInto
              positiveReactions
              positiveReactionsCount
              postTypeId
              primaryReactionType
              publishedAt
              reactionsCount
              relativeUrl
              repliedToId
              repliedToIds
              repliesCount
              shortContent
              singleChoiceReactions
              slug
              spaceId
              status
              subscribersCount
              tagIds
              textContent
              thumbnailId
              title
              topicIds
              totalRepliesCount
              updatedAt
              url
            }
            spaces {
              __typename
              bannerId
              createdAt
              createdById
              customOrderingIndexInGroup
              description
              externalId
              externalUrl
              groupId
              hidden
              highlightedTagIds
              id
              image {
                __typename
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on Image {
                  __typename
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  dominantColorHex
                  downloadUrl
                  dpi
                  height
                  id
                  name
                  url
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                  width
                }
              }
              imageId
              inviteOnly
              isHomepage
              isNewUserHomepage
              isReturningUserHomepage
              key
              layout
              membersCount
              name
              networkId
              nonAdminsCanInvite
              postsCount
              private
              relativeUrl
              slug
              subscribersCount
              type
              updatedAt
              url
              whoCanPost
              whoCanReact
              whoCanReply
            }
            tags {
              __typename
              description
              id
              slug
              spaceId
              title
            }
          }
          __typename
        }
        subscribersCount
        postTypeId
        reactionsCount
        hasMoreContent
        isAnonymous
        isHidden
        shortContent
        createdAt
        publishedAt
        ownerId
        createdById
        status
        spaceId
        imageIds
        pinnedInto
        repliesCount
        totalRepliesCount
        locked
        repliedToIds
        repliedToId
        title
        description
        thumbnail {
          ... on Image {
            __typename
            id
            url
            width
            height
            dominantColorHex
            dpi
            cropHeight
            cropWidth
            cropX
            cropY
            cropZoom
            urls {
              __typename
              full
              large
              medium
              small
              thumb
            }
          }
          ... on Emoji {
            __typename
            id
            text
          }
          ... on Glyph {
            __typename
            id
            text
            variant
          }
          ... on File {
            id
            name
            url
            __typename
          }
          __typename
        }
        embedIds
        mentionedMembers
        primaryReactionType
        lastActivityAt
        language
        customSeoDetail {
          description
          noIndex
          thumbnail {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
              __typename
            }
            __typename
          }
          thumbnailId
          title
          canonicalUrl
          __typename
        }
        relativeUrl
        url
        attachments {
          extension
          id
          name
          size
          url
          downloadUrl
          __typename
        }
        authMemberProps {
          context
          scopes
          subscribed
          permissions {
            name
            isAuthorized {
              authorized
              reason
              requiredPlan
              __typename
            }
            inputPermissions {
              path
              isAuthorized {
                authorized
                reason
                requiredPlan
                __typename
              }
              __typename
            }
            outputPermissions {
              path
              isAuthorized {
                authorized
                reason
                requiredPlan
                __typename
              }
              __typename
            }
            __typename
          }
          availableReplyTypes {
            __typename
            archived
            allowedEmojis
            context
            createdAt
            forbiddenEmojis
            id
            languageTemplate
            name
            description
            nativeFieldsTemplates {
              description
              thumbnailId
              title
              __typename
            }
            negativeReactions
            pluralName
            positiveReactions
            primaryReactionType
            shortContentTemplate
            singleChoiceReactions
            allowedReactions
            customReactions {
              __typename
              activeColor
              activeGlyphId
              activeName
              color
              glyphId
              key
              name
            }
            slug
            titleTemplate
            updatedAt
            mappings {
              key
              field
              type
              title
              description
              required
              isMainContent
              isSearchable
              default
              __typename
            }
          }
          canReact
          __typename
        }
        postType {
          __typename
          archived
          allowedEmojis
          context
          createdAt
          forbiddenEmojis
          id
          languageTemplate
          name
          description
          nativeFieldsTemplates {
            description
            thumbnailId
            title
            __typename
          }
          negativeReactions
          pluralName
          positiveReactions
          primaryReactionType
          shortContentTemplate
          singleChoiceReactions
          allowedReactions
          customReactions {
            __typename
            activeColor
            activeGlyphId
            activeName
            color
            glyphId
            key
            name
          }
          slug
          titleTemplate
          updatedAt
          mappings {
            key
            field
            type
            title
            description
            required
            isMainContent
            isSearchable
            default
            __typename
          }
          postFields {
            __typename
            fields {
              default
              description
              externalKeys
              key
              name
              archived
              readPrivacy {
                allow
                __typename
              }
              required
              searchable
              settings {
                key
                value
                __typename
              }
              type
              typeOptions {
                dateType
                numberType
                relationType
                richTextType
                textType
                __typename
              }
              validators {
                customErrorMessage
                validation
                value
                __typename
              }
              writePrivacy {
                allow
                __typename
              }
              items {
                description
                key
                name
                required
                type
                typeOptions {
                  dateType
                  numberType
                  relationType
                  richTextType
                  textType
                  __typename
                }
                validators {
                  customErrorMessage
                  validation
                  value
                  __typename
                }
                __typename
              }
              properties {
                description
                key
                name
                required
                type
                typeOptions {
                  dateType
                  numberType
                  relationType
                  richTextType
                  textType
                  __typename
                }
                validators {
                  customErrorMessage
                  validation
                  value
                  __typename
                }
                items {
                  description
                  key
                  name
                  required
                  type
                  typeOptions {
                    dateType
                    numberType
                    relationType
                    richTextType
                    textType
                    __typename
                  }
                  validators {
                    customErrorMessage
                    validation
                    value
                    __typename
                  }
                  __typename
                }
                properties {
                  description
                  key
                  name
                  required
                  type
                  typeOptions {
                    dateType
                    numberType
                    relationType
                    richTextType
                    textType
                    __typename
                  }
                  validators {
                    customErrorMessage
                    validation
                    value
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
          }
          validReplyTypes {
            __typename
            archived
            allowedEmojis
            context
            createdAt
            forbiddenEmojis
            id
            languageTemplate
            name
            description
            nativeFieldsTemplates {
              description
              thumbnailId
              title
              __typename
            }
            negativeReactions
            pluralName
            positiveReactions
            primaryReactionType
            shortContentTemplate
            singleChoiceReactions
            allowedReactions
            customReactions {
              __typename
              activeColor
              activeGlyphId
              activeName
              color
              glyphId
              key
              name
            }
            slate {
              rootBlock
              blocks {
                id
                name
                props
                extraProps
                children
                output
                __typename
              }
              restrictions {
                nonEditableBlocks
                lockedChildrenBlocks
                nonRemovableBlocks
                __typename
              }
              __typename
            }
            slug
            titleTemplate
            updatedAt
            mappings {
              key
              field
              type
              title
              description
              required
              isMainContent
              isSearchable
              default
              __typename
            }
            postFields {
              __typename
            }
            icon {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
                __typename
              }
              __typename
            }
            validReplyTypes {
              __typename
              archived
              allowedEmojis
              context
              createdAt
              forbiddenEmojis
              id
              languageTemplate
              name
              description
              nativeFieldsTemplates {
                description
                thumbnailId
                title
                __typename
              }
              negativeReactions
              pluralName
              positiveReactions
              primaryReactionType
              shortContentTemplate
              singleChoiceReactions
              allowedReactions
              customReactions {
                __typename
                activeColor
                activeGlyphId
                activeName
                color
                glyphId
                key
                name
              }
              slug
              titleTemplate
              updatedAt
              mappings {
                key
                field
                type
                title
                description
                required
                isMainContent
                isSearchable
                default
                __typename
              }
            }
            authMemberProps {
              context
              scopes
              __typename
            }
          }
        }
        owner {
          __typename
          member {
            displayName
            name
            id
            locale
            profilePictureId
            bannerId
            status
            username
            email
            emailStatus
            newEmail
            tagline
            lastSeenAt
            createdAt
            updatedAt
            relativeUrl
            url
            externalId
            roleId
            flagged
            teammate
            staffReasons
            profilePicture {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
                __typename
              }
              __typename
            }
            badges {
              backgroundColor
              badgeId
              imageId
              longDescription
              text
              shortDescription
              textColor
              type
              badge {
                active
                backgroundColor
                daysUntilExpired
                id
                imageId
                longDescription
                name
                shortDescription
                textColor
                text
                type
                settings {
                  key
                  value
                  __typename
                }
                image {
                  ... on Image {
                    __typename
                    id
                    url
                    width
                    height
                    dominantColorHex
                    dpi
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                  }
                  ... on Emoji {
                    __typename
                    id
                    text
                  }
                  ... on Glyph {
                    __typename
                    id
                    text
                    variant
                  }
                  ... on File {
                    id
                    name
                    url
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
        }
        tags {
          description
          id
          slug
          title
          __typename
        }
        embeds {
          author
          author_url
          description
          html
          id
          provider_name
          thumbnail_height
          thumbnail_url
          thumbnail_width
          title
          type
          url
          __typename
        }
        mentions {
          displayName
          name
          id
          locale
          profilePictureId
          bannerId
          status
          username
          email
          emailStatus
          newEmail
          tagline
          lastSeenAt
          createdAt
          updatedAt
          relativeUrl
          url
          externalId
          roleId
          flagged
          teammate
          staffReasons
          __typename
        }
        space {
          id
          networkId
          name
          description
          slug
          type
          layout
          isHomepage
          address {
            path
            exact
            editable
            __typename
          }
          createdById
          groupId
          imageId
          bannerId
          membersCount
          createdAt
          updatedAt
          private
          hidden
          inviteOnly
          nonAdminsCanInvite
          customOrderingIndexInGroup
          whoCanPost
          whoCanReact
          whoCanReply
          customSeoDetail {
            description
            noIndex
            thumbnail {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
                __typename
              }
              __typename
            }
            thumbnailId
            title
            __typename
          }
          relativeUrl
          url
          postsCount
          image {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
              __typename
            }
            __typename
          }
          banner {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
              __typename
            }
            __typename
          }
          highlightedTags {
            description
            id
            slug
            title
            __typename
          }
          collection {
            id
            slug
            name
            description
            createdAt
            relativeUrl
            url
            __typename
          }
          authMemberProps {
            context
            lastReadAt
            membershipStatus
            scopes
            unreadPostsCount
            subscribed
            permissions {
              name
              isAuthorized {
                authorized
                reason
                requiredPlan
                __typename
              }
              inputPermissions {
                path
                isAuthorized {
                  authorized
                  reason
                  requiredPlan
                  __typename
                }
                __typename
              }
              outputPermissions {
                path
                isAuthorized {
                  authorized
                  reason
                  requiredPlan
                  __typename
                }
                __typename
              }
              __typename
            }
            availablePostTypes {
              __typename
              archived
              allowedEmojis
              context
              createdAt
              forbiddenEmojis
              id
              languageTemplate
              name
              description
              nativeFieldsTemplates {
                description
                thumbnailId
                title
                __typename
              }
              negativeReactions
              pluralName
              positiveReactions
              primaryReactionType
              shortContentTemplate
              singleChoiceReactions
              allowedReactions
              customReactions {
                __typename
                activeColor
                activeGlyphId
                activeName
                color
                glyphId
                key
                name
              }
              slug
              titleTemplate
              updatedAt
              mappings {
                key
                field
                type
                title
                description
                required
                isMainContent
                isSearchable
                default
                __typename
              }
            }
            __typename
          }
          slate {
            rootBlock
            blocks {
              id
              name
              props
              extraProps
              children
              output
              __typename
            }
            restrictions {
              nonEditableBlocks
              lockedChildrenBlocks
              nonRemovableBlocks
              __typename
            }
            __typename
          }
          __typename
        }
        reactions {
          count
          reacted
          reaction
          participants(limit: 10) {
            nodes {
              participant {
                id
                name
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        replies(limit: 2, reverse: true) {
          nodes {
            id
            slug
            mappingFields {
              key
              type
              value
              __typename
            }
            fields {
              key
              value
              relationEntities {
                __typename
                medias {
                  __typename
                  ... on Emoji {
                    __typename
                    id
                    text
                  }
                  ... on File {
                    __typename
                    downloadUrl
                    extension
                    id
                    name
                    size
                    url
                  }
                  ... on Image {
                    __typename
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    dominantColorHex
                    downloadUrl
                    dpi
                    height
                    id
                    name
                    url
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                    width
                  }
                }
                members {
                  __typename
                  bannerId
                  blockedMemberIds
                  createdAt
                  displayName
                  email
                  emailStatus
                  externalId
                  externalUrl
                  flagged
                  id
                  lastSeen
                  lastSeenAt
                  locale
                  name
                  networkId
                  newEmail
                  overrideTeammate
                  profilePicture {
                    __typename
                    ... on Image {
                      __typename
                      cropHeight
                      cropWidth
                      cropX
                      cropY
                      cropZoom
                      dominantColorHex
                      downloadUrl
                      dpi
                      height
                      id
                      name
                      url
                      urls {
                        __typename
                        full
                        large
                        medium
                        small
                        thumb
                      }
                      width
                    }
                  }
                  profilePictureId
                  relativeUrl
                  roleId
                  score
                  staffReasons
                  status
                  subscribersCount
                  tagline
                  teammate
                  updatedAt
                  url
                  username
                  verifiedAt
                }
                posts {
                  __typename
                  allowedEmojis
                  allowedReactions
                  attachmentIds
                  createdAt
                  createdById
                  description
                  embedIds
                  externalId
                  externalUrl
                  followersCount
                  forbiddenEmojis
                  forbiddenReactions
                  hasMoreContent
                  id
                  imageIds
                  isAnonymous
                  isHidden
                  language
                  lastActivityAt
                  locked
                  mentionedMembers
                  negativeReactions
                  negativeReactionsCount
                  networkId
                  ownerId
                  pinnedInto
                  positiveReactions
                  positiveReactionsCount
                  postTypeId
                  primaryReactionType
                  publishedAt
                  reactionsCount
                  relativeUrl
                  repliedToId
                  repliedToIds
                  repliesCount
                  shortContent
                  singleChoiceReactions
                  slug
                  spaceId
                  status
                  subscribersCount
                  tagIds
                  textContent
                  thumbnailId
                  title
                  topicIds
                  totalRepliesCount
                  updatedAt
                  url
                }
                spaces {
                  __typename
                  bannerId
                  createdAt
                  createdById
                  customOrderingIndexInGroup
                  description
                  externalId
                  externalUrl
                  groupId
                  hidden
                  highlightedTagIds
                  id
                  image {
                    __typename
                    ... on Emoji {
                      __typename
                      id
                      text
                    }
                    ... on Image {
                      __typename
                      cropHeight
                      cropWidth
                      cropX
                      cropY
                      cropZoom
                      dominantColorHex
                      downloadUrl
                      dpi
                      height
                      id
                      name
                      url
                      urls {
                        __typename
                        full
                        large
                        medium
                        small
                        thumb
                      }
                      width
                    }
                  }
                  imageId
                  inviteOnly
                  isHomepage
                  isNewUserHomepage
                  isReturningUserHomepage
                  key
                  layout
                  membersCount
                  name
                  networkId
                  nonAdminsCanInvite
                  postsCount
                  private
                  relativeUrl
                  slug
                  subscribersCount
                  type
                  updatedAt
                  url
                  whoCanPost
                  whoCanReact
                  whoCanReply
                }
                tags {
                  __typename
                  description
                  id
                  slug
                  spaceId
                  title
                }
              }
              __typename
            }
            subscribersCount
            postTypeId
            reactionsCount
            hasMoreContent
            isAnonymous
            isHidden
            shortContent
            createdAt
            publishedAt
            ownerId
            createdById
            status
            spaceId
            imageIds
            pinnedInto
            repliesCount
            totalRepliesCount
            locked
            repliedToIds
            repliedToId
            title
            description
            thumbnail {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
                __typename
              }
              __typename
            }
            embedIds
            mentionedMembers
            primaryReactionType
            lastActivityAt
            language
            customSeoDetail {
              description
              noIndex
              thumbnail {
                ... on Image {
                  __typename
                  id
                  url
                  width
                  height
                  dominantColorHex
                  dpi
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                }
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on Glyph {
                  __typename
                  id
                  text
                  variant
                }
                ... on File {
                  id
                  name
                  url
                  __typename
                }
                __typename
              }
              thumbnailId
              title
              canonicalUrl
              __typename
            }
            relativeUrl
            url
            attachments {
              extension
              id
              name
              size
              url
              downloadUrl
              __typename
            }
            authMemberProps {
              context
              scopes
              subscribed
              permissions {
                name
                isAuthorized {
                  authorized
                  reason
                  requiredPlan
                  __typename
                }
                inputPermissions {
                  path
                  isAuthorized {
                    authorized
                    reason
                    requiredPlan
                    __typename
                  }
                  __typename
                }
                outputPermissions {
                  path
                  isAuthorized {
                    authorized
                    reason
                    requiredPlan
                    __typename
                  }
                  __typename
                }
                __typename
              }
              availableReplyTypes {
                __typename
                archived
                allowedEmojis
                context
                createdAt
                forbiddenEmojis
                id
                languageTemplate
                name
                description
                nativeFieldsTemplates {
                  description
                  thumbnailId
                  title
                  __typename
                }
                negativeReactions
                pluralName
                positiveReactions
                primaryReactionType
                shortContentTemplate
                singleChoiceReactions
                allowedReactions
                customReactions {
                  __typename
                  activeColor
                  activeGlyphId
                  activeName
                  color
                  glyphId
                  key
                  name
                }
                slug
                titleTemplate
                updatedAt
                mappings {
                  key
                  field
                  type
                  title
                  description
                  required
                  isMainContent
                  isSearchable
                  default
                  __typename
                }
              }
              canReact
              __typename
            }
            owner {
              __typename
              member {
                displayName
                name
                id
                locale
                profilePictureId
                bannerId
                status
                username
                email
                emailStatus
                newEmail
                tagline
                lastSeenAt
                createdAt
                updatedAt
                relativeUrl
                url
                externalId
                roleId
                flagged
                teammate
                staffReasons
                profilePicture {
                  ... on Image {
                    __typename
                    id
                    url
                    width
                    height
                    dominantColorHex
                    dpi
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                  }
                  ... on Emoji {
                    __typename
                    id
                    text
                  }
                  ... on Glyph {
                    __typename
                    id
                    text
                    variant
                  }
                  ... on File {
                    id
                    name
                    url
                    __typename
                  }
                  __typename
                }
                badges {
                  backgroundColor
                  badgeId
                  imageId
                  longDescription
                  text
                  shortDescription
                  textColor
                  type
                  badge {
                    active
                    backgroundColor
                    daysUntilExpired
                    id
                    imageId
                    longDescription
                    name
                    shortDescription
                    textColor
                    text
                    type
                    settings {
                      key
                      value
                      __typename
                    }
                    image {
                      ... on Image {
                        __typename
                        id
                        url
                        width
                        height
                        dominantColorHex
                        dpi
                        cropHeight
                        cropWidth
                        cropX
                        cropY
                        cropZoom
                        urls {
                          __typename
                          full
                          large
                          medium
                          small
                          thumb
                        }
                      }
                      ... on Emoji {
                        __typename
                        id
                        text
                      }
                      ... on Glyph {
                        __typename
                        id
                        text
                        variant
                      }
                      ... on File {
                        id
                        name
                        url
                        __typename
                      }
                      __typename
                    }
                    __typename
                  }
                  __typename
                }
                __typename
              }
            }
            embeds {
              author
              author_url
              description
              html
              id
              provider_name
              thumbnail_height
              thumbnail_url
              thumbnail_width
              title
              type
              url
              __typename
            }
            mentions {
              displayName
              name
              id
              locale
              profilePictureId
              bannerId
              status
              username
              email
              emailStatus
              newEmail
              tagline
              lastSeenAt
              createdAt
              updatedAt
              relativeUrl
              url
              externalId
              roleId
              flagged
              teammate
              staffReasons
              __typename
            }
            reactions {
              count
              reacted
              reaction
              participants(limit: 10) {
                nodes {
                  participant {
                    id
                    name
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          pageInfo {
            endCursor
            hasNextPage
            __typename
          }
          totalCount
          __typename
        }
        repliedTos {
          id
          slug
          mappingFields {
            key
            type
            value
            __typename
          }
          fields {
            key
            value
            relationEntities {
              __typename
              medias {
                __typename
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on File {
                  __typename
                  downloadUrl
                  extension
                  id
                  name
                  size
                  url
                }
                ... on Image {
                  __typename
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  dominantColorHex
                  downloadUrl
                  dpi
                  height
                  id
                  name
                  url
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                  width
                }
              }
              members {
                __typename
                bannerId
                blockedMemberIds
                createdAt
                displayName
                email
                emailStatus
                externalId
                externalUrl
                flagged
                id
                lastSeen
                lastSeenAt
                locale
                name
                networkId
                newEmail
                overrideTeammate
                profilePicture {
                  __typename
                  ... on Image {
                    __typename
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    dominantColorHex
                    downloadUrl
                    dpi
                    height
                    id
                    name
                    url
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                    width
                  }
                }
                profilePictureId
                relativeUrl
                roleId
                score
                staffReasons
                status
                subscribersCount
                tagline
                teammate
                updatedAt
                url
                username
                verifiedAt
              }
              posts {
                __typename
                allowedEmojis
                allowedReactions
                attachmentIds
                createdAt
                createdById
                description
                embedIds
                externalId
                externalUrl
                followersCount
                forbiddenEmojis
                forbiddenReactions
                hasMoreContent
                id
                imageIds
                isAnonymous
                isHidden
                language
                lastActivityAt
                locked
                mentionedMembers
                negativeReactions
                negativeReactionsCount
                networkId
                ownerId
                pinnedInto
                positiveReactions
                positiveReactionsCount
                postTypeId
                primaryReactionType
                publishedAt
                reactionsCount
                relativeUrl
                repliedToId
                repliedToIds
                repliesCount
                shortContent
                singleChoiceReactions
                slug
                spaceId
                status
                subscribersCount
                tagIds
                textContent
                thumbnailId
                title
                topicIds
                totalRepliesCount
                updatedAt
                url
              }
              spaces {
                __typename
                bannerId
                createdAt
                createdById
                customOrderingIndexInGroup
                description
                externalId
                externalUrl
                groupId
                hidden
                highlightedTagIds
                id
                image {
                  __typename
                  ... on Emoji {
                    __typename
                    id
                    text
                  }
                  ... on Image {
                    __typename
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    dominantColorHex
                    downloadUrl
                    dpi
                    height
                    id
                    name
                    url
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                    width
                  }
                }
                imageId
                inviteOnly
                isHomepage
                isNewUserHomepage
                isReturningUserHomepage
                key
                layout
                membersCount
                name
                networkId
                nonAdminsCanInvite
                postsCount
                private
                relativeUrl
                slug
                subscribersCount
                type
                updatedAt
                url
                whoCanPost
                whoCanReact
                whoCanReply
              }
              tags {
                __typename
                description
                id
                slug
                spaceId
                title
              }
            }
            __typename
          }
          subscribersCount
          postTypeId
          reactionsCount
          hasMoreContent
          isAnonymous
          isHidden
          shortContent
          createdAt
          publishedAt
          ownerId
          createdById
          status
          spaceId
          imageIds
          pinnedInto
          repliesCount
          totalRepliesCount
          locked
          repliedToIds
          repliedToId
          title
          description
          thumbnail {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
              __typename
            }
            __typename
          }
          embedIds
          mentionedMembers
          primaryReactionType
          lastActivityAt
          language
          customSeoDetail {
            description
            noIndex
            thumbnail {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
                __typename
              }
              __typename
            }
            thumbnailId
            title
            canonicalUrl
            __typename
          }
          relativeUrl
          url
          owner {
            __typename
            member {
              displayName
              name
              id
              locale
              profilePictureId
              bannerId
              status
              username
              email
              emailStatus
              newEmail
              tagline
              lastSeenAt
              createdAt
              updatedAt
              relativeUrl
              url
              externalId
              roleId
              flagged
              teammate
              staffReasons
              __typename
            }
            role {
              id
              name
              type
              description
              __typename
            }
            space {
              id
              networkId
              name
              description
              slug
              type
              layout
              isHomepage
              address {
                path
                exact
                editable
                __typename
              }
              createdById
              groupId
              imageId
              bannerId
              membersCount
              createdAt
              updatedAt
              private
              hidden
              inviteOnly
              nonAdminsCanInvite
              customOrderingIndexInGroup
              whoCanPost
              whoCanReact
              whoCanReply
              customSeoDetail {
                description
                noIndex
                thumbnail {
                  ... on Image {
                    __typename
                    id
                    url
                    width
                    height
                    dominantColorHex
                    dpi
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                  }
                  ... on Emoji {
                    __typename
                    id
                    text
                  }
                  ... on Glyph {
                    __typename
                    id
                    text
                    variant
                  }
                  ... on File {
                    id
                    name
                    url
                    __typename
                  }
                  __typename
                }
                thumbnailId
                title
                __typename
              }
              relativeUrl
              url
              __typename
            }
          }
          __typename
        }
        pinnedReplies {
          id
          slug
          mappingFields {
            key
            type
            value
            __typename
          }
          fields {
            key
            value
            relationEntities {
              __typename
              medias {
                __typename
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on File {
                  __typename
                  downloadUrl
                  extension
                  id
                  name
                  size
                  url
                }
                ... on Image {
                  __typename
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  dominantColorHex
                  downloadUrl
                  dpi
                  height
                  id
                  name
                  url
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                  width
                }
              }
              members {
                __typename
                bannerId
                blockedMemberIds
                createdAt
                displayName
                email
                emailStatus
                externalId
                externalUrl
                flagged
                id
                lastSeen
                lastSeenAt
                locale
                name
                networkId
                newEmail
                overrideTeammate
                profilePicture {
                  __typename
                  ... on Image {
                    __typename
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    dominantColorHex
                    downloadUrl
                    dpi
                    height
                    id
                    name
                    url
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                    width
                  }
                }
                profilePictureId
                relativeUrl
                roleId
                score
                staffReasons
                status
                subscribersCount
                tagline
                teammate
                updatedAt
                url
                username
                verifiedAt
              }
              posts {
                __typename
                allowedEmojis
                allowedReactions
                attachmentIds
                createdAt
                createdById
                description
                embedIds
                externalId
                externalUrl
                followersCount
                forbiddenEmojis
                forbiddenReactions
                hasMoreContent
                id
                imageIds
                isAnonymous
                isHidden
                language
                lastActivityAt
                locked
                mentionedMembers
                negativeReactions
                negativeReactionsCount
                networkId
                ownerId
                pinnedInto
                positiveReactions
                positiveReactionsCount
                postTypeId
                primaryReactionType
                publishedAt
                reactionsCount
                relativeUrl
                repliedToId
                repliedToIds
                repliesCount
                shortContent
                singleChoiceReactions
                slug
                spaceId
                status
                subscribersCount
                tagIds
                textContent
                thumbnailId
                title
                topicIds
                totalRepliesCount
                updatedAt
                url
              }
              spaces {
                __typename
                bannerId
                createdAt
                createdById
                customOrderingIndexInGroup
                description
                externalId
                externalUrl
                groupId
                hidden
                highlightedTagIds
                id
                image {
                  __typename
                  ... on Emoji {
                    __typename
                    id
                    text
                  }
                  ... on Image {
                    __typename
                    cropHeight
                    cropWidth
                    cropX
                    cropY
                    cropZoom
                    dominantColorHex
                    downloadUrl
                    dpi
                    height
                    id
                    name
                    url
                    urls {
                      __typename
                      full
                      large
                      medium
                      small
                      thumb
                    }
                    width
                  }
                }
                imageId
                inviteOnly
                isHomepage
                isNewUserHomepage
                isReturningUserHomepage
                key
                layout
                membersCount
                name
                networkId
                nonAdminsCanInvite
                postsCount
                private
                relativeUrl
                slug
                subscribersCount
                type
                updatedAt
                url
                whoCanPost
                whoCanReact
                whoCanReply
              }
              tags {
                __typename
                description
                id
                slug
                spaceId
                title
              }
            }
            __typename
          }
          subscribersCount
          postTypeId
          reactionsCount
          hasMoreContent
          isAnonymous
          isHidden
          shortContent
          createdAt
          publishedAt
          ownerId
          createdById
          status
          spaceId
          imageIds
          pinnedInto
          repliesCount
          totalRepliesCount
          locked
          repliedToIds
          repliedToId
          title
          description
          thumbnail {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
              __typename
            }
            __typename
          }
          embedIds
          mentionedMembers
          primaryReactionType
          lastActivityAt
          language
          customSeoDetail {
            description
            noIndex
            thumbnail {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
                __typename
              }
              __typename
            }
            thumbnailId
            title
            canonicalUrl
            __typename
          }
          relativeUrl
          url
          attachments {
            extension
            id
            name
            size
            url
            downloadUrl
            __typename
          }
          owner {
            __typename
            member {
              displayName
              name
              id
              locale
              profilePictureId
              bannerId
              status
              username
              email
              emailStatus
              newEmail
              tagline
              lastSeenAt
              createdAt
              updatedAt
              relativeUrl
              url
              externalId
              roleId
              flagged
              teammate
              staffReasons
              profilePicture {
                ... on Image {
                  __typename
                  id
                  url
                  width
                  height
                  dominantColorHex
                  dpi
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                }
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on Glyph {
                  __typename
                  id
                  text
                  variant
                }
                ... on File {
                  id
                  name
                  url
                  __typename
                }
                __typename
              }
              badges {
                backgroundColor
                badgeId
                imageId
                longDescription
                text
                shortDescription
                textColor
                type
                badge {
                  active
                  backgroundColor
                  daysUntilExpired
                  id
                  imageId
                  longDescription
                  name
                  shortDescription
                  textColor
                  text
                  type
                  settings {
                    key
                    value
                    __typename
                  }
                  image {
                    ... on Image {
                      __typename
                      id
                      url
                      width
                      height
                      dominantColorHex
                      dpi
                      cropHeight
                      cropWidth
                      cropX
                      cropY
                      cropZoom
                      urls {
                        __typename
                        full
                        large
                        medium
                        small
                        thumb
                      }
                    }
                    ... on Emoji {
                      __typename
                      id
                      text
                    }
                    ... on Glyph {
                      __typename
                      id
                      text
                      variant
                    }
                    ... on File {
                      id
                      name
                      url
                      __typename
                    }
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
          }
          embeds {
            author
            author_url
            description
            html
            id
            provider_name
            thumbnail_height
            thumbnail_url
            thumbnail_width
            title
            type
            url
            __typename
          }
          mentions {
            displayName
            name
            id
            locale
            profilePictureId
            bannerId
            status
            username
            email
            emailStatus
            newEmail
            tagline
            lastSeenAt
            createdAt
            updatedAt
            relativeUrl
            url
            externalId
            roleId
            flagged
            teammate
            staffReasons
            __typename
          }
          __typename
        }
        __typename
      }
    }
  }
`;
