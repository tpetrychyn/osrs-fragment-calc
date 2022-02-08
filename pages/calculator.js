import React from "react"

class Fragment {
    name = ""
    id = -1
    description = ""
    setEffects = []
    imageUrl = ""
    owned = true
    mustInclude = false

    constructor(name, id, description) {
        this.name = name
        this.id = id
        this.description = description
        this.imageUrl = "https://oldschool.runescape.wiki/images/" + name.replaceAll(" ", "_") + ".png"
    }
}

class SetEffect {
    name = ""
    description = ""
    counts = []
    fragments
    imageUrl = ""
    chosen = false
    chosenCount = 0

    constructor(name, counts, description, fragments, imageUrlOverride) {
        this.name = name
        this.counts = counts
        this.description = description
        this.fragments = fragments
        this.fragments.forEach(f => {
            f.setEffects.push(this)
        })
        this.imageUrl = "https://oldschool.runescape.wiki/images/" + name.replaceAll(" ", "_") + "_detail.png"
    }
}

const alchemaniac = new Fragment("Alchemaniac", 36," Players will receive 15/30/50% extra coins when casting High Level Alchemy on items.")
const arcaneConduit = new Fragment("Arcane Conduit", 6, "Runes and magic weapon charges have a 40/60/90% chance to be saved.")
const armadyleanDecree = new Fragment("Armadylean Decree", 18, "When wielding four Armadylean items, enchanted bolt effects have a 25/50/100% increased chance to activate.")
const bandosianMight = new Fragment("Bandosian Might", 17, "When wielding four Bandosian items, the player's max melee hit is increased by 1/2/4 for every attack speed a weapon has.")
const barbarianPestWars = new Fragment("Barbarian Pest Wars", 51, "Reward currency earned for playing the following minigames are increased by x2/x3/x4:")
const bottomlessQuiver = new Fragment("Bottomless Quiver", 4, "Ranged ammunition and ranged weapon charges have a 40/60/90% chance to be saved, excluding Chinchompa (weapon)|chinchompas.")
const catchOfTheDay = new Fragment("Catch Of The Day", 22, "All types of Fishing activities have a 1 in 300/200/80 chance, per catch, to roll the rare drop table once.")
const certifiedFarmer = new Fragment("Certified Farmer", 41, "Farming yields have a 25/50/100% chance to be doubled, and are converted to bank notes upon harvest.")
const chefsCatch = new Fragment("Chef's Catch", 21, "Players have a 20/35/50% chance of cooking a raw fish upon catching them. Cooking experience is granted, even if players do not have the level required to cook them normally.")
const chinchonkers = new Fragment("Chinchonkers", 39, "Catching Chinchompa (disambiguation)|chinchompas grant 50/100/100% more Hunter experience. At level 3, players will receive two chinchompas per successful capture.")
const cluedIn = new Fragment("Clued In", 49, "The drop rate of scroll boxes from NPCs are increased to 1 in 30/25/15.")
const deeperPockets = new Fragment("Deeper Pockets", 24, "Players have a 20/50/100% chance to receive double loot when pickpocketing NPCs. This stacks multiplicatively with rogue equipment.")
const dineDash = new Fragment("Dine & Dash", 40, "Players have a 10/20/50% chance to receive an extra piece of cooked food while cooking.")
const divineRestoration = new Fragment("Divine Restoration", 9, "Players will have their prayer points restored by one every 15/9/3.6 seconds.")
const dragonOnABit = new Fragment("Dragon On A Bit", 33, "Players have a 10/20/40% chance to save the materials used whilst crafting dragonhide armour.")
const enchantedJeweler = new Fragment("Enchanted Jeweler", 35, "Each enchantment spell cast will enchant up to 5/10/25 pieces of jewellery, granting the full Magic experience.")
const goldenBrickRoad = new Fragment("Golden Brick Road", 45, "When a mark of grace appears when training on a Rooftop Agility Course, 4,000/7,000/15,000 coins will appear alongside it.")
const graveRobber = new Fragment("Grave Robber", 46, "The amount of hallowed marks received when looting Coffin (Hallowed Sepulchre)|coffins within the Hallowed Sepulchre is increased by 50/150/300%.")
const homewrecker = new Fragment("Homewrecker", 26, "Players have a x2/x3/x4 chance of receiving bird nests when chopping trees, and are sent to the bank rather than falling to the ground.")
const hotOnTheTrail = new Fragment("Hot On The Trail", 27, "Players have a 2/5/10% chance to obtain a scroll box whilst lighting logs via Firemaking.")
const imcandosApprentice = new Fragment("Imcando's Apprentice", 34, "Players have a 20/50/75% chance to craft an extra piece of gemmed jewellery, granting Crafting experience for the extra jewellery.")
const justDruid = new Fragment("Just Druid!", 44, "Players will receive 10/20/40% extra Herblore experience for each grimy herb cleaned.")
const largerRecharger = new Fragment("Larger Recharger", 11, "Players will have their special attack energy restored by 10% every 25/20/10 seconds.")
const livinOnAPrayer = new Fragment("Livin' On A Prayer", 8, "The drain rate of activated prayers are reduced by 15/30/60%.")
const messageInABottle = new Fragment("Message In A Bottle", 50, "The chance of receiving clue geodes, clue nest|nests, and Clue bottle|bottles from skilling are increased by x3/x5/x10.")
const mixologist = new Fragment("Mixologist", 43, "Players will have a 25/50/100% chance to mix a 4-dose potion rather than a 3-dose potion, with a 20/50/100% chance to save the secondary ingredient.")
const moltenMiner = new Fragment("Molten Miner", 30, "If applicable, ores mined have a 20/50/100% chance to be smelted into bars. Smithing experience is granted, even if players do not have the level required to smelt them normally.")
const mothersMagicFossils = new Fragment("Mother's Magic Fossils", 53, "The chance of receiving golden nuggets from the Motherlode Mine is increased by x2/x3/x4. The amount of pizazz points received from activities in the Mage Training Arena is increased by x2/x3/x4. The chance of receiving fossils from activities on Fossil Island is increased by x2/x3/x4.")
const plankStretcher = new Fragment("Plank Stretcher", 28, "Players will have a 10/20/50% chance to save their planks whilst training Construction.")
const prayingRespects = new Fragment("Praying Respects", 10, "Remains are automatically buried/scattered, granting 50/100/200% of the usual Prayer experience. League experience multipliers are applied.")
const proTips = new Fragment("Pro Tips", 38, "Players will receive 30/50/100% more bolt tips per gem whilst making them.")
const profconstchional = new Fragment("Profletchional", 37, "Fletching logs and stringing bows grant 30/50/100% more Fletching experience.")
const rockSolid = new Fragment("Rock Solid", 29, "Iron rock|Iron, Sandstone rock|sandstone, and granite rocks have a 25/50/75% chance to not be depleted upon being mined.")
const roguesChompyFarm = new Fragment("Rogues' Chompy Farm", 52, "The chance of successfully cracking the wall safe at the end of the Rogues' Den maze is increased by 10/20/40%. Each chompy bird killed will count as 2/3/4 kills when checking chompy kill-count via the ogre bow. The amount of points earned from the Tithe Farm is increased by x2/x3/x4.")
const rootyTooty2xRuneys = new Fragment("Rooty Tooty 2x Runeys", 47, "Players have a 20/40/80% chance to receive an extra rune for each rune crafted.")
const rumpleBowString = new Fragment("Rumple-Bow-String", 32, "The Spin Flax spell gives 10/15/27 bow strings instead of the usual 5.")
const runeEscape = new Fragment("Rune Escape", 48, "Players will no longer receive mind (lv-1), body (lv-2), elemental runes (lv-3) when crafting runes at the Ourania Altar.")
const saradoministDefence = new Fragment("Saradominist Defence", 20,  "When wielding four Saradominist items, the player's max hit is increased by 2/5/10 if they have taken damage in the last 3.6 seconds.")
const seedyBusiness = new Fragment("Seedy Business", 42, "Players have a 10/25/50% chance to save their seed upon planting it in a farming patch.")
const slashBurn = new Fragment("Slash & Burn", 25, "Players have a 20/35/50% chance of burning logs upon chopping them. Firemaking experience is granted, even if players do not have the level required to burn them normally.")
const slaynPay = new Fragment("Slay 'n' Pay", 16, "Players will earn 10/20/50% more slayer reward points upon completing a slayer task.")
const slayAllDay = new Fragment("Slay All Day", 14, "Players will heal 1/2/3 hitpoints for every monster killed as part of a slayer task.")
const smithingDouble = new Fragment("Smithing Double", 31, "Players have a 5/15/30% chance to smith an extra item when smithing items at an anvil, granting Smithing experience for the extra item. Extra items will drop to the floor if players have no inventory space.")
const smoothCriminal = new Fragment("Smooth Criminal", 23, "The chance to successfully pickpocket NPCs is increased by 15/25/50%. At level 2, players will no longer take damage when Stun (status)|stunned by a failed pickpocket attempt.")
const specialDiscount = new Fragment("Special Discount", 12, "Special attacks whose energy cost is greater than 50/40/25% will cost 50/40/25% energy instead.")
const superiorTracking = new Fragment("Superior Tracking", 15, "Superior slayer monsters have a 1 in 150/100/30 chance of spawning during a slayer task for eligible slayer monsters.")
const tacticalDuelist = new Fragment("Tactical Duelist", 2, "Melee weapon charges have a 20/40/80% chance to be saved.")
const thrallDamage = new Fragment("Thrall Damage", 7, "The max hit of thralls are increased by x2/x3/x4. Damage is rounded up.")
const unholyRanger = new Fragment("Unholy Ranger", 3, "The player's accuracy for ranged weapons is increased by 30/60/100% when they have no prayer points remaining. Excludes the dwarf multicannon.")
const unholyWarrior = new Fragment("Unholy Warrior", 1, "The player's accuracy for melee weapons is increased by 12/20/30% when they have no prayer points remaining.")
const unholyWizard = new Fragment("Unholy Wizard", 5, "The player's accuracy for magic attacks is increased by 40/70/125% when they have no prayer points remaining.")
const venomaster = new Fragment("Venomaster", 13, "The player's attacks have a chance to inflict poison that starts at 3/5/7 damage. Players will gain poison immunity at level 2, and venom immunity at level 3.")
const zamorakianSight = new Fragment("Zamorakian Sight", 19, "When wielding four Zamorakian items, the player's accuracy for magic attacks is increased by 50/125/250%.")

const absoluteUnit = new SetEffect("Absolute Unit", [2, 3], "<b>[2]</b> Players take 30% less damage from monsters, with 50% of post-reduction damage reflected back to the attacker. <br/><br/> <b>[3]</b> Players take 50% less damage from monsters, with 100% of post-reduction damage reflected back to the attacker.", new Set([dragonOnABit, runeEscape, superiorTracking, armadyleanDecree, divineRestoration, tacticalDuelist, saradoministDefence, venomaster]))
const alchemist = new SetEffect("The Alchemist", [3], "<b>[3]</b> When cooking food, making jugs of wine, cleaning grimy herbs, or mixing potions, all items in the player's inventory will be processed at once and reward the full amount of experience.", new Set([goldenBrickRoad, dineDash, slayAllDay, certifiedFarmer, homewrecker, mixologist, justDruid]))
const chainMagic = new SetEffect("Chain Magic", [2, 3], "<b>[2]</b> Players have a 30% chance to perform another magic attack after a successful hit with magic. <br/><br/><b>[3]</b> Players have a 60% chance to perform another magic attack after a successful hit with magic.", new Set([thrallDamage, unholyWizard, zamorakianSight, mothersMagicFossils, deeperPockets, rootyTooty2xRuneys, hotOnTheTrail, imcandosApprentice]))
const craftsman = new SetEffect("The Craftsman", [3], "<b>[3]</b> When smelting ores, smithing bars and cannonballs, crafting with leather, glass, uncut gems, pottery, battlestaves, spinning flax and wool, fletching logs and cutting bolt tips, all items in the player's inventory will be processed at once and reward the full amount of experience.",  new Set([rumpleBowString, dragonOnABit, imcandosApprentice, graveRobber, profconstchional, proTips]))
const doubleTap = new SetEffect("Double Tap", [2, 3], "<b>[2]</b> Players have a 30% chance to perform another ranged attack after a successful hit with ranged. <br/><br/> <b>[3]</b> Players have a 60% chance to perform another ranged attack after a successful hit with ranged.", new Set([smithingDouble, rumpleBowString, roguesChompyFarm, unholyRanger, armadyleanDecree, chinchonkers, proTips]))
const drakansTouch = new SetEffect("Drakan's Touch", [2, 3], "<b>[2]</b> Successful hits have a 50% chance of restoring the player's hitpoints by 5% of the damage dealt. <br/><br/> <b>[3]</b> Successful hits have a 50% chance of restoring the player's hitpoints by 10% of the damage dealt.", new Set([unholyWizard, zamorakianSight, cluedIn, unholyRanger, prayingRespects, largerRecharger, specialDiscount]))
const endlessKnowledge = new SetEffect("Endless Knowledge", [3], "<b>[3]</b> Players receive an arcane grimoire from The Sage, which allows the ability to freely switch spellbooks anywhere.", new Set([arcaneConduit, thrallDamage, enchantedJeweler, alchemaniac, plankStretcher, mothersMagicFossils]))
const fastMetabolism = new SetEffect("Fast Metabolism", [2], "<b>[2]</b> Hitpoint regeneration is increased by x4.", new Set([graveRobber, rockSolid, bandosianMight, largerRecharger, hotOnTheTrail, venomaster]))
const greedyGatherer = new SetEffect("Greedy Gatherer", [2, 3], "<b>[2]</b> Players will receive double the resources (with full experience) from Fishing, Woodcutting, Mining, and Farming. <br/><br/> <b>[3]</b> Players will receive triple the resources (with full experience) from Fishing, Woodcutting, Mining, and Farming.", new Set([messageInABottle, moltenMiner, rockSolid, certifiedFarmer, chefsCatch, slashBurn, justDruid]))
const knifesEdge = new SetEffect("Knife's Edge", [2, 3], "<b>[2]</b> Players will deal 0.3% additional damage for every hitpoint missing.<br/><br/> <b>[3]</b> Players will deal 0.6% additional damage for every hitpoint missing.", new Set([barbarianPestWars, messageInABottle, slayAllDay, bottomlessQuiver, livinOnAPrayer, prayingRespects, unholyWarrior, saradoministDefence]))
const lastRecall = new SetEffect("Last Recall", [4], "<b>[4]</b> Players receive a crystal of memories from The Sage, which allows them to teleport themselves back to the location where their most recent teleport occurred, with some caveats regarding its usage.", new Set([enchantedJeweler, runeEscape, cluedIn, slaynPay, superiorTracking, chinchonkers, homewrecker, profconstchional, rootyTooty2xRuneys, smoothCriminal]))
const personalBanker = new SetEffect("Personal Banker", [2, 3], "<b>[2]</b> Resources obtained from Fishing, Woodcutting, Mining, and Farming have a 50% chance to be deposited directly to the player's bank. <br/><br/> <b>[3]</b> Resources obtained from Fishing, Woodcutting, Mining, and Farming are deposited directly to the player's bank.", new Set([smithingDouble, alchemaniac, moltenMiner, seedyBusiness, catchOfTheDay, deeperPockets]))
const trailblazer = new SetEffect("Trailblazer", [3], "<b>[3]</b> Players receive a portable waystone from The Sage, which can teleport to other waystones.", new Set([arcaneConduit, goldenBrickRoad, bottomlessQuiver, seedyBusiness, chefsCatch, smoothCriminal, unholyWarrior]))
const twinStrikes = new SetEffect("Twin Strikes", [2, 3], "<b>[2]</b> Players have a 30% chance to perform another melee attack after a successful hit with melee. <br/><br/> <b>[3]</b> Players have a 60% chance to perform another melee attack after a successful hit with melee.", new Set([barbarianPestWars, slaynPay, divineRestoration, livinOnAPrayer, tacticalDuelist, bandosianMight, specialDiscount]))
const unchainedTalent = new SetEffect("Unchained Talent", [3], "<b>[3]</b> All non-combat skills are permanently boosted by +8. This boost is not limited to unlocked skills.", new Set([plankStretcher, roguesChompyFarm, dineDash, catchOfTheDay, slashBurn, mixologist]))

lastRecall.imageUrl = "https://oldschool.runescape.wiki/images/Last_Recall_%28Shattered_Relics%29_detail.png"


export default class Calculator extends React.Component {
    state = {
        numSlots: 7,
        fragments: [
            alchemaniac,
            arcaneConduit,
            armadyleanDecree,
            bandosianMight,
            barbarianPestWars,
            bottomlessQuiver,
            catchOfTheDay,
            certifiedFarmer,
            chefsCatch,
            chinchonkers,
            cluedIn,
            deeperPockets,
            dineDash,
            divineRestoration,
            dragonOnABit,
            enchantedJeweler,
            goldenBrickRoad,
            graveRobber,
            homewrecker,
            hotOnTheTrail,
            imcandosApprentice,
            justDruid,
            largerRecharger,
            livinOnAPrayer,
            messageInABottle,
            mixologist,
            moltenMiner,
            mothersMagicFossils,
            plankStretcher,
            prayingRespects,
            proTips,
            profconstchional,
            rockSolid,
            roguesChompyFarm,
            rootyTooty2xRuneys,
            rumpleBowString,
            runeEscape,
            saradoministDefence,
            seedyBusiness,
            slashBurn,
            slaynPay,
            slayAllDay,
            smithingDouble,
            smoothCriminal,
            specialDiscount,
            superiorTracking,
            tacticalDuelist,
            thrallDamage,
            unholyRanger,
            unholyWarrior,
            unholyWizard,
            venomaster,
            zamorakianSight,
        ],
        setEffects: [
            absoluteUnit,
            alchemist,
            chainMagic,
            craftsman,
            doubleTap,
            drakansTouch,
            endlessKnowledge,
            fastMetabolism,
            greedyGatherer,
            knifesEdge,
            lastRecall,
            personalBanker,
            trailblazer,
            twinStrikes,
            unchainedTalent
        ],
        possibleBuild: null,
        buildPrompt: "Please select some set effects."
    };

    fragmentMustIncludeChanged = (idx) => {
        this.setState({
            fragments: [
                ...this.state.fragments.slice(0, idx),
                Object.assign(this.state.fragments[idx], { mustInclude: !this.state.fragments[idx].mustInclude }),
                ...this.state.fragments.slice(idx + 1)
            ]
        }, this.computeCombination)
    }

    onFragmentInBuildClicked = (frag) => {
        const fragIdx = this.state.fragments.findIndex((f) => {
            return f.name == frag.name
        })

        this.fragmentOwnedChanged(fragIdx)
    }

    fragmentOwnedChanged = (idx) => {
        this.setState({
            fragments: [
                ...this.state.fragments.slice(0, idx),
                Object.assign(this.state.fragments[idx], { owned: !this.state.fragments[idx].owned }),
                ...this.state.fragments.slice(idx + 1)
            ]
        }, this.computeCombination)
    }

    clickedSetCount = (idx, count) => {
        const se = this.state.setEffects[idx]

        const newChosenBool = se.chosenCount == count ? !se.chosen : true
        const newSetEffects = [
            ...this.state.setEffects.slice(0, idx),
            Object.assign(this.state.setEffects[idx], { chosen: newChosenBool, chosenCount: count }),
            ...this.state.setEffects.slice(idx + 1)
        ]

        this.setState({ setEffects: newSetEffects }, this.computeCombination)
    }

    clearAllSetsClicked = () => {
        this.state.setEffects.forEach(se => se.chosen = false)

        this.setState({ setEffects: this.state.setEffects, buildPrompt: "Please select some set effects.", possibleBuild: null })
    }

    clearAllFragmentsClicked = () => {
        this.state.fragments.forEach(fr => {
            fr.owned = true
            fr.mustInclude = false
        })

        this.setState({ fragments: this.state.fragments }, this.computeCombination)
    }

    setClicked = (idx) => {
        const se = this.state.setEffects[idx]

        if (se.counts.length > 1) {
            // if multiple counts, iterate through them before turning off
            let newChosenCount
            let newChosenBool
            if (se.chosen) {
                if (se.chosenCount == se.counts[0]) {
                    newChosenCount = se.counts[1]
                    newChosenBool = true
                } else {
                    newChosenBool = false
                }
            } else {
                newChosenCount = se.counts[0]
                newChosenBool = true
            }

            const newSetEffects = [
                ...this.state.setEffects.slice(0, idx),
                Object.assign(this.state.setEffects[idx], { chosen: newChosenBool, chosenCount: newChosenCount }),
                ...this.state.setEffects.slice(idx + 1)
            ]

            this.setState({ setEffects: newSetEffects }, this.computeCombination)
        } else {
            // if only 1 seteffect count just toggle
            const newSetEffects = [
                ...this.state.setEffects.slice(0, idx),
                Object.assign(this.state.setEffects[idx], { chosen: !se.chosen, chosenCount: se.counts[0] }),
                ...this.state.setEffects.slice(idx + 1)
            ]

            this.setState({ setEffects: newSetEffects }, this.computeCombination)
        }
    }

    computeCombination() {
        const fragments = new Set()
        const chosenSetEffects = this.state.setEffects.filter(set => set.chosen)

        if (chosenSetEffects.length > 8) {
            this.setState({ buildPrompt: "Cannot have more than 7 sets.", possibleBuild: null })
            return
        }

        chosenSetEffects
            .forEach(set => {
                [...set.fragments]
                    .filter(f => f.owned)
                    .forEach(f => {
                        fragments.add(f)
                    })
            })

        const mustIncludeFrags = new Set(this.state.fragments.filter(frag => frag.mustInclude))

        let numSlotsRemaining = this.state.numSlots
        if (mustIncludeFrags.size > numSlotsRemaining) {
            this.setState({ buildPrompt: "Cannot include more fragments than there are slots available.", possibleBuild: null})
            return
        }

        // For each selected set effect, maintain the number of needed fragments remaining
        let fragmentsRemaining = {}
        chosenSetEffects.forEach(set =>{fragmentsRemaining[set.name] = set.chosenCount})
        
        // Force inclusion of the fragments that must be included.
        let bestFragments = [...mustIncludeFrags]

        // Update the counts of all the set effect fragments still needed
        mustIncludeFrags.forEach(frag => frag.setEffects.forEach(se => 
            { 
                if (se.name in fragmentsRemaining)
                    fragmentsRemaining[se.name] = Math.max(0, fragmentsRemaining[se.name] - 1)
        }))

        let sumFragmentsRemaining = 0
        for (var key in fragmentsRemaining)
            sumFragmentsRemaining += fragmentsRemaining[key]

        if (sumFragmentsRemaining == 0)
        {
            this.setState({ possibleBuild: bestFragments})
            return
        } 

        // All of the fragments with two relevant effects (not including the mustInclude, because those are mandatory anyway)
        const doubleFrags = [...fragments].filter(frag => !frag.mustInclude && chosenSetEffects.find(s => s == frag.setEffects[0]) && chosenSetEffects.find(s => s == frag.setEffects[1]))

        // Build all possible combinations of the the double fragments and test them with the mandatory fragments to find the best solution
        for (let i = 1; i < this.state.numSlots + 1 - mustIncludeFrags.size; i++)
        {
            // Get all the permutations of size i
            const perms = this.k_combinations(doubleFrags, i)
            
            for (var permID in perms)
            {
                const perm = perms[permID]
                const tempFragmentsRemaining = Object.assign({}, fragmentsRemaining)
                perm.forEach(frag => frag.setEffects.forEach(se => { 
                    if (se.name in tempFragmentsRemaining)
                        tempFragmentsRemaining[se.name] = Math.max(0, tempFragmentsRemaining[se.name] - 1)
                }))
                
                let fewestRemaining = 0
                for (var key in tempFragmentsRemaining)
                    fewestRemaining += tempFragmentsRemaining[key]

                if (fewestRemaining == 0)
                {
                    this.setState({ possibleBuild: [...mustIncludeFrags, ...perm]})
                    return
                }

                // New best permutation, store it.
                if (fewestRemaining < sumFragmentsRemaining)
                {
                    sumFragmentsRemaining = fewestRemaining
                    bestFragments = [...perm]
                }
            }
        }
        
        // After all these have been exhausted, if there are still fragments remaining to be filled, check how many slots are left. 
        // If there aren't enough slots to satisfy the remaining set effects, it's impossible.
        if (sumFragmentsRemaining > this.state.numSlots - bestFragments.length - mustIncludeFrags.size)
        {
            this.setState({ buildPrompt: "There are no possible combinations", possibleBuild: null })
            return
        }

        // Update the counts of all the set effect fragments still needed again
        bestFragments.forEach(frag => frag.setEffects.forEach(se => 
            { 
                if (se.name in fragmentsRemaining)
                    fragmentsRemaining[se.name] = Math.max(0, fragmentsRemaining[se.name] - 1)
        }))

        bestFragments = [...bestFragments, ...mustIncludeFrags]
        
        // If we get to this point, from here we just fill in whatever slots are remaining with a fragment that has the necessary set effect.
        for (var se in fragmentsRemaining)
        {
            if (fragmentsRemaining[se] == 0)
                continue
            
            const seteffect = this.state.setEffects.filter(s => s.name == se)[0]
            for (var frag of seteffect.fragments)
            {
                if (bestFragments.find(f => f.id == frag.id || fragmentsRemaining[se] == 0)) // can't break from this for loop, so just continue
                    continue

                bestFragments.push(frag)
                fragmentsRemaining[se] -= 1
            }
        }

        this.setState({ possibleBuild: bestFragments })
    }

    k_combinations(set, k) {
        var i, j, combs, head, tailcombs;

        // There is no way to take e.g. sets of 5 elements from
        // a set of 4.
        if (k > set.length || k <= 0) {
            return [];
        }

        // K-sized set has only one K-sized subset.
        if (k == set.length) {
            return [set];
        }

        // There is N 1-sized subsets in a N-sized set.
        if (k == 1) {
            combs = [];
            for (i = 0; i < set.length; i++) {
                combs.push([set[i]]);
            }
            return combs;
        }

        // Assert {1 < k < set.length}

        // Algorithm description:
        // To get k-combinations of a set, we want to join each element
        // with all (k-1)-combinations of the other elements. The set of
        // these k-sized sets would be the desired result. However, as we
        // represent sets with lists, we need to take duplicates into
        // account. To avoid producing duplicates and also unnecessary
        // computing, we use the following approach: each element i
        // divides the list into three: the preceding elements, the
        // current element i, and the subsequent elements. For the first
        // element, the list of preceding elements is empty. For element i,
        // we compute the (k-1)-computations of the subsequent elements,
        // join each with the element i, and store the joined to the set of
        // computed k-combinations. We do not need to take the preceding
        // elements into account, because they have already been the i:th
        // element so they are already computed and stored. When the length
        // of the subsequent list drops below (k-1), we cannot find any
        // (k-1)-combs, hence the upper limit for the iteration:
        combs = [];
        for (i = 0; i < set.length - k + 1; i++) {
            // head is a list that includes only our current element.
            head = set.slice(i, i + 1);
            // We take smaller combinations from the subsequent elements
            tailcombs = this.k_combinations(set.slice(i + 1), k - 1);
            // For each (k-1)-combination we join it with the current
            // and store it to the set of k-combinations.
            for (j = 0; j < tailcombs.length; j++) {
                combs.push(head.concat(tailcombs[j]));
            }
        }
        return combs;
    }

    onTierChanged = (e) => {
        this.setState({ numSlots: e.target.value }, this.computeCombination)
    }

    componentDidMount () {
        const params = new URLSearchParams(window.location.search)
        
        const notOwned = params.get('notOwned')
        if (notOwned) {
            const notOwnedArr = notOwned.split(",").map(Number)
            notOwnedArr.forEach(no => {
                const frag = this.state.fragments.find(fr => fr.id == no)
                if (frag) frag.owned = false
            })
        }

        const mustInclude = params.get('mustInclude')
        if (mustInclude) {
            const mustIncludeArr = mustInclude.split(",").map(Number)
            mustIncludeArr.forEach(no => {
                const frag = this.state.fragments.find(fr => fr.id == no)
                if (frag) frag.mustInclude = true
            })
        }

        let tier = this.state.numSlots
        const tierParam = params.get('tier')
        if (tierParam) {
            tier = parseInt(tierParam)
        }

        this.setState({ fragments: this.state.fragments, numSlots: tier }, this.computeCombination)
    }

    render() {
        return (
            <div className="component-app">
                <div className="pure-u-1 min-height-145">
                    <h1>Possible Build</h1>
                    <p>Click to exclude fragments. Re-enable them at the bottom of the page.</p>
                    <h3><label htmlFor="multi-state">Tier&nbsp;</label>
                        <select id="multi-state" className="pure-input-1" value={this.state.numSlots} onChange={this.onTierChanged}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </h3>

                    <div className="center-horizontal" id="build">
                    {this.state.possibleBuild ?
                        this.state.possibleBuild.map((frag, i) =>
                            <div key={frag.name} 
                            className="float-left mr-2 mb-10"
                            onClick={() => this.onFragmentInBuildClicked(frag)}>
                                <div className="text-center">
                                    <img src={frag.imageUrl} height="50px" />
                                    <div className="text">{frag.name}</div>
                                </div>
                                <div className="text-center">
                                    {Array.from(frag.setEffects.values()).map(se => <img key={se.name} src={se.imageUrl} height="30px" className="set-mini" />)}
                                </div>
                            </div>
                        ) :
                        <h3>{this.state.buildPrompt}</h3>
                    }
                    </div>
                    
                </div>
                <div className="pure-u-1">
                    <h1>Set Effects</h1>
                    <p>Click to enable/disable <button
                        onClick={this.clearAllSetsClicked}
                        className="button-xsmall pure-button mt--20">Clear All</button></p>
                    {this.state.setEffects.map((set, i) =>
                        <div key={set.name}
                            className="set-effect pointer"
                            // data-tip 
                            // data-for={`${isDesktop ? "set-info" : ""}`}
                            // onMouseOver={() => this.props.onHoveredSetChanged(set)}>
                            >
                            <img onClick={() => this.setClicked(i)}
                                className={set.chosen ? "" : "grayscale"} src={set.imageUrl} height="60px" /><br />
                            <div onClick={() => this.setClicked(i)}>{set.name}</div>
                            {set.counts.map((count) =>
                                <button key={count}
                                    onClick={() => this.clickedSetCount(i, count)}
                                    className={`pure-u-1-2 text-center pointer pure-button ${set.chosen && set.chosenCount == count ? "chosen" : ""}`}>{count}</button>
                            )}
                        </div>
                    )}
                </div>
                <div className="pure-u-1 center-horizontal">
                    <h1 className="float-left">Fragments</h1>
                    <p className="float-left clear-button"><button
                        onClick={this.clearAllFragmentsClicked}
                        className="button-xsmall pure-button">Reset All</button></p>
                    <div className="clear"/>
                    <div className="float-left mr-5">
                        <table className="pure-table">
                            <thead>
                                <tr>
                                    <th className="min-width-240">Fragment</th>
                                    <th>Owned</th>
                                    <th>Must Include</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.fragments.slice(0, 26).map((frag, i) =>
                                    <tr key={frag.name}>
                                        <td className="center-vertical cursor-default"
                                            data-tip data-for="fragment-info"
                                            onMouseOver={() => this.props.onHoveredFragmentChanged(frag)}>
                                            <img src={frag.imageUrl} height="30px" />
                                            <span>{frag.name}</span>
                                        </td>
                                        <td onClick={() => this.fragmentOwnedChanged(i)} className="text-center"><input type="checkbox" checked={frag.owned} readOnly></input></td>
                                        <td onClick={() => this.fragmentMustIncludeChanged(i)} className="text-center"><input type="checkbox" checked={frag.mustInclude} readOnly></input></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="float-left">
                        <table className="pure-table">
                            <thead>
                                <tr>
                                    <th className="min-width-240">Fragment</th>
                                    <th>Owned</th>
                                    <th>Must Include</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.fragments.slice(26).map((frag, i) =>
                                    <tr key={frag.name}>
                                        <td className="center-vertical cursor-default"
                                            data-tip data-for="fragment-info"
                                            onMouseOver={() => this.props.onHoveredFragmentChanged(frag)}>
                                            <img src={frag.imageUrl} height="30px" />
                                            <span>{frag.name}</span>
                                        </td>
                                        <td onClick={() => this.fragmentOwnedChanged(26 + i)} className="text-center"><input type="checkbox" checked={frag.owned} readOnly></input></td>
                                        <td onClick={() => this.fragmentMustIncludeChanged(26 + i)} className="text-center"><input type="checkbox" checked={frag.mustInclude} readOnly></input></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
