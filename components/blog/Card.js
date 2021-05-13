import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <>
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="btn btn-secondary mr-1 ml-1 mt-3">{c.name}</a>
                </Link> {''}
            </>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <>
                <Link key={i} href={`/tags/${t.slug}`}>
                    <a className="btn btn-outline-secondary mr-1 ml-1 mt-3">{t.name}</a>
                </Link> {''}
            </>
        ));

    return (
        <div className="lead pb-4">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="pt-2 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
            </header>
            <section class="card-text">

                <small class="text-muted">
                     Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.name}</a>
                    </Link>{' '} 
                    | Published {moment(blog.updatedAt).fromNow()}
                </small>
            </section>
            <section className="pb-2">
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        <div className="pb-2">{renderHTML(blog.excerpt)}</div>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-outline-info pt-2">Read more</a>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Card;
