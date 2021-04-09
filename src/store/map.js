//存放地图相关
const state = {
	lockInfo: {
		islocking: false,
		id: '',
		zoom: 0,
		location: []
	}
}

const mutations = {
	setLockInfo(state, param) {
		state.lockInfo = param
	}
}

const actions = {
	setLockInfo({ commit }, param) {
		commit('setLockInfo', param)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
