import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import BlogRead from '../../components/crud/BlogRead';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-1 pb-2">
                            <h2>User Dashboard</h2>
                        </div>
                        <div className="col-md-3">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/user/update">Update profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-9"><BlogRead /></div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;
