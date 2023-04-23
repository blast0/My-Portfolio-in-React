import React from 'react';

function SocialIcon(props) {
  const { link, icon, label, image } = props;
  return (
    <a target="_blank" aria-label={label} title={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
