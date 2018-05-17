/**
 * 创建人： 张博
 * 时间： 2018-04-27 下午4:55
 * 功能描述：渔友出鱼列表查询form
 */
import React from 'react';
import {Form, Button, Select, Input} from 'antd';
const FormItem = Form.Item;
import {connect} from 'react-redux';
import {FIND_FISH_LIBS} from '../../../constants/url';
import {sagaPost} from '../../../js/sagaUtil';
import {cSFindFishLibs, cSFindFishFriendsSellFishTableLoading, cSFindFishFriendsSellFishTable} from '../modules/fishFriendsSellFish';
import {FIND_FISH_FRIENDS_SELL_FISH_TABLE} from '../../../constants/url';

@connect(
    (state) => {
        return {
            fishFriendsSellFish: state.getIn(['appReducers', 'fishFriendsSellFish']),
        }
    }
)
class FishFriendsSellFishTableForm extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(sagaPost(FIND_FISH_LIBS, {}, cSFindFishLibs));
    }

    handleSubmit = (e) => {
        const {form, dispatch} = this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const {fishId, qq} = values;
                let params = {
                    query: {
                        "fishId": fishId,
                        "qq": qq,
                    }
                };
                dispatch(cSFindFishFriendsSellFishTableLoading());
                dispatch(sagaPost(FIND_FISH_FRIENDS_SELL_FISH_TABLE, params, cSFindFishFriendsSellFishTable));
            }
        })
    };

    render() {
    
        console.log("===========渔友出鱼列表查询form-组件渲染===========");
        const {form, fishFriendsSellFish} = this.props;
        const {getFieldDecorator, resetFields} = form;
        const fishLibArray = fishFriendsSellFish.getIn(['addFishFriendsSellFishFormC', 'fishLib']);
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 15 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 9,
                },
            },
        };
        return(
            <div className="fishFriendsSellFishTableForm-div">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="QQ"
                    >
                        {getFieldDecorator('qq', {
                            rules: [],
                        })(
                            <Input placeholder="请输入QQ号" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="鱼名"
                    >
                        {getFieldDecorator('fishId', {
                            rules: [],
                        })(
                            <Select
                                showSearch
                                placeholder="请选择选择一种鱼"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                style={{width: '150px'}}
                            >
                                {
                                    !fishLibArray
                                        ? null
                                        : fishLibArray.map(
                                        c => {
                                            return <Select.Option key={c.fishId} value={c.fishId.toString()}>{c.fishName}</Select.Option>
                                        }
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>查询</Button>
                        <Button type="primary" onClick={() => {resetFields()}}>重置</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const WrappedFishFriendsSellFishTableForm = Form.create()(FishFriendsSellFishTableForm);
export default WrappedFishFriendsSellFishTableForm;