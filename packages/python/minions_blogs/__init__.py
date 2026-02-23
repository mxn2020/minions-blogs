"""
Minions Blogs Python SDK

Blog definitions, settings, brand voice, and target audience profiles
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Blogs.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
