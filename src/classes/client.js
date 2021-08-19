import { Client, Collection, MessageEmbed } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
import { promisify } from 'util';
import glob from 'glob';
const Glob = promisify(glob);
export default class DynamicPro extends Client {
    /**
     * 
     * @param {ClientOptions} options 
     */
    constructor(options = {}) {
        options.intents = 32767;
        options.partials = ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'];
        super(options);
    }

    commands = new Collection();
    events = new Collection();
    slashCommands = new Collection();
    async init() {
        console.log(`Starting bot...`);
        this.login(process.env.TOKEN);
        const commandFiles = await Glob("./src/commands/**/*.js");
        commandFiles.forEach(async file => {
            const { command } = await import(`../../${file}`);
            this.commands.set(command.name, command);
        })
        const eventFiles = await Glob(`./src/events/**/*.js`);
        eventFiles.forEach(async file => {
            const {event} = await import(`../../${file}`);
            this.on(event.name, event.run.bind(this, this));
        })
        const slashFiles = await Glob(`./src/slashcommands/**/*.js`);
        slashFiles.forEach(async slash => {
            const { command } = await import(`../../${slash}`);
            if (["MESSAGE", "USER"].includes(command.type)) delete command.description;
            this.slashCommands.set(command.name, command);
        })
    };
}