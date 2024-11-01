// para funcionar as variáveis precisa informar dotenv no app.ts
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.zqaah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, // dados do conect do banco de dados mongodb atlas
    env: 'development'
}