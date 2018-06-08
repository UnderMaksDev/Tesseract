/*!
 * @file TesseractClient Class
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @license GPL-3.0
 * @copyright 2018 - The Bastion Bot Project
 */

import { Client, ClientOptions } from "discord.js";


class TesseractClient extends Client {
  configurations: ClientConfigurations;
  credentials: ClientCredentials;

  constructor(options: TesseractOptions) {
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

  // Replace the Tesseract Bot Settings with new values.
  reloadSettings(configurations?: ClientConfigurations, credentials?: ClientCredentials): boolean {
    if (!configurations && !credentials) {
      return false;
    }

    if (configurations) this.configurations = configurations;
    if (credentials) this.credentials = credentials;

    return true;
  }

  // Logs the client in, establishing a websocket connection to Discord.
  login(token?: string): Promise<string> {
    if (token) {
      this.credentials.token = token;
    }
    return super.login(this.credentials.token);
  }

  // Method override for toString()
  toString(): string {
    return "Tesseract";
  }
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
