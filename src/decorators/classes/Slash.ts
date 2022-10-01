import { SlashDecoratorArgsType, SlashLoaderCommandType } from '#types';
import { Command } from '@/commands/slash/test';
import { SlashLoader } from '@/loaders';

// type SlashDecoratorDataType = {
//   payload?: {
//     /** @description Название команды (ТОЛЬКО LOWERCASE)*/
//     name: string;

//     /** @description Перевод названия на выбранную локализацию */
//     name_localizations?: LocalizationMap;

//     /** @description Описание для команды */
//     description: string;

//     /** @description Перевод описания на выбранную локализацию */
//     description_localizations?: LocalizationMap;

//     /** @description Устанавливает права доступа для команды */
//     default_member_permissions?: PermissionsString;

//     /** @description Указывает можно ли использовать команду в ЛС */
//     dm_permission?: boolean;

//     options: {
//       /** @description Название опции (ТОЛЬКО LOWERCASE) */
//       name: string;

//       /** @description Описание опции */
//       description: string;

//       /**
//        * @description Тип опции
//        * @value 1 - SUB_COMMAND
//        * @value 2 - SUB_COMMAND_GROUP
//        * @value 3 - СТРОКА
//        * @value 4 - ЧИСЛО
//        * @value 5 - БУЛЕВОЕ
//        * @value 6 - ПОЛЬЗОВАТЕЛЬ
//        * @value 7 - КАНАЛ
//        * @value 8 - РОЛЬ
//        * @value 9 - MENTIONABLE
//        * @value 10 - ЧИСЛО
//        * @value 11 - ВЛОЖЕНИЕ
//        */
//       type: 1 | 3 | 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

//       choices?: {
//         name: string;
//         value: string | number;
//       }[];
//     }[];
//   };
// };

export function Slash(data: SlashDecoratorArgsType) {
  return function <T extends { new (...args: any[]): {} }>(Command: T) {
    const loader_args: SlashLoaderCommandType = {
      command: Command,
      payload: data,
    };

    SlashLoader.load(loader_args);
  };
}
