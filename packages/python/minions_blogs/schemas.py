"""
Minions Blogs SDK — Type Schemas
Custom MinionType schemas for Minions Blogs.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

blog_type = MinionType(
    id="blogs-blog",
    name="Blog",
    slug="blog",
    description="A blog definition with its brand identity and configuration.",
    icon="📝",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="domain", type="string", label="domain"),
        FieldDefinition(name="brandVoice", type="string", label="brandVoice"),
        FieldDefinition(name="targetAudience", type="string", label="targetAudience"),
        FieldDefinition(name="niche", type="string", label="niche"),
        FieldDefinition(name="contentPillars", type="string", label="contentPillars"),
        FieldDefinition(name="postingFrequency", type="select", label="postingFrequency"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

brand_guideline_type = MinionType(
    id="blogs-brand-guideline",
    name="Brand guideline",
    slug="brand-guideline",
    description="A brand voice rule or style constraint for content.",
    icon="🎨",
    schema=[
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="rule", type="string", label="rule"),
        FieldDefinition(name="examples", type="string", label="examples"),
        FieldDefinition(name="priority", type="select", label="priority"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

audience_persona_type = MinionType(
    id="blogs-audience-persona",
    name="Audience persona",
    slug="audience-persona",
    description="A target reader persona for content planning.",
    icon="👤",
    schema=[
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="painPoints", type="string", label="painPoints"),
        FieldDefinition(name="interests", type="string", label="interests"),
        FieldDefinition(name="contentPreferences", type="string", label="contentPreferences"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

custom_types: list[MinionType] = [
    blog_type,
    brand_guideline_type,
    audience_persona_type,
]

