/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import Anime from "./Anime";
import BaseModel from "./BaseModel";

export default class UserListEntry extends BaseModel {
    anime: Anime;
    overallRating: number;
    status: string;
    currentEpisode: number;
    addingDate: Date;
}
