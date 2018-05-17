/**
 * 创建人： 张博
 * 时间： 2018-04-25 下午4:36
 * 功能描述：渔友出鱼列表
 */
import React from 'react';
import {connect} from 'react-redux';
import {Table, Divider, Button, Popconfirm} from 'antd';
import {sagaPost} from '../../../js/sagaUtil';
import {cSFindFishFriendsSellFishTable, cSFindFishFriendsSellFishTableLoading, cSUpdateFishFriendsSellFishSetData, cSDeleteFishFriendsSellFish} from '../modules/fishFriendsSellFish';
import {FIND_FISH_FRIENDS_SELL_FISH_TABLE, EXPORT_FISH_FRIENDS_SELL_FISH_EXCEL} from '../../../constants/url';
import {messages} from '../../../js/sysMsgUtil';
import {DECIMAL_DIGITS_MONEY} from '../../../constants/sysConstants';
import {toDecimal} from '../../../js/globalJs';
import {push} from 'react-router-redux';

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
    mergeFindFishFriendsSellFishTable = (params) => {
        const {dispatch} = this.props;
        dispatch(cSFindFishFriendsSellFishTableLoading());
        dispatch(sagaPost(FIND_FISH_FRIENDS_SELL_FISH_TABLE, params, cSFindFishFriendsSellFishTable));
    };

    componentWillReceiveProps(np) {
        const {dispatch} = this.props;
        if (np.msgReducer.get("statusCode")) {
            if (np.msgReducer.get("statusCode") === '1000000') {
                dispatch(cSFindFishFriendsSellFishTableLoading(false));
            }
            messages(np.msgReducer, dispatch);
        }
    }

    downloadFile = () => {
        this.refs.downloadFile.src = encodeURI(EXPORT_FISH_FRIENDS_SELL_FISH_EXCEL);
    };

    editSellFish = (rowData) => {
        const {dispatch} = this.props;
        dispatch(cSUpdateFishFriendsSellFishSetData(rowData));
        dispatch(push('/appLayout/AddFishFriendsSellFishForm/update'));
    };

    deleteSellFish = (rowData) => {
        const {dispatch} = this.props;
        dispatch(cSDeleteFishFriendsSellFish(rowData));
    };

    render() {
        console.log("===========渔友出鱼列表-组件渲染===========");
        const {fishFriendsSellFish, dispatch} = this.props;
        const dataSource = fishFriendsSellFish.getIn(['fishFriendsSellFishTableC', 'dataSource']);
        const pagination = fishFriendsSellFish.getIn(['fishFriendsSellFishTableC', 'pagination']).toObject();
        const loading = fishFriendsSellFish.getIn(['fishFriendsSellFishTableC', 'loading']);

        const fishQuantity = (text) => {
            let returnText;
            switch (text) {
                case '0':
                    returnText = '一对';
                    break;
                case '1':
                    returnText = '一条/公母随机';
                    break;
                case '2':
                    returnText = '一条/母';
                    break;
                case '3':
                    returnText = '一条/公';
                    break;
            }
            return returnText;
        };

        const money = (text) => {
            return toDecimal(text, DECIMAL_DIGITS_MONEY);
        };

        const action = (text, row, index) => {
            return (
                <div>
                    <span className="action-link-div">
                        <span onClick={() => {this.editSellFish(row)}}>编辑</span>
                    </span>
                    <Divider type="vertical" />
                    <span className="action-link-div">
                        <Popconfirm title="确定要删除？" onConfirm={() => {this.deleteSellFish(row)}} okText="是" cancelText="否">
                            <span>删除</span>
                        </Popconfirm>
                    </span>
                </div>
            )
        };

        const columns = [
            { title: 'QQ', dataIndex: 'qq'},
            { title: 'QQ名称', dataIndex: 'qqName'},
            { title: '鱼名', dataIndex: 'fishName'},
            { title: '学名', dataIndex: 'scientificName'},
            { title: '鱼出处', dataIndex: 'provenance'},
            { title: '鱼长/cm', dataIndex: 'fishHeight'},
            { title: '价格/元', dataIndex: 'fishPrice', render: money},
            { title: '一对/一条', dataIndex: 'fishQuantity', render: fishQuantity},
            { title: '操作', render: action},
        ];

        return(
            <div className="fishFriendsSellFishTable-div">
                <iframe ref="downloadFile" style={{display: 'none'}}></iframe>
                <div className="buttons-div">
                    <Button type="primary" shape="circle" icon="plus" onClick={() => {dispatch(push('/appLayout/AddFishFriendsSellFishForm/add'))}} />
                    <Divider type="vertical" />
                    <Button type="primary" shape="circle" icon="file-excel" onClick={() => {this.downloadFile()}} />
                </div>
                <Table dataSource={dataSource}
                       pagination={pagination}
                       columns={columns}
                       rowKey={record => record.fBId}
                       onChange={this.tableOnChange}
                       loading={loading}
                />
            </div>
        );
    }
}

export default FishFriendsSellFishTable;