import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AngleRight } from 'svg';

const Multicrumb = ({ links }) => {
  if (links.length < 1) return null;

  return (
    <div className="flex items-center my-3 text-sm">
      {links.map(({ path, text }, index) => (
        <div
          className="flex  breadcrumb-container  items-center mr-4"
          key={index}>
          <Link className="inline-block mr-2 text-gray-500" to={path}>
            {text}
          </Link>
          <span>
            <AngleRight color="gray" />
          </span>
        </div>
      ))}
    </div>
  );
};

Multicrumb.proptype = {
  links: PropTypes.array,
};

export default Multicrumb;
