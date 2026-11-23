export const DATA = {
  id: 'dsh-cervical',
  name: '颈椎病',
  prefix: 'cervical',
  label: '颈椎病',
  defaultEeriness: 2,
  gain: 0.46,
  flareChance: 0.22,
  flareGain: 20,
  triggerWeight: 1.05,
  flareWeight: 0.85,
  reliefs: [
    { id: 'heat', label: '热敷后颈', relief: 24, minutes: 30, calm: 8 },
    { id: 'lookup', label: '抬头活动', relief: 16, minutes: 25, calm: 6 },
    { id: 'massage', label: '按一按肩', relief: 18, minutes: 25, calm: 7 },
  ],
  body: {
    stiff: '脖子发僵，转头得连着肩膀一起转。',
    ache: '后颈一直到肩胛骨都酸，右手小指有点发麻；低头久了更明显。',
    flare: '一转头就晕，眼前发黑一下；手麻得握不住东西。',
  },
  voice: {
    base: '允许说话时顺便活动一下脖子；需要转头看什么的时候说一句「我转不过去」。',
    flare: '允许停下来缓一下、允许说「等一下，有点晕」；不要描述骨头。',
  },
}
