"use client"

import { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/embeds/feed.js';
    script.async = true;

    script.onload = () => {
      // Once the script is loaded, set the SubstackFeedWidget configuration
      (window as any).SubstackFeedWidget = {
        substackUrl: "peiytiffany.substack.com",
        posts: 3,
        colors: {
          primary: "#a4b4fe",
          secondary: "#c0b5ff",
          background: "#423c55",
        }
      };
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
      delete (window as any).SubstackFeedWidget;
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;
