// modid shortcuts
let MC = (id) => `minecraft:${id}`
let C = (id) => `create:${id}`
let MYST = (id) => `mysticalagriculture:${id}`
// minecraft materials
const COBBL = 'cobblestone'
const CRSDT = 'coarse_dirt'
const DIRT = 'dirt'
const SND = 'sand'
const STN = 'stone'
const BLU_ICE = 'blue_ice'
const FE = 'iron'
const AU = 'gold'
const RE = 'redstone'
const DMD = 'diamond'
const AMHST = 'amethyst'
const NTHR = 'nether'
const QRTZ = 'quartz'
// create materials
const ANDT = 'andesite'
const ZI = 'zinc'
const CU = 'copper'
const BRSS = 'brass'
const RQRTZ = 'rose_quartz'
const F_GLSS = 'framed_glass'
const PRECISION = 'precision_mechanism'
const STURDY = 'sturdy_sheet'
// mysta basics
const ESS = 'essence'
const PROSP = 'prosperity'
const GEM = 'gemstone'
const SHRD = 'shard'
const INFCRYSTAL = 'infusion_crystal'
const MASTERCRYS = 'master_infusion_crystal'
// mysta tier essence
const INFRM = 'inferium'
const PDNTM = 'prudentium'
const TERTM = 'tertium'
const IMPRM = 'inperium'
const SUPRM = 'supremium'
// elements
const FIRE = 'fire'
const H20 = 'water'
// requires kubejs create and mysticalagriculture
onEvent('recipes', event => {
    // infusion crystals
    event.remove({id: 'mysticalagriculture:infusion_crystal'})
    event.remove({id: 'mysticalagriculture:master_infusion_crystal'})
    event.recipes.createMixing(MYST(INFCRYSTAL), [
        MYST('inferium_essence'),
        MYST('inferium_essence'),
        MYST('inferium_essence'),
        MYST('inferium_essence'),
        MYST('prosperity_shard'),
        MYST('prosperity_shard'),
        MYST('prosperity_shard'),
        MYST('prosperity_shard'),
        MC('diamond')
    ]).id('finality:mysta_infusion_crystal')
    event.recipes.createMixing(MYST(MASTERCRYS), [
        MYST('supremium_essence'),
        MYST('supremium_essence'),
        MYST('supremium_essence'),
        MYST('supremium_essence'),
        MYST('prosperity_shard'),
        MYST('prosperity_shard'),
        MYST('prosperity_shard'),
        MYST('prosperity_shard'),
        MYST('supremium_gemstone')
    ]).id('finality:mysta_master_infusion_crystal')
    // renewable prosperity shards
    event.recipes.createCrushing([
        Item.of(MYST('prosperity_shard')).withChance(0.25), 
        Item.of(MYST('prosperity_seed_base')).withChance(0.009765625)
    ], MC(CRSDT)).processingTime(250).id('finality:renew_prosperity')
    // redstone
    event.remove({id: 'mysticalagriculture:essence/minecraft/redstone'})
    event.recipes.createMixing([Item.of(MC('redstone'), 16)], [Item.of(MYST('redstone_essence'), 8), C('cinder_flour')]).id('finality:mysta_mixing_redstone')
    event.recipes.createMechanicalCrafting(Item.of(MC('redstone'), 16), [
        'RRR',
        'RFR',
        'RRR'
    ], {
        R: MYST('redstone_essence'),
        F: C('cinder_flour')
    }).id('finality:mysta_mechanical_redstone')

    // fire essences
    event.remove({id: 'mysticalagriculture:essence/minecraft/red_sand'}) // converted to mixing and mechanical crafting recipe exclusive
    event.recipes.createMixing([Item.of(MC('red_sand'), 16)], [Item.of(MYST('dirt_essence'), 2), Item.of(MYST('fire_essence'), 2), MC('gold_nugget')]).id('finality:mysta_mix_red_sand')
    event.recipes.createMechanicalCrafting(Item.of(MC('red_sand'), 16), [
        'DF',
        'FG'
    ], {
        D: MYST('dirt_essence'),
        F: MYST('fire_essence'),
        G: MC('gold_nugget')
    }).id('finality:mysta_mechanical_red_sand')
    event.remove({id: 'mysticalagriculture:essence/minecraft/sand'}) // converted to mixing and mechanical crafting recipe exclusive
    event.recipes.createMixing([
        Item.of(MC('sand'), 16)
    ], [
        Item.of(MYST('dirt_essence'), 2), 
        Item.of(MYST('fire_essence'), 2)
    ]).id('finality:mysta_mix_sand')
    event.recipes.createMechanicalCrafting([
        Item.of(MC('sand'), 16)
    ], [
        'DF',
        'FD'
    ], {
        D: MYST('dirt_essence'),
        F: MYST('fire_essence')
    }).id('finality:mysta_mechanical_sand')

    event.remove({id: 'mysticalagriculture:essence/minecraft/soul_sand'}) // converted to mixing and mechanical crafting recipe exclusive
    event.recipes.createMixing(Item.of(MC('soul_sand'), 16), [Item.of(MYST('nether_essence'), 8), MYST('fire_essence')]).id('finality:mysta_mix_soul_sand')
    event.recipes.createMechanicalCrafting(Item.of(MC('soul_sand'), 16), [
        'NNN',
        'NFN',
        'NNN'
    ], {
        N: MYST('nether_essence'),
        F: MYST('fire_essence')
    }).id('finality:mysta_mechanical_soul_sand')

    event.remove({id: 'mysticalagriculture:essence/minecraft/lava_bucket'}) // converted to lava fluid output, no longer requires a bucket
    event.recipes.createCompacting([Fluid.of('minecraft:lava', 1000)],'5x mysticalagriculture:fire_essence').id('finality:mysta_compacting_lava')

    event.remove({id: 'mysticalagriculture:essence/minecraft/tuff'}) // converting to compacting and mechanical crafting recipe exclusive
    event.recipes.createCompacting(Item.of(MC('tuff'), 12), [Item.of(MYST('stone_essence'), 5), MYST('fire_essence')]).id('finality:mysta_compacting_tuff')
    event.recipes.createMechanicalCrafting(Item.of(MC('tuff'), 12), [
        ' S ',
        'SFS',
        ' S '
    ], {
        S: MYST('stone_essence'),
        F: MYST('fire_essence')
    }).id('finality:mysta_mechanical_tuff')
    event.remove({id: 'mysticalagriculture:essence/minecraft/flint'}) // fully removed, get flint the create way
    // earth essence related
    event.remove({id: 'mysticalagriculture:essence/minecraft/soul_soil'})
    event.recipes.createMixing(Item.of(MC('soul_soil'), 16), [Item.of(MYST('nether_essence'), 8), MYST('earth_essence')]).id('finality:mysta_mixing_soul_soil')

    // stone essence
    event.remove({id: 'mysticalagriculture:essence/minecraft/cobblestone'}) // just use a cobble generator lol
    event.remove({id: 'mysticalagriculture:essence/minecraft/stone'}) // compacting exclusive
    event.recipes.createCompacting(Item.of(MC('stone'), 24), [Item.of(MYST('stone_essence'), 9)]).id('finality:mysta_compacting_stone')

    event.remove({id: 'mysticalagriculture:essence/minecraft/andesite'}) // andesite compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(MC('andesite'), 16), [Item.of(MYST('stone_essence'), 4), MYST('nether_quartz_essence')]).id('finality:mysta_compacting_andesite')
    event.recipes.createMechanicalCrafting('16x minecraft:andesite', [
        ' S ',
        'SSS',
        ' Q '
    ], {
        S: MYST('stone_essence'),
        Q: MYST('nether_quartz_essence')
    }).id('finality:mysta_mechanical_andesite')
    event.remove({id: 'mysticalagriculture:essence/minecraft/diorite'}) // diorite compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(MC('diorite'), 16), [Item.of(MYST('stone_essence'), 3), Item.of(MYST('nether_quartz_essence'), 3)]).id('finality:mysta_compacting_diorite')
    event.recipes.createMechanicalCrafting(Item.of(MC('diorite'), 16), [
        'SS ',
        'S Q',
        ' QQ'
    ], {
        S: MYST('stone_essence'),
        Q: MYST('nether_quartz_essence')
    }).id('finality:mysta_mechanical_diorite')

    event.remove({id: 'mysticalagriculture:essence/minecraft/granite'}) // granite compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(MC('granite'), 16), [Item.of(MYST('stone_essence'), 4), Item.of(MYST('nether_quartz_essence'), 2)]).id('finality:mysta_compacting_granite')
    event.recipes.createMechanicalCrafting('16x minecraft:granite', [
        ' S ',
        'SQS',
        ' Q '
    ], {
        S: MYST('stone_essence'),
        Q: MYST('nether_quartz_essence')
    }).id('finality:mysta_mechanical_granite')

    event.remove({id: 'mysticalagriculture:essence/minecraft/dripstone'}) // dripstone compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(MC('dripstone_block'), 16), [Item.of(MYST('stone_essence'), 4), MYST('water_essence')])
    event.recipes.createMechanicalCrafting(Item.of(MC('dripstone_block'), 16), [
        ' S ',
        'SWS',
        ' S '
    ], {
        S: MYST('stone_essence'),
        W: MYST('water_essence')
    }).id('finality:mysta_mechanical_dripstone')
    event.remove({id: 'mysticalagriculture:essence/minecraft/calcite'}) // calcite compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(MC('calcite'), 16), [Item.of(MYST('stone_essence'), 8), MYST('amethyst_essence')]).id('finality:mysta_compacting_calcite')
    event.recipes.createMechanicalCrafting(Item.of(MC('calcite'), 16), [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: MYST('stone_essence'),
        A: MYST('amethyst_essence')
    }).id('finality:mysta_mechanical_calcite')
    event.remove({id: 'mysticalagriculture:essence/minecraft/blackstone'}) // blackstone compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(MC('blackstone'), 24), [Item.of(MYST('nether_essence'), 8), MYST('stone_essence')]).id('finality:mysta_compacting_blackstone')
    event.recipes.createMechanicalCrafting('24x minecraft:blackstone', [
        'NNN',
        'NSN',
        'NNN'
    ], {
        N: MYST('nether_essence'),
        S: MYST('stone_essence')
    }).id('finality:mysta_mechanical_blackstone')
    event.remove({id: 'mysticalagriculture:essence/minecraft/gravel'}) // gravel mixing and mechanical crafting exclusive
    event.recipes.createMixing(Item.of(MC('gravel'), 16), [Item.of(MYST('dirt_essence'), 2), Item.of(MYST('stone_essence'), 2)]).id('finality:mysta_mixing_gravel')
    event.recipes.createMechanicalCrafting(Item.of(MC('gravel'), 16), [
        'DS',
        'SD'
    ], {
        D: MYST('dirt_essence'),
        S: MYST('stone_essence')
    }).id('finality:mysta_mechanical_gravel')
    // create orestone essence recipes
    event.remove({id: 'mysticalagriculture:essence/create/asurine'}) // asurine compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(C('asurine'), 16), [Item.of(MYST('stone_essence'), 8), MYST('zinc_essence')]).id('finality:mysta_compacting_asurine')
    event.recipes.createMechanicalCrafting(Item.of(C('asurine'), 16), [
        'SSS',
        'SZS',
        'SSS'
    ], {
        S: MYST('stone_essence'),
        Z: MYST('zinc_essence')
    }).id('finality:mysta_mechanical_asurine')
    event.remove({id: 'mysticalagriculture:essence/create/crimsite'}) // crimsite compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(C('crimsite'), 16), [Item.of(MYST('stone_essence'), 8), MYST('iron_essence')]).id('finality:mysta_compacting_crimsite')
    event.recipes.createMechanicalCrafting(Item.of(C('crimsite'), 16), [
        'SSS',
        'SIS',
        'SSS'
    ], {
        S: MYST('stone_essence'),
        I: MYST('iron_essence')
    }).id('finality:mysta_mechanical_crimsite')
    event.remove({id: 'mysticalagriculture:essence/create/ochrum'}) // ochrum compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(C('ochrum'), 16), [Item.of(MYST('stone_essence'), 8), MYST('gold_essence')]).id('finality:mysta_compacting_ochrum')
    event.recipes.createMechanicalCrafting(Item.of(C('ochrum'), 16), [
        'SSS',
        'SGS',
        'SSS'
    ], {
        S: MYST('stone_essence'),
        G: MYST('gold_essence')
    }).id('finality:mysta_mechanical_ochrum')
    event.remove({id: 'mysticalagriculture:essence/create/veridium'}) // veridium compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(C('veridium'), 16), [Item.of(MYST('stone_essence'), 8), MYST('copper_essence')]).id('finality:mysta_compacting_veridium')
    event.recipes.createMechanicalCrafting(Item.of(C('veridium'), 16), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: MYST('stone_essence'),
        C: MYST('copper_essence')
    }).id('finality:mysta_mechanical_veridium')
    event.remove({id: 'mysticalagriculture:essence/create/limestone'}) // create limestone compacting and mechanical crafting exclusive
    event.recipes.createCompacting(Item.of(C('limestone'), 16), [Item.of(MYST('limestone_essence'), 9)]).id('finality:mysta_compacting_limestone')
    event.recipes.createMechanicalCrafting(Item.of(C('limestone'), 16), [
        'LLL',
        'LLL',
        'LLL'
    ], {
        L: MYST('limestone_essence')
    }).id('finality:mysta_mechanical_limestone')

    // diamond essence
    event.remove({id: 'mysticalagriculture:essence/minecraft/diamond'}) // diamond essence compacting exclusive
    event.recipes.createCompacting(MC('diamond'), [Item.of(MYST('diamond_essence'), 9)]).id('finality:mysta_compacting_diamond')
    event.remove({id: 'mysticalagriculture:essence/minecraft/heart_of_the_sea'}) // heart of the sea compacting and mechanical crafting exclusive
    event.recipes.createMixing(MC('heart_of_the_sea'), [MC('nautilus_shell'), Item.of(MYST('diamond_essence'), 4), Item.of(MYST('prismarine_essence'), 4), Item.of(MYST('squid_essence'), 4)]).id('finality:mysta_mixing_sea_heart')
    event.recipes.createMechanicalCrafting('minecraft:heart_of_the_sea', [
        '  S  ',
        ' SDP ',
        'PDNDP',
        ' PDS ',
        '  S  '
    ], {
        D: MYST('diamond_essence'),
        S: MYST('squid_essence'),
        P: MYST('prismarine_essence'),
        N: MC('nautilus_shell')
    })
    
    // machine frame related
    event.remove({id: 'mysticalagriculture:machine_frame'})
    event.remove({id: 'mysticalagriculture:soul_extractor'})
    event.remove({id: 'mysticalagriculture:basic_reprocessor'})
    event.recipes.createMechanicalCrafting(MYST('machine_frame'), [
        'IIIII',
        'IRRRI',
        'IRSRI',
        'IRRRI',
        'IIIII'
    ], {
        I: C('iron_sheet'),
        R: MC('redstone'),
        S: '#forge:stone'
    }).id('finality:mysta_machine_frame')
    event.recipes.createMechanicalCrafting('mysticalagriculture:soul_extractor', [
        'FFSFF',
        'F M F',
        'DBRBD',
        'F M F',
        'FFSFF'
    ], {
        F: MYST('machine_frame'),
        S: MYST('soulium_ingot'),
        D: MYST('soulium_dagger'),
        M: C('mechanical_bearing'),
        R: C('radial_chassis'),
        B: C('deployer')
    }).id('finality:mysta_soul_extractor')
    event.recipes.createMechanicalCrafting('mysticalagriculture:basic_reprocessor', [
        'FFSFF',
        'F M F',
        'HBRBH',
        'F M F',
        'FFSFF'
    ], {
        F: MYST('machine_frame'),
        S: MYST('soulium_ingot'),
        H: MC('iron_hoe'),
        M: C('mechanical_bearing'),
        B: C('deployer'),
        R: C('radial_chassis')
    }).id('finality:mysta_basic_reprocessor')

    // miscellaneous
    event.remove({id: 'mysticalagriculture:mystical_fertilizer'})
    event.remove({id: 'mysticalagriculture:mystical_fertilizer_better'})
    event.recipes.createMixing(Item.of(MYST('mystical_fertilizer'), 4), [Item.of(MYST('inferium_essence'), 4), Item.of(MC('bone_meal'), 4), MC('diamond')]).id('finality:mysta_mystical_fertilizer')
    event.recipes.createMixing(Item.of(MYST('mystical_fertilizer'), 8), [Item.of(MYST('inferium_essence'), 4), Item.of(MYST('fertilized_essence'), 4), MC('diamond')]).id('finality:mysta_mystical_fertilizer_better_eff')

})