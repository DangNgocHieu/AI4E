import axios from 'axios'

const base_url = "http://localhost:4400"


export const getTrainedModels = async (userId, domainId) => {

    let response = await axios.get(base_url + `/api/model/get?userId=${userId}&domainId=${domainId}`)

    if (response.data.status === 'success') {
        let trained_models = response.data.trained_model

        let model_infos = await Promise.all(trained_models.map(model => axios.get(base_url + '/api/test/get_fields', {
            data: {
                model_id: model.model_id
            }
        })))

        return trained_models.map((model, index) => Object.assign({}, model, model_infos[index]))
    }
}

export const cookieManager = {
    setCookie: (name, value, days = 7, path = '/') => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString()
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
    },

    getCookie: (name) => {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '')
    },

    deleteCookie: (name, path) => {
        this.setCookie(name, '', -1, path)
    }
}

export const login = async (username, password) => {

    // axios.post(base_url + '/login', {
    //     username: username,
    //     password: password
    // })
    let response = await axios.post(base_url + '/users', {
        username: username,
        password: password
    })
    console.log(response)
    if (response.status === 201) {
        // cookieManager.setCookie('user_id', response.data.user.id)
        cookieManager.setCookie('user_id', response.data.username)
        return 'success'
    }
    else
        return 'fail'
    // if (response.data.status === 'success') {
    //     cookieManager.setCookie('user_id', response.data.user.id)
    //     return 'success'
    // }
    // else
    //     return 'fail'

}

export const logout = () => {
    cookieManager.deleteCookie('user_id')
}

export const getDomain = async () => {
    // let response = await axios.get(base_url + '/api/domain/get')
    let response = await axios.get(base_url + '/domain')

    let dms = response.data.domains
    if (response.data.status === 'success') {
        return dms
    }

}

export const getDomainModel = (domainId) => {
    axios.get(base_url + `/api/model/get?domainId=${domainId}`).then(response => {
        let models = response.data.domain_model
        if (response.data.status === 'success') {
            return models
        }
    })
}


export const getDomainField = (domainId) => {
    axios.get(base_url + '/api/model/field', {
        data: {
            domainId: domainId
        }
    }).then(response => {
        let fields = response.data.fields
        if (response.data.status === 'success') {
            return fields
        }
    })
}

export const uploadFile = (file) => {

    var formData = new FormData()
    formData.append('file', file)
    axios.post(base_url + '/api/model/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        if (response.data.status === 'success') {
            console.log('FILE UPLOADED')
            return response.data.data_id
        }
    })
}

export const saveField = (in_fields, out_fields, horizon) => {
    axios.post(base_url + '/api/model/save_fields', {
        horizon: horizon,
        input_fields: in_fields,
        out_fields: out_fields
    })
        .then((response) => {
            if (response.data.status === 'success') {
                console.log('SAVE FIELD SUCCESSFULLY')
            }
        })
}


export const trainModel = (trainInfos) => {
    axios.post(base_url + '/api/model/train', trainInfos)
        .then((response) => {
            return response.data.result
        }, (error) => {
            console.log(error)
        });
}


export const testModel = (modelID) => {
    axios.post(base_url + '/api/model/test', {
        model_id: modelID
    })
        .then((response) => {
            return response.data.result
        }, (error) => {
            console.log(error)
        });
}