/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Benchmark from 'react-component-benchmark';
import Adapter from "enzyme-adapter-react-16";
import Enzyme from 'enzyme';
import { HomebaseProvider, useTransact, useQuery } from '../../dist/homebase.react';

const counterId = 1
const config = { initialData: [{
  ':db/id': counterId,
  ':count': 0
}]}

const Counter = () => {
  const [counter] = useQuery(counterId)
  const [transact] = useTransact()
  return (
    <div>
      Count: {counter.get(':count')}
      <div>
        <button onClick={() => transact([{
          ':db/id': counterId,
          ':count': counter.get(':count') + 1
        }])}>
          Increment
        </button>
      </div>
    </div>
  )
}

Enzyme.configure({ adapter: new Adapter() });

class Test extends React.Component {
  render() {
    const counters = [];
    for (let step = 0; step < 10000; step++) {
      counters.push(<Counter key={step}/>)
    }
    return <HomebaseProvider config={config}>
      {counters}
  </HomebaseProvider>
  }
}

describe('Benchmark', () => {
  let props;
  let meanTime;

  beforeEach(() => {
    meanTime = 0;
    props = {
      component: Test,
      onComplete: jest.fn(results => {
        meanTime = results.mean;
      }),
      samples: 20
    };
  });

  it('mounts in a reasonable amount of time', () => {
    const component = mount(<Benchmark {...props} />);
    component.instance().start();
    expect(meanTime).toBeLessThan(200);
  });

  it('updates in a reasonable amount of time', () => {
    const component = mount(<Benchmark {...props} type="update" />);
    component.instance().start();
    expect(meanTime).toBeLessThan(200);
  });

  it('unmounts in a reasonable amount of time', () => {
    const component = mount(<Benchmark {...props} type="unmount" />);
    component.instance().start();
    expect(meanTime).toBeLessThan(200);
  });
});
