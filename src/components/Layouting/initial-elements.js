const position = { x: 0, y: 0 };

const elements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' },
    position,
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position,
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position,
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position,
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position,
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position,
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position,
  },
  {
    id: '4',
    data: { label: 'node 4' },
    position,
  },
  {
    id: '5',
    data: { label: 'node 5' },
    position,
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'output' },
    position,
  },
  { id: '7', type: 'output', data: { label: 'output' }, position: { x: 400, y: 450 } },
  { id: 'e12', source: '1', target: '2', animated: true, type: 'smoothstep' },
  { id: 'e13', source: '1', target: '3', animated: true, type: 'smoothstep' },
  { id: 'e22a', source: '2', target: '2a', animated: true, type: 'smoothstep' },
  { id: 'e22b', source: '2', target: '2b', animated: true, type: 'smoothstep' },
  { id: 'e22c', source: '2', target: '2c', animated: true, type: 'smoothstep' },
  { id: 'e2c2d', source: '2c', target: '2d', animated: true, type: 'smoothstep' },
  { id: 'e45', source: '4', target: '5', animated: true, type: 'smoothstep' },
  { id: 'e56', source: '5', target: '6', animated: true, type: 'smoothstep' },
  { id: 'e57', source: '5', target: '7', animated: true, type: 'smoothstep' },
];

export default elements;