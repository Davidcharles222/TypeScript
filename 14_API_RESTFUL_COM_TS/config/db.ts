import mongoose, { mongo } from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!");
  } catch (e) {
    Logger.error("Não foi possível conectar!");
    Logger.error(`Erro: ${e}`);
    // process.exit(1) // para aplicação
  }
}

export default connect;
