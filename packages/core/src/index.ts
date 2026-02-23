/**
 * Minions Blogs SDK
 *
 * Blog definitions, settings, brand voice, and target audience profiles
 *
 * @module @minions-blogs/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Blogs.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
