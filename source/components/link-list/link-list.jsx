import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/heading';
import List from '../../components/list';
import Link from '../../components/link';

const LinkList = ({ heading, links }) => (
  <div className="link-list">
    <Heading level={3} className="link-list__heading">
      {heading}
    </Heading>
    <List>
      {links.map((link, index) => (
        <Link key={link.id || index} href={link.href}>
          {link.text}
        </Link>
      ))}
    </List>
  </div>
);

LinkList.propTypes = {
  heading: PropTypes.string,
  links: PropTypes.array
};
export default LinkList;
