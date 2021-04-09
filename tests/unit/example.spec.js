import { mount } from '@vue/test-utils'
import { expect } from 'chai'
//引入全局的插件，比如vuex bus，并在组件挂载的时候使用
import { localPlugins } from '@/utils/vue-plugins'

import { Utils } from '@/utils/utils.js'
import Example from '@/components/example.vue'
import ExampleChild from '@/components/example-child.vue'

describe('Utils工具函数的测试', () => {
    let utils = new Utils()
    let { add,asyncAdd } = utils
    it('1+1应该等于2',() => {
        expect(add(1,1)).to.equal(2)
    })

    it('异步请求1+1等于2',done => {
        asyncAdd(1,1).then((res) => {
            expect(res).to.equal(2)
            done()
        })
    })
})


describe('Example组件的测试', () => {
    // 现在挂载组件，你便得到了这个包裹器 就是将组件渲染出来 vm就是整个界面
    const wrapper = mount(Example,localPlugins()) 
  
    it('断言html包含div元素', () => {
        console.log(wrapper.html())
      expect(wrapper.html()).contains('div')
    })
  
    // 也便于检查已存在的元素
    it('断言html包含button', () => {
    //判断contains的返回值是不是等于true
      expect(wrapper.contains('button')).to.equal(true)
    })

    //模拟用户点击
    it('触发click事件,断言count增加',() => {
        expect(wrapper.vm.count).to.equal(0)
        //获取button按钮 .add为指定class为add的button标签
        const button  = wrapper.find('button.add')
        //触发click事件
        button.trigger('click')
        expect(wrapper.vm.count).to.equal(1)
    })

    //模拟用户点击 dom异步更新
    it('触发click事件,断言count增加,并且dom的数据更新', done => {
        expect(wrapper.text()).contains('1')
        const button  = wrapper.find('button')
        button.trigger('click')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.text()).contains('2')
            done()
        })
    })

    // 模拟触发子组件的事件 #emit
    it('触发子组件的事件后，断言出现div的内容',  done => {
        wrapper.findComponent(ExampleChild).vm.$emit('custom')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.html()).contains('isemit')
            done()
        })
    })

    //可以直接修改组件状态 setProps\setData
    it('测试修改props和data里数据', async () => {
        wrapper.setData({ count: 10 })
        expect(wrapper.vm.count).to.equal(10)
        await wrapper.setProps({ foo: 'bar' })
        expect(wrapper.vm.foo).to.equal('bar')
    })
})