/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import BaseEntity from "./BaseEntity";
import Review from "./children/Review";

export default class UserListEntry extends BaseEntity {
    animeId: string;
    overallRating: number;
    state: string;
    progress: number;
    review?: Review;
    addingDate: Date;
}
