"use strict";
/*!
 * @file TesseractClient Class
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @license GPL-3.0
 * @copyright 2018 - The Bastion Bot Project
 */
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class TesseractClient extends discord_js_1.Client {
    constructor(options) {
        let isObject = typeof options === "object";
        let hasConfigurations = 'configurations' in options;
        let hasCredentials = 'credentials' in options;
        let isValid = options.configurations.prefix && options.credentials.token;
        if (!isObject || !hasConfigurations || !hasCredentials || !isValid) {
            throw new TypeError("An invalid TesseractOptions object was passed.");
        }
        super(options);
        this.options = options;
        this.configurations = options.configurations;
        this.credentials = options.credentials;
    }
    reloadSettings(configurations, credentials) {
        if (!configurations && !credentials) {
            return false;
        }
        if (configurations)
            this.configurations = configurations;
        if (credentials)
            this.credentials = credentials;
        return true;
    }
    login(token) {
        if (token) {
            this.credentials.token = token;
        }
        return super.login(this.credentials.token);
    }
    toString() {
        return "Tesseract";
    }
}
exports.default = TesseractClient;
//# sourceMappingURL=TesseractClient.js.map
