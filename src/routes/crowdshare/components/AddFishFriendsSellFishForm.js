/**
 * 创建人： 张博
 * 时间： 2018-04-26 上午11:26
 * 功能描述：添加渔友出鱼的form
 */
import React from 'react';
import {Form, Select, Button, Input, InputNumber} from 'antd';
const FormItem = Form.Item;
const {TextArea} = Input;
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {formatNumberString, formatStringToNumber} from '../../../js/globalJs';
import {FIND_USERS, FIND_FISH_LIBS} from '../../../constants/url';
import {sagaPost} from '../../../js/sagaUtil';
import {cSFindUsers, cSFindFishLibs, cSInsertFishBubble, cSUpdateFishFriendsSellFish} from '../modules/fishFriendsSellFish';
import {messages} from '../../../js/sysMsgUtil';

@connect(
    (state) => {
        return {
            fishFriendsSellFish: state.getIn(['appReducers', 'fishFriendsSellFish']),
            msgReducer: state.getIn(['appReducers', 'msgReducer']),
        }
    }
)
class AddFishFriendsSellFishForm extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(sagaPost(FIND_USERS, {}, cSFindUsers));
        dispatch(sagaPost(FIND_FISH_LIBS, {}, cSFindFishLibs));
    }

    componentDidMount() {
        const {match, form, fishFriendsSellFish} = this.props;
        const {type} = match.params;
        if (type === 'update') {
            const updateDataObj = fishFriendsSellFish.getIn(['addFishFriendsSellFishFormC', 'updateFishFriendsSellFishSetData']);
            form.setFieldsValue({
                userId: updateDataObj.userId.toString(),
                fishId: updateDataObj.fishId.toString(),
                provenance: updateDataObj.provenance,
                fishHeight: updateDataObj.fishHeight,
                fishPrice: updateDataObj.fishPrice,
                fishQuantity: updateDataObj.fishQuantity,
                discounts: updateDataObj.discounts,
                sendOutCondition: updateDataObj.sendOutCondition,
                noShipmentsScope: updateDataObj.noShipmentsScope,
            });
        }
    }

    componentWillUnmount() {
        this.props.form.resetFields();
    }

    componentWillReceiveProps(np) {
        const {dispatch} = this.props;
        if (np.msgReducer.get("statusCode")) {
            messages(np.msgReducer, dispatch);
        }
    }

    handleSubmit = (e) => {
        const {form, dispatch, match, fishFriendsSellFish} = this.props;
        const {type} = match.params;
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const {userId, fishId, provenance, fishHeight, fishPrice, fishQuantity, discounts, sendOutCondition, noShipmentsScope} = values;
                let params = {
                    "discounts": discounts,
                    "fishHeight": fishHeight,
                    "fishId": fishId,
                    "fishPrice": fishPrice,
                    "fishQuantity": fishQuantity,
                    "noShipmentsScope": noShipmentsScope,
                    "provenance": provenance,
                    "sendOutCondition": sendOutCondition,
                    "userId": userId
                };
                if (type === 'add') {
                    dispatch(cSInsertFishBubble(params));
                } else {
                    params.fBId = fishFriendsSellFish.getIn(['addFishFriendsSellFishFormC', 'updateFishFriendsSellFishSetData']).fBId;
                    dispatch(cSUpdateFishFriendsSellFish(params));
                }

            }
        })
    };

    render() {
    
        console.log("===========添加渔友出鱼的form-组件渲染===========");
        const {form, fishFriendsSellFish} = this.props;
        const {getFieldDecorator} = form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 9 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 5 },
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
            <div className="addFishFriendsSellFishForm-div">
                <span className="title-span">
                    新建渔友出鱼信息
                </span>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="渔友"
                        hasFeedback
                    >
                        {getFieldDecorator('userId', {
                            rules: [{
                                required: true, message: '请选择一位渔友',
                            }],
                        })(
                            <Select
                                showSearch
                                placeholder="请选择渔友"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {
                                    fishFriendsSellFish.getIn(['addFishFriendsSellFishFormC', 'users']).map(
                                        c => {
                                            return <Select.Option key={c.userId} value={c.userId.toString()}>{c.personName}</Select.Option>
                                        }
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="鱼名"
                        hasFeedback
                    >
                        {getFieldDecorator('fishId', {
                            rules: [{
                                required: true, message: '请选择选择一种鱼',
                            }],
                        })(
                            <Select
                                showSearch
                                placeholder="请选择选择一种鱼"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {
                                    fishFriendsSellFish.getIn(['addFishFriendsSellFishFormC', 'fishLib']).map(
                                        c => {
                                            return <Select.Option key={c.fishId} value={c.fishId.toString()}>{c.fishName}</Select.Option>
                                        }
                                    )
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="鱼出处"
                        hasFeedback
                    >
                        {getFieldDecorator('provenance', {
                            rules: [{
                                required: true, message: '请添加鱼出处',
                            }],
                        })(
                            <Input placeholder="请添加鱼出处" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="鱼长度/cm"
                        hasFeedback
                    >
                        {getFieldDecorator('fishHeight', {
                            rules: [{
                                required: true, message: '请添加鱼长度',
                            }],
                        })(
                            <Input placeholder="请添加鱼长度" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="价格/元"
                        hasFeedback
                    >
                        {getFieldDecorator('fishPrice', {
                            rules: [{
                                required: true, message: '请添加价格',
                            }],
                        })(
                            <InputNumber
                                style={{width: '100%'}}
                                placeholder="请添加价格"
                                step={1}
                                min={1}
                                formatter={value => formatNumberString(value)}
                                parser={value => formatStringToNumber(value)}
                            />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="数量"
                        hasFeedback
                    >
                        {getFieldDecorator('fishQuantity', {
                            rules: [{
                                required: true, message: '请选择选择数量',
                            }],
                        })(
                            <Select placeholder="请选择选择数量">
                                <Select.Option value="0">一对</Select.Option>
                                <Select.Option value="1">一条/公母随机</Select.Option>
                                <Select.Option value="2">一条/母</Select.Option>
                                <Select.Option value="3">一条/公</Select.Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="优惠说明"
                    >
                        {getFieldDecorator('discounts', {
                            rules: [],
                        })(
                            <TextArea placeholder="优惠说明" rows={4} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="发货条件说明"
                        hasFeedback
                    >
                        {getFieldDecorator('sendOutCondition', {
                            rules: [{
                                required: true, message: '请填写发货条件说明',
                            }],
                        })(
                            <TextArea placeholder="发货条件说明" rows={4} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="不发货范围"
                    >
                        {getFieldDecorator('noShipmentsScope', {
                            rules: [],
                        })(
                            <TextArea placeholder="不发货范围" rows={4} />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedAddFishFriendsSellFishForm = Form.create()(AddFishFriendsSellFishForm);
export default withRouter(WrappedAddFishFriendsSellFishForm);