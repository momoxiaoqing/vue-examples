export default {
    get: () => new Promise(resolve => {
        resolve({ data: 'value' })
    })
}
