import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import { DOCS_BASE_PATH } from 'constants/docs';
import ArrowIcon from 'icons/arrow-right.inline.svg';

const PreviousAndNextLinks = ({ previousLink, nextLink }) => (
  <div className="mt-16 flex w-full space-x-10">
    {previousLink && (
      <Link
        to={`${DOCS_BASE_PATH}${previousLink.slug}`}
        className="group mr-auto flex w-1/2 items-end justify-between rounded border border-gray-6 p-4 xs:items-baseline xs:space-x-3 xs:leading-tight xs:before:hidden"
      >
        <ArrowIcon className="mb-1.5 shrink-0 rotate-180 text-black group-hover:text-secondary-8 xs:block" />
        <div className="flex flex-col items-end">
          <span className="text-sm font-normal text-gray-5">Previous</span>
          <span className="font-semibold transition-colors duration-200 group-hover:text-secondary-8">
            {previousLink.title}
          </span>
        </div>
      </Link>
    )}
    {nextLink && (
      <Link
        to={`${DOCS_BASE_PATH}${nextLink.slug}`}
        className="group ml-auto flex w-1/2 items-end justify-between rounded border border-gray-6 p-4 text-right xs:items-baseline xs:space-x-3 xs:leading-tight xs:before:hidden"
      >
        <div className="flex flex-col items-start">
          <span className="text-sm font-normal text-gray-5">Next</span>
          <span
            className="text-left font-semibold transition-colors duration-200 group-hover:text-secondary-8"
            style={{
              display: 'webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            {nextLink.title}
          </span>
        </div>
        <ArrowIcon className="mb-1.5 shrink-0 text-black group-hover:text-secondary-8 xs:block" />
      </Link>
    )}
  </div>
);

PreviousAndNextLinks.propTypes = {
  previousLink: PropTypes.exact({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  nextLink: PropTypes.exact({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

PreviousAndNextLinks.defaultProps = {
  previousLink: null,
  nextLink: null,
};

export default PreviousAndNextLinks;
