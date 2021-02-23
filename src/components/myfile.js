import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Link, categoryUrl } from '../utils';

export default class PostFooter extends React.Component {

    renderCategoryLinks(post) {
        const categories = _.get(post, 'categories');
        if (_.isEmpty(categories)) {
            return null;
        }
        return (
            <div data-stackbit-source-file="src/components/PostFooter.js" data-stackbit-source-position="15,12:25,18">
                Categories:
                {_.map(categories, (category, index) => {
                    return (
                        <span data-stackbit-source-file="src/components/PostFooter.js" data-stackbit-source-position="19,24:22,31" key={index}>
                            {index > 0 ? ', ' : ' '}
                            <Link data-stackbit-source-file="src/components/PostFooter.js" data-stackbit-source-position="21,28:21,86" href={categoryUrl(category)}>{category.title}</Link>
                        </span>
                    );
                })}
            </div>
        );
    }

    render() {
        const post = this.props.post;
        const dateFormat = _.get(this.props, 'dateFormat', '%B %d, %Y');
        return (
            <footer data-stackbit-source-file="src/components/PostFooter.js" data-stackbit-source-position="33,12:39,21" className="post-meta">
                <time data-stackbit-source-file="src/components/PostFooter.js" data-stackbit-source-position="34,16:36,23" className="published" dateTime={moment(_.get(post, 'date')).strftime('%Y-%m-%d %H:%M')}>
                    {moment(_.get(post, 'date')).strftime(dateFormat)}
                </time>
                {_.has(post, 'author') && (', By ' + _.get(post, 'author.first_name') + ' ' + _.get(post, 'author.last_name', ''))}
                {this.renderCategoryLinks(post)}
            </footer>
        );
    }

}
