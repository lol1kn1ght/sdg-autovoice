import {
  RESTPostAPIApplicationCommandsJSONBody,
  PermissionsString,
  Events,
  ClientEvents,
} from 'discord.js';

export type command_settings = Partial<{
  permissions: Partial<{
    permissions: PermissionsString[];
    allowed_roles: string[];
  }>;
}>;

export type command_type = {
  dev_settings?: command_settings;
  settings: command_settings;
  data: RESTPostAPIApplicationCommandsJSONBody;
};

export type event_type = {
  name:
    | 'applicationCommandPermissionsUpdate'
    | 'channelCreate'
    | 'channelDelete'
    | 'channelPinsUpdate'
    | 'channelUpdate'
    | 'debug'
    | 'emojiCreate'
    | 'emojiDelete'
    | 'emojiUpdate'
    | 'error'
    | 'guildBanAdd'
    | 'guildBanRemove'
    | 'guildCreate'
    | 'guildDelete'
    | 'guildIntegrationsUpdate'
    | 'guildMemberAdd'
    | 'guildMemberAvailable'
    | 'guildMemberRemove'
    | 'guildMembersChunk'
    | 'guildMemberUpdate'
    | 'guildScheduledEventCreate'
    | 'guildScheduledEventDelete'
    | 'guildScheduledEventUpdate'
    | 'guildScheduledEventUserAdd'
    | 'guildScheduledEventUserRemove'
    | 'guildUnavailable'
    | 'guildUpdate'
    | 'interactionCreate'
    | 'invalidated'
    | 'inviteCreate'
    | 'inviteDelete'
    | 'messageCreate'
    | 'messageDelete'
    | 'messageDeleteBulk'
    | 'messageReactionAdd'
    | 'messageReactionRemove'
    | 'messageReactionRemoveAll'
    | 'messageReactionRemoveEmoji'
    | 'messageUpdate'
    | 'presenceUpdate'
    | 'ready'
    | 'roleCreate'
    | 'roleDelete'
    | 'roleUpdate'
    | 'shardDisconnect'
    | 'shardError'
    | 'shardReady'
    | 'shardReconnecting'
    | 'shardResume'
    | 'stageInstanceCreate'
    | 'stageInstanceDelete'
    | 'stageInstanceUpdate'
    | 'stickerCreate'
    | 'stickerDelete'
    | 'stickerUpdate'
    | 'threadCreate'
    | 'threadDelete'
    | 'threadListSync'
    | 'threadMembersUpdate'
    | 'threadMemberUpdate'
    | 'threadUpdate'
    | 'typingStart'
    | 'userUpdate'
    | 'voiceStateUpdate'
    | 'warn'
    | 'webhookUpdate';
};

export abstract class CommandType {
  abstract settings: command_type;

  abstract execute(): Promise<void>;
}
