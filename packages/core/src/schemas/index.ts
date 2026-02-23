/**
 * @module @minions-blogs/sdk/schemas
 * Custom MinionType schemas for Minions Blogs.
 */

import type { MinionType } from 'minions-sdk';

export const blogType: MinionType = {
  id: 'blogs-blog',
  name: 'Blog',
  slug: 'blog',
  description: 'A blog definition with its brand identity and configuration.',
  icon: '📝',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'domain', type: 'string', label: 'domain' },
    { name: 'brandVoice', type: 'string', label: 'brandVoice' },
    { name: 'targetAudience', type: 'string', label: 'targetAudience' },
    { name: 'niche', type: 'string', label: 'niche' },
    { name: 'contentPillars', type: 'string', label: 'contentPillars' },
    { name: 'postingFrequency', type: 'select', label: 'postingFrequency' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const brandguidelineType: MinionType = {
  id: 'blogs-brand-guideline',
  name: 'Brand guideline',
  slug: 'brand-guideline',
  description: 'A brand voice rule or style constraint for content.',
  icon: '🎨',
  schema: [
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'rule', type: 'string', label: 'rule' },
    { name: 'examples', type: 'string', label: 'examples' },
    { name: 'priority', type: 'select', label: 'priority' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const audiencepersonaType: MinionType = {
  id: 'blogs-audience-persona',
  name: 'Audience persona',
  slug: 'audience-persona',
  description: 'A target reader persona for content planning.',
  icon: '👤',
  schema: [
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'painPoints', type: 'string', label: 'painPoints' },
    { name: 'interests', type: 'string', label: 'interests' },
    { name: 'contentPreferences', type: 'string', label: 'contentPreferences' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  blogType,
  brandguidelineType,
  audiencepersonaType,
];

