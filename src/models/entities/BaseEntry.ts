/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import BaseEntity from "./BaseEntity";
import EntryDescription from "./children/EntryDescription";
import EntryTitle from "./children/EntryTitle";
import SystemFile from "./children/SystemFile";

export default class BaseEntry extends BaseEntity {
    titles: EntryTitle[];
    type: string;
    status: string;
    descriptions: EntryDescription[];
    tags: string[];
    companyIds: string[];
    systemFile: SystemFile;
    visible: boolean;
}
