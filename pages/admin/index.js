import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import BlogRead from '../../components/crud/BlogRead';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-1 pb-3">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-3">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                        <a href="/admin/crud/blog">Create Blog</a>    
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blogs</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-9"><BlogRead /></div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
