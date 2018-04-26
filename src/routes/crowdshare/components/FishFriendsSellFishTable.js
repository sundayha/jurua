/**
 * 创建人： 张博
 * 时间： 2018-04-25 下午4:36
 * 功能描述：渔友出鱼列表
 */
import React from 'react';
import {connect} from 'react-redux';
import {Table, Divider} from 'antd';
import {sagaPost} from '../../../js/sagaUtil';
import {cSFindFishFriendsSellFishTable, cSFindFishFriendsSellFishTableLoading} from '../modules/fishFriendsSellFish';
import {FIND_FISH_FRIENDS_SELL_FISH_TABLE} from '../../../constants/url';
import {messages} from '../../../js/sysMsgUtil';
import {DECIMAL_DIGITS_MONEY} from '../../../constants/sysConstants';
import {toDecimal} from '../../../js/globalJs';

@connect(
    (state) => {
        return {
            fishFriendsSellFish: state.getIn(['appReducers', 'fishFriendsSellFish']),
            msgReducer: state.getIn(['appReducers', 'msgReducer']),
        }
    }
)
class FishFriendsSellFishTable extends React.Component {

    componentWillMount() {
        const params = {
            query: {}
        };
        this.mergeFindFishFriendsSellFishTable(params);
    }

    // 点击分页
    tableOnChange = (pagination, filters, sorter) => {
        const params = {
            "current": pagination.current,
            "pageSize": pagination.pageSize,
            "query": {},
        };
        this.mergeFindFishFriendsSellFishTable(params);
    };

    /**
     * 创建人： 张博
     * 时间： 2018/4/26 上午10:37
     * 参数：params 分页参数
     * 功能描述：合并查询渔友出鱼列表
     */
    mergeFindFishFriendsSellFishTable(params) {
        const {dispatch} = this.props;
        dispatch(cSFindFishFriendsSellFishTableLoading());
        dispatch(sagaPost(FIND_FISH_FRIENDS_SELL_FISH_TABLE, params, cSFindFishFriendsSellFishTable));
    }

    componentWillReceiveProps(np) {
        const {dispatch} = this.props;
        if (np.msgReducer.get("statusCode")) {
            messages(np.msgReducer, dispatch);
        }
    }

    render() {
        console.log("===========渔友出鱼列表-组件渲染===========");
        const {fishFriendsSellFish} = this.props;
        const dataSource = fishFriendsSellFish.getIn(['fishFriendsSellFishTableC', 'dataSource']);
        const pagination = fishFriendsSellFish.getIn(['fishFriendsSellFishTableC', 'pagination']).toObject();
        const loading = fishFriendsSellFish.getIn(['fishFriendsSellFishTableC', 'loading']);

        const money = (text) => {

            return toDecimal(text, DECIMAL_DIGITS_MONEY);
        };

        const EditSellFish = (props) => {
            return <span onClick={() => {}}>{props.text}</span>
        };

        const action = (text, row, index) => {
            return (
                <div>
                    <span className="action-link-div">
                        <EditSellFish id={row.id} text="编辑" />
                    </span>
                    <Divider type="vertical" />
                    <span className="action-link-div">
                        <EditSellFish id={row.id} text="删除" />
                    </span>
                </div>
            )
        };

        const columns = [
            { title: 'QQ', dataIndex: 'qq'},
            { title: 'QQ名称', dataIndex: 'qqName'},
            { title: '鱼名', dataIndex: 'fishName'},
            { title: '学名', dataIndex: 'scientificName'},
            { title: '来源', dataIndex: 'provenance'},
            { title: '鱼长/cm', dataIndex: 'fishHeight'},
            { title: '价格/元', dataIndex: 'fishPrice', render: money},
            { title: '一对/一条', dataIndex: 'fishQuantity'},
            { title: '操作', render: action},
        ];
        
        return(
            <div>
                <Table dataSource={dataSource}
                       pagination={pagination}
                       columns={columns}
                       rowKey={record => record.id}
                       onChange={this.tableOnChange}
                       loading={loading}
                />
            </div>
        );
    }
}

export default FishFriendsSellFishTable;