import { LocalizationMap, ToAPIApplicationCommandOptions } from 'discord.js';

type DataType = {
  readonly name: string;
  /**
   * The localized names for this command
   */
  readonly name_localizations?: LocalizationMap;
  /**
   * The description of this slash command
   */
  readonly description: string;
  /**
   * The localized descriptions for this command
   */
  readonly description_localizations?: LocalizationMap;
  /**
   * The options of this slash command
   */
  readonly options?: ToAPIApplicationCommandOptions[];
  /**
   * Whether the command is enabled by default when the app is added to a guild
   *
   * @deprecated This property is deprecated and will be removed in the future.
   * You should use {@link (SlashCommandBuilder:class).setDefaultMemberPermissions} or {@link (SlashCommandBuilder:class).setDMPermission} instead.
   */
  readonly default_permission?: boolean | undefined;
  /**
   * Set of permissions represented as a bit set for the command
   */
  readonly default_member_permissions?: Permissions | null | undefined;
  /**
   * Indicates whether the command is available in DMs with the application, only for globally-scoped commands.
   * By default, commands are visible.
   */
  readonly dm_permission?: boolean | undefined;
};

export function Slash(data: DataType) {
  return function (constructor: Function) {
    console.log(constructor());
  };
}
