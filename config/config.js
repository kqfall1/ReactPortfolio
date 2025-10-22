 const defaultAtlasUri = process.env.DB_PASSWORD
    ? `mongodb+srv://kqfall1:${process.env.DB_PASSWORD}@lab2-mern-skeleton.w6aeqhx.mongodb.net/`
    : null; 

export const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: 
        process.env.MONGODB_URI ||
        defaultAtlasUri || 
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/portfolio'
}

export const dbAdminId = '68f9553364f7db2c85a54a05'; 