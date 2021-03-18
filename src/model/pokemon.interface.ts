interface Abilities{
    ability: Generic;
    is_hidden: boolean;
    slot: number;
}

interface GameIndices{
    game_index:number;
    version:Generic;
}

interface HeldItems{
    item:Generic;
    version_details:VersionDetail;
}

interface VersionDetail{
    rarity: number;
    version: Generic;
}

interface Moves{
    move:Generic;
    version_group_detail:VersionGroupDetail;
}

interface VersionGroupDetail{
    level_learned_at:number;
    move_learn_method:Generic;
    version_group:Generic;
}

interface Sprites{
    back_default:string;
    back_female:string;
    back_shiny:string;
    back_shiny_female:string;
    front_default:string;
    front_female:string;
    front_shiny:string;
    front_shiny_female:string;
}

interface Stats{
    base_stat:number;
    effort:number;
    stat:Generic;
}

interface Types{
    slot:number;
    type:Generic;
}

interface Generic{
    name:string;
    url:string;
}

export interface Pokemon{
    abilities: Array<Abilities>;
    base_experience:number;
    forms:Array<Generic>;
    game_indices:Array<GameIndices>;
    height: number;
    held_items:Array<HeldItems>;
    id:number;
    is_default:boolean;
    location_area_encounters:string;
    moves:Array<Moves>;
    name:string;
    order:number;
    species:Generic;
    sprites: Sprites;
    stats:Array<Stats>;
    types:Array<Types>;
    weight:number;
}