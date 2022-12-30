exports.handler = async () => {
    console.log('funcion ran ')
    const data = { name: 'Ali', age: 35, job: 'falla7' }
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
// exports.handler = async function (event, context) {
//     const { identity, user } = context.clientContext;
//     // Do stuff and return a response...
//   };