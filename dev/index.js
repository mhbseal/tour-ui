import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Tab, Num, Loading, Toast, Alert, LayerList, Calendar } from '../src/index.js';

// 组件依次这样定义下去
let components = [
  (() => <Switch />)(),
  (() => {
    let data = [
      { name: '中国' },
      { name: '美国' },
      { name: '日本' }
    ];
    return <Tab data={data} defaultActive={'美国'} />;
  })(),
  (() => <Num min={0} max={99} defaultValue={3} />)(),
  (() => <Loading visible={true} closeBtn={true} content={'loading...'} maskToHide={false} />)(),
  (() => <Toast visible={true} content={'输入的内容有误'} />)(),
  (() => {
    let Test = React.createClass({
      getDefaultProps() {
        return {
          btns: [{
            name: '知道了',
            handler()  {
              this.setState({visible: false});
            }
          }]
        };
      },
      getInitialState() {
        return {
          visible: false
        };
      },
      onAlert() {
        this.setState({
          visible: true
        });
      },
      render() {
        return (
          <div>
            <p onClick={this.onAlert}>按钮</p>
            <Alert visible={this.state.visible} content={'确定删除？'} btns={this.props.btns} />
          </div>
        )
      }
    })
    return <Test />;
  })(),
  (() => <Calendar />)(),
  (() => <LayerList visible={true} />)(),
];

let insertComponent = component => ReactDOM.render(component, document.body.appendChild(document.createElement("div")));

components.forEach(component => insertComponent(component))