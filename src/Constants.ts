/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// #region Languages

const applicationLanguagePrefix = "global.language.";

const german = applicationLanguagePrefix + "german";
const english = applicationLanguagePrefix + "english";
const japanese = applicationLanguagePrefix + "japanese";

// #endregion

// #region Adaptions

const adaptionPrefix = "global.adaption.";

const anime = adaptionPrefix + "anime";
const manga = adaptionPrefix + "manga";
const visualNovel = adaptionPrefix + "visualNovel";
const lightNovel = adaptionPrefix + "lightNovel";
const original = adaptionPrefix + "original";
const game = adaptionPrefix + "game";
const other = adaptionPrefix + "other";

// #endregion

// #region EntryStates

const entryStatePrefix = "global.entry.state.";

const preAiring = entryStatePrefix + "preAiring";
const airing = entryStatePrefix + "airing";
const finished = entryStatePrefix + "finished";
const uncompleted = entryStatePrefix + "uncompleted";

// #endregion

// #region WatchingStates

const watchingStatePrefix = "global.userListEntry.state.";

const planned = watchingStatePrefix + "planned";
const watching = watchingStatePrefix + "watching";
const completed = watchingStatePrefix + "completed";
const paused = watchingStatePrefix + "paused";
const canceled = watchingStatePrefix + "canceled";

// #endregion

// #region AnimeTypes

const animeTypePrefix = "global.anime.type.";

const series = animeTypePrefix + "series";
const movie = animeTypePrefix + "movie";
const special = animeTypePrefix + "special";
const ova = animeTypePrefix + "ova";
const ona = animeTypePrefix + "ona";

// #endregion

// #region ExternalLinkTypes

const externalLinkTypePrefix = "global.externalLink.type.";

const video = externalLinkTypePrefix + "video";
const stream = externalLinkTypePrefix + "stream";

// #endregion

// #region CompanyTypes

const companyTypePrefix = "global.company.type.";

const publisher = companyTypePrefix + "publisher";
const studio = companyTypePrefix + "studio";
const streamingService = companyTypePrefix + "streamingService";
const developerStudio = companyTypePrefix + "developerStudio";
const tvSender = companyTypePrefix + "tvSender";

// #endregion

// #region Seasons

const seasonPrefix = "global.season.";

const winter = seasonPrefix + "winter";
const spring = seasonPrefix + "spring";
const summer = seasonPrefix + "summer";
const fall = seasonPrefix + "fall";

// #endregion

// #region

const entryTitleTypePrefix = "global.entryTitle.type.";

const title = entryTitleTypePrefix + "title";
const synonym = entryTitleTypePrefix + "synonym";

// #endregion

export default {
    Languages: {
        German: german,
        English: english,
        Japanese: japanese
    },
    EntryTypes: {
        Anime: "Anime"
    },
    UserList: {
        EntryState: {
            Planned: planned,
            Watching: watching,
            Completed: completed,
            Paused: paused,
            Canceled: canceled,
            AnimeStates: [ planned, watching, completed, paused, canceled ]
        }
    },
    AnimeTypes: {
        Series: series,
        Movie: movie,
        Special: special,
        OVA: ova,
        ONA: ona,
        AnimeTypes: [ series, movie, special, ova, ona ]
    },
    ExternalLinkTypes: {
        Video: video,
        Stream: stream,
        ExternalLinkTypes: [ video, stream ]
    },
    CompanyTypes: {
        Publisher: publisher,
        Studio: studio,
        StreamingService: streamingService,
        DeveloperStudio: developerStudio,
        TvSender: tvSender,
        CompanyTypes: [ publisher, studio, streamingService, developerStudio, tvSender ]
    },
    Adaptions: {
        Anime: anime,
        Manga: manga,
        VisualNovel: visualNovel,
        LightNovel: lightNovel,
        Original: original,
        Game: game,
        Other: other,
        Adaptions: [ anime, manga, visualNovel, lightNovel, original, game, other ]
    },
    EntryStates: {
        PreAiring: preAiring,
        Airing: airing,
        Finished: finished,
        Uncompleted: uncompleted,
        States: [ preAiring, airing, finished, uncompleted ]
    },
    Seasons: {
        Winter: winter,
        Spring: spring,
        Summer: summer,
        Fall: fall,
        Seasons: [ winter, spring, summer, fall ]
    },
    EntryTitleTypes: {
        Title: title,
        Synonym: synonym
    }
};
