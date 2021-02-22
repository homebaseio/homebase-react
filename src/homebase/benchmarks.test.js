/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jest/no-hooks */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
/* eslint-env jest */
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Benchmark from 'react-component-benchmark'
import { HomebaseProvider, useEntity, useTransact } from '../../dist/js/homebase.react'

const config = {
  initialData: [
    {
      counter: {
        identity: 'counter',
        count: 0,
      },
    },
  ],
}

const Counter = () => {
  const [counter] = useEntity({ identity: 'counter' })
  const [transact] = useTransact()
  return (
    <div>
      Count: {counter.get('count')}
      <div>
        <button
          onClick={() =>
            transact([
              {
                counter: {
                  id: counter.get('id'),
                  count: counter.get('count') + 1,
                },
              },
            ])}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

Enzyme.configure({ adapter: new Adapter() })

class Test extends React.Component {
  render() {
    const counters = Array(100)
      .fill()
      .map((_, i) => <Counter key={i} />)
    return <HomebaseProvider config={config}>{counters}</HomebaseProvider>
  }
}

describe('benchmark', () => {
  let props
  let meanTime

  beforeEach(() => {
    meanTime = 0
    props = {
      component: Test,
      onComplete: jest.fn((results) => {
        meanTime = results.mean
      }),
      samples: 10,
    }
  })

  it('mounts in a reasonable amount of time', () => {
    expect.assertions(1)
    const component = mount(<Benchmark {...props} />)
    component.instance().start()
    expect(meanTime).toBeLessThan(250)
  })

  it('updates in a reasonable amount of time', () => {
    expect.assertions(1)
    const component = mount(<Benchmark {...props} type="update" />)
    component.instance().start()
    expect(meanTime).toBeLessThan(250)
  })

  it('unmounts in a reasonable amount of time', () => {
    expect.assertions(1)
    const component = mount(<Benchmark {...props} type="unmount" />)
    component.instance().start()
    expect(meanTime).toBeLessThan(250)
  })
})
