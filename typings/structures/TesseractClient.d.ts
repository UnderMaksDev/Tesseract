/*!
 * @file TesseractClient Class
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @license GPL-3.0
 * @copyright 2018 - The Bastion Bot Project
 */
import { Client, ClientOptions } from "discord.js";
declare class TesseractClient extends Client {
    configurations: ClientConfigurations;
    credentials: ClientCredentials;
    constructor(options: TesseractOptions);
    reloadSettings(configurations?: ClientConfigurations, credentials?: ClientCredentials): boolean;
    login(token?: string): Promise<string>;
    toString(): string;
}
interface TesseractOptions extends ClientOptions {
    configurations: ClientConfigurations;
    credentials: ClientCredentials;
}
interface ClientConfigurations extends Object {
    prefix: string | string[];
}
interface ClientCredentials extends Object {
    token: string;
}
export default TesseractClient;
//# sourceMappingURL=TesseractClient.d.ts.map