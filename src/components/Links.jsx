import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

const Links = () => (
  <div className="flex sm:justify-around justify-between items-center pb-4 mt-4">
    {links.map(({ url, text }) => (
      <NavLink key={url} to={url}>{text}</NavLink>
    ))}
  </div>)

  export default Links;