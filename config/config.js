export const PORT = 8080;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://Neeraj1:Neeraj1@cluster0.ef7fmtl.mongodb.net/?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb://localhost:27017/graphqlTutorial-prod'
    }
}