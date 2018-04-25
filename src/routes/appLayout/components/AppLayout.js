/**
 * 创建人： 张博
 * 时间： 2018-04-24 下午3:06
 * 功能描述：布局
 */
import React from 'react';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';
import {withRouter} from 'react-router';
import {Link, BrowserRouter} from 'react-router-dom';
const {Header, Content, Sider, Footer} = Layout;
const {SubMenu} = Menu;

class AppLayout extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
    
        console.log("===========AppLayout-组件渲染===========");
        const breadcrumbNameMap = {
            '/appLayout/fishFriendsSellFish': '渔友出鱼',
            '/appLayout/fishLib': '鱼种库',
            '/appLayout/userManager': '用户管理',
        };
        console.log(BrowserRouter);
        const { location } = this.props;
        const pathSnippets = location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            if (url !== '/appLayout' && url !== '/appLayout/home') {
                return (
                    <Breadcrumb.Item key={url}>
                        <Link to={url}>
                            {breadcrumbNameMap[url]}
                        </Link>
                    </Breadcrumb.Item>
                );
            }
        });
        const breadcrumbItems = [(
            <Breadcrumb.Item key="home">
                <Link to="/appLayout/home">首页</Link>
            </Breadcrumb.Item>
        )].concat(extraBreadcrumbItems);
        
        return(
            <div className="appLayout-div">
                <Layout className="appLayout">
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo">
                            <img style={{height: '32px'}} src={require('../assets/logo.png')} />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <SubMenu key="1" title={<span><Icon type="share-alt" /><span>群共享</span></span>}>
                                <Menu.Item key="1.1"><Link to="/appLayout/fishFriendsSellFish">渔友出鱼</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="2">
                                <Icon type="hdd" />
                                <span><Link to="/appLayout/fishLib">鱼种库</Link></span>
                            </Menu.Item>
                            <SubMenu key="3" title={<span><Icon type="rocket" /><span>系统管理</span></span>}>
                                <Menu.Item key="3.1"><Link to="/appLayout/userManager">用户管理</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <div className="header-title-div">
                                <span className="title-span">南美亚马逊短鲷精灵</span>
                            </div>
                        </Header>
                        <div className="breadcrumb-div">
                            <Breadcrumb>
                                {breadcrumbItems}
                            </Breadcrumb>
                        </div>
                        <Content  style={{minHeight: 'auto', left: '0', top:'0', margin:'20px', paddingBottom:'20px',  backgroundColor: '#fff'}}>
                            {
                                this.props.children
                            }
                        </Content>
                        <Footer style={{textAlign: 'center', backgroundColor: '#f0f2f5'}}>
                            南美亚马逊短鲷精灵 ©2018 QQ群号：638534625 @群主橙子制作
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default withRouter(AppLayout);