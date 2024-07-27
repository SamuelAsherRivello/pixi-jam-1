import { EventEmitter } from 'events';

export default function nodePolyfills() {
  return {
    name: 'node-polyfills',
    resolveId(id) {
      if (id === 'events') {
        return id;
      }
    },
    load(id) {
      if (id === 'events') {
        return `export const EventEmitter = ${EventEmitter.toString()};`;
      }
    },
  };
}
