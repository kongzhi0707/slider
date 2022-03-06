### Antd 中的滑块slider 拖动tooltip和轴时间重合

效果如下：

<img src="https://img2022.cnblogs.com/blog/561794/202203/561794-20220306164505872-563791091.png" /> <br/>

如上，有故障前/最初告警/上盯屏/最近告警 四个轴。或更多轴都可以的，因此我们需要把他们均分成n等分。目前使用到的是 antd 中的slider组件，如下：
<a href="https://ant.design/components/slider-cn/">https://ant.design/components/slider-cn/</a> 
基本代码如下：

```
state = {
  firstAlarmTime: 1645759500000, // 最初告警时间
  recentAlarmTime: 1646116470000, // 最近告警时间
  eventCreateTime: 1645759541000, // 上盯屏时间
}

render() {
  const {
    firstAlarmTime, // 最初告警时间
    recentAlarmTime, // 最近告警时间
    eventCreateTime, // 上盯屏时间
    rangeValue,
  } = this.state;

  // 故障前时间 = 最初告警时间的前十分钟
  const failureBefore = moment(firstAlarmTime).subtract(10, 'm').format('YYYY-MM-DD HH:mm:ss');

  // 最初告警时间
  const firstTime = moment(firstAlarmTime).format('YYYY-MM-DD HH:mm:ss');

  // 上盯屏时间
  const eventTime2 = moment(eventCreateTime).format('YYYY-MM-DD HH:mm:ss');

  // 最近告警时间
  const recentTime = moment(recentAlarmTime).format('YYYY-MM-DD HH:mm:ss');

  const failureDesc = `故障前 (${failureBefore})`;
  const firstDesc = `最初告警 (${firstTime})`;
  const eventDesc = `上盯屏 (${eventTime2})`;
  const recentDesc = `最近告警 (${recentTime})`;

  // 获取最近告警时间 到 故障前时间的时间差 单位是秒, 也就是说 获取 起始 和 终点的距离(单位是秒)
  let diff = moment(recentTime).diff(moment(failureBefore), 's');

  // 10秒一个间隔，获取时间轴上有多少个点
  let pointNum = Math.floor(diff / 10);

  // 分段
  // 第一个点的间隔是 1/3
  const firstPoint = Math.floor(pointNum / 3);

  // 第二个点间隔是 2/3
  const secondPoint = Math.floor(pointNum / 3 * 2);

  let currentRangeValue = '';
  let obj = {
    0: failureDesc,
    [firstPoint]: firstDesc,
    [secondPoint]: eventDesc,
    [pointNum]: recentDesc
  };
  return (
    <div>
      <div className="alarm-range" style={{ width: '800px', margin: '0 auto' }}>
        <Slider
          marks={obj}
          min={0}
          max={pointNum}
          tipFormatter={(value) => this.formatter(value, pointNum, obj)}
          value={currentRangeValue}
          onChange={(v) => {
            this.rangeFunc(v, pointNum, obj)
          }}
        />
      </div>
    </div>
  )
}
```
如上代码，就可以有一个slider组件模块了，组件有四个轴。分别为 故障前/最初告警/上盯屏/最近告警 时间。现在是要考虑拖动的时候需要和上面的tooltips提示的时间的轴上重合。
```
formatter = (value, pointNum, obj) => {
  const {
    firstAlarmTime, // 最初告警时间
    recentAlarmTime, // 最近告警时间
    eventCreateTime,  // 上盯屏时间
  } = this.state;
  const scales = Object.keys(obj).map(key => Number(key));
  const interval = scales[1] - scales[0]; // 每个区间平均的多少个点
  const totalArea = scales.length - 1;  // 总区间
  let timePoints;
  const index = Math.floor(value / interval); // 滑块当前所在区间的索引 = Math.floor(当前拖动的值 / 当前区间的平均值)
  // 故障前时间 = 最初的时间 - 10分钟
  const failureBefore = moment(firstAlarmTime).subtract(10, 'm').valueOf();
  let totalTime = 0;
  // 保存四个时间点顺序
  if (recentAlarmTime > eventCreateTime) {
    timePoints = [failureBefore, firstAlarmTime, eventCreateTime, recentAlarmTime];
    totalTime = recentAlarmTime;
  } else {
    timePoints = [failureBefore, firstAlarmTime, recentAlarmTime, eventCreateTime];
    totalTime = eventCreateTime;
  }
  // 时间差 = 滑块所在区间右侧时间 - 滑块所在区间左侧时间
  let diffTime = timePoints[(index == totalArea ? totalArea : index + 1)] - timePoints[index];
  // 获取拖动占用多少毫秒时间 = (当前区间已经拖动的刻度 / 当前区间总刻度) * 时间差
  let time = Math.floor(diffTime * (pointNum - value - interval * (index === totalArea ? 0 : totalArea - index - 1)) / interval);
  // 当滑块走完一个区间之后，需要加上走完区间的时间差
  if (index < totalArea - 1) {
    time += (timePoints[totalArea] - timePoints[index + 1]);
  }
  const diffTotalTime = totalTime - time;
  return moment(diffTotalTime).format('YYYY-MM-DD HH:mm:ss');
}
rangeFunc = (value, pointNum, obj) => {
  console.log('----rangeFunc----', value);
  console.log('----pointNum---', pointNum);
  console.log('---obj----', obj);
  const {
    firstAlarmTime,
    eventCreateTime,
    recentAlarmTime,
  } = this.state;
  const scales = Object.keys(obj).map(key => Number(key));
  console.log('----scales---', scales);
  const interval = scales[1] - scales[0]; // 每个区间平均的多少个点
  const totalArea = scales.length - 1;  // 总区间
  let timePoints;
  let totalTime = 0;
  const index = Math.floor(value / interval); // 滑块当前所在区间
  // 故障前时间 = 最初的时间 - 10分钟
  const failureBefore = moment(firstAlarmTime).subtract(10, 'm').valueOf();
  // 保存四个时间点顺序
  if (recentAlarmTime > eventCreateTime) {
    timePoints = [failureBefore, firstAlarmTime, eventCreateTime, recentAlarmTime];
    totalTime = recentAlarmTime;
  } else {
    timePoints = [failureBefore, firstAlarmTime, recentAlarmTime, eventCreateTime];
    totalTime = eventCreateTime;
  }
  // 时间差 = 滑块所在区间右侧时间 - 滑块所在区间左侧时间
  let diffTime = timePoints[(index == totalArea ? totalArea : index + 1)] - timePoints[index];
  // 获取拖动占用多少毫秒时间(当前区间已经拖动的刻度 / 当前区间总刻度 * 时间差)
  let time = Math.floor(diffTime * (pointNum - value - interval * (index === totalArea ? 0 : totalArea - index - 1)) / interval);
  // 当滑块走完一个区间之后，需要加上走完区间的时间差
  if (index < totalArea - 1) {
    time += (timePoints[totalArea] - timePoints[index + 1]);
  }
  const diffTotalTime = totalTime - time;
```
