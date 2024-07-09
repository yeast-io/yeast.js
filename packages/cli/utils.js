"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const isEmpty = (value) => {
    if (value === null || value === undefined)
        return true;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === 'string')
        return value.trim().length === 0;
    if (typeof value === 'number')
        return false;
    if (typeof value === 'object') {
        if (value instanceof Map || value instanceof Set)
            return value.size === 0;
        if (value instanceof Buffer)
            return value.length === 0;
        if (value instanceof WeakMap)
            throw new Error('WeakMap is not supported');
        if (value instanceof WeakSet)
            throw new Error('WeakSet is not supported');
        return Object.keys(value || {}).length === 0;
    }
    throw new Error('Unsupported type');
};
exports.isEmpty = isEmpty;
