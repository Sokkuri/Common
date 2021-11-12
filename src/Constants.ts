/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// #region Builder

function buildKey(entity: "global" | "anime" | "company" | "userListEntry", ...args: string[]) {
    return `${entity}.${args.join(".")}`;
}

function buildSeason(season: string) {
    return buildKey("global", "season", season);
}

function buildTag(tag: string) {
    return buildKey("global", "tag", tag);
}

function buildAnimeType(type: string) {
    return buildKey("anime", "type", type);
}

function buildAnimeSource(source: string) {
    return buildKey("anime", "source", source);
}

function buildAnimeState(state: string) {
    return buildKey("anime", "state", state);
}

function buildCompanyType(type: string) {
    return buildKey("company", "type", type);
}

function buildUserListEntryState(state: string) {
    return buildKey("userListEntry", "state",  state);
}

// #endregion

export default {
    Global: {
        Season: {
            Winter: buildSeason("winter"),
            Spring: buildSeason("spring"),
            Summer: buildSeason("summer"),
            Fall: buildSeason("fall")
        },
        Tag: {
            Action: buildTag("action"),
            Adventure: buildTag("adventure"),
            Alien: buildTag("alien"),
            Android: buildTag("android"),
            BoysLove: buildTag("boysLove"),
            Car: buildTag("car"),
            Comedy: buildTag("comedy"),
            Demon: buildTag("demon"),
            Drama: buildTag("drama"),
            Ecchi: buildTag("ecchi"),
            Fantasy: buildTag("fantasy"),
            Game: buildTag("game"),
            Ghost: buildTag("ghost"),
            GirlsLove: buildTag("girlsLove"),
            Gourmet: buildTag("gourmet"),
            Harem: buildTag("harem"),
            Historical: buildTag("historical"),
            Horror: buildTag("horror"),
            Idol: buildTag("idol"),
            Isekai: buildTag("isekai"),
            Josei: buildTag("josei"),
            Magic: buildTag("magic"),
            MagicalGirl: buildTag("magicalGirl"),
            MartialArts: buildTag("martialArts"),
            Mecha: buildTag("mecha"),
            Military: buildTag("military"),
            Monster: buildTag("monster"),
            Music: buildTag("music"),
            Mystery: buildTag("mystery"),
            Parody: buildTag("parody"),
            Pirat: buildTag("pirat"),
            Police: buildTag("police"),
            Psychological: buildTag("psychological"),
            Romance: buildTag("romance"),
            Samurai: buildTag("samurai"),
            School: buildTag("school"),
            SciFi: buildTag("sciFi"),
            Seinen: buildTag("seinen"),
            Shoujo: buildTag("shoujo"),
            Shounen: buildTag("shounen"),
            SliceOfLife: buildTag("sliceOfLife"),
            Space: buildTag("space"),
            Sport: buildTag("sport"),
            Steampunk: buildTag("steampunk"),
            SuperPower: buildTag("superPower"),
            Supernatural: buildTag("supernatural"),
            Thriller: buildTag("thriller"),
            Tsundere: buildTag("tsundere"),
            Vampire: buildTag("vampire"),
            War: buildTag("war"),
            Witch: buildTag("witch"),
            Wizard: buildTag("wizard"),
            Yandere: buildTag("yandere")
        }
    },
    Anime: {
        Type: {
            Series: buildAnimeType("series"),
            Movie: buildAnimeType("movie"),
            Special: buildAnimeType("special"),
            OVA: buildAnimeType("ova"),
            ONA: buildAnimeType("ona")
        },
        Source: {
            Manga: buildAnimeSource("manga"),
            VisualNovel: buildAnimeSource("visualNovel"),
            LightNovel: buildAnimeSource("lightNovel"),
            Original: buildAnimeSource("original"),
            Game: buildAnimeSource("game"),
            Other: buildAnimeSource("other")
        },
        State: {
            PreAiring: buildAnimeState("preAiring"),
            Airing: buildAnimeState("airing"),
            Finished: buildAnimeState("finished"),
            Uncompleted: buildAnimeState("uncompleted")
        }
    },
    Company: {
        Type: {
            Publisher: buildCompanyType("publisher"),
            Studio: buildCompanyType("studio"),
            StreamingService: buildCompanyType("streamingService"),
            DeveloperStudio: buildCompanyType("developerStudio"),
            TvSender: buildCompanyType("tvSender")
        }
    },
    UserListEntry: {
        State: {
            Planned: buildUserListEntryState("planned"),
            InProgress: buildUserListEntryState("inProgress"),
            Completed: buildUserListEntryState("completed"),
            Paused: buildUserListEntryState("paused"),
            Canceled: buildUserListEntryState("canceled")
        }
    }
};
