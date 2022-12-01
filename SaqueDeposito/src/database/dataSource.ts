import "reflect-metadata"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5430,
    username: "postgres",
    password: "123",
    database: "pg_saque_deposito",
    synchronize: true,
    logging: false,
    entities: ["./src/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
})

export function createConnection(host = "database"): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource