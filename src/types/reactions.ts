export const ReactionMap = {
  '+1': '👍',
  heart: '❤️',
  tada: '🎉',
  smile: '😁',
  open_mouth: '😮',
  cry: '😢',
};

export type Reaction = keyof typeof ReactionMap;
