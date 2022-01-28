import React from "react"

class Fragment {
    name = ""
    setEffects = new Set()
    imageUrl = ""
    owned = true
    mustInclude = false

    constructor(name) {
        this.name = name
        this.imageUrl = "https://oldschool.runescape.wiki/images/" + name.replaceAll(" ", "_") + ".png"
    }
}

class SetEffect {
    name = ""
    counts = []
    fragments
    imageUrl = ""
    chosen = false
    chosenCount = 0

    constructor(name, counts, fragments, imageUrlOverride) {
        this.name = name
        this.counts = counts
        this.fragments = fragments
        this.fragments.forEach(f => {
            f.setEffects.add(this)
        })
        this.imageUrl = "https://oldschool.runescape.wiki/images/" + name.replaceAll(" ", "_") + "_detail.png"
    }
}

const alchemaniac = new Fragment("Alchemaniac")
const arcaneConduit = new Fragment("Arcane Conduit")
const armadyleanDecree = new Fragment("Armadylean Decree")
const bandosianMight = new Fragment("Bandosian Might")
const barbarianPestWars = new Fragment("Barbarian Pest Wars")
const bottomlessQuiver = new Fragment("Bottomless Quiver")
const catchOfTheDay = new Fragment("Catch Of The Day")
const certifiedFarmer = new Fragment("Certified Farmer")
const chefsCatch = new Fragment("Chef's Catch")
const chinchonkers = new Fragment("Chinchonkers")
const cluedIn = new Fragment("Clued In")
const deeperPockets = new Fragment("Deeper Pockets")
const dineDash = new Fragment("Dine & Dash")
const divineRestoration = new Fragment("Divine Restoration")
const dragonOnABit = new Fragment("Dragon On A Bit")
const enchantedJeweler = new Fragment("Enchanted Jeweler")
const goldenBrickRoad = new Fragment("Golden Brick Road")
const graveRobber = new Fragment("Grave Robber")
const homewrecker = new Fragment("Homewrecker")
const hotOnTheTrail = new Fragment("Hot On The Trail")
const imcandosApprentice = new Fragment("Imcando's Apprentice")
const justDruid = new Fragment("Just Druid!")
const largerRecharger = new Fragment("Larger Recharger")
const livinOnAPrayer = new Fragment("Livin' On A Prayer")
const messageInABottle = new Fragment("Message In A Bottle")
const mixologist = new Fragment("Mixologist")
const moltenMiner = new Fragment("Molten Miner")
const mothersMagicFossils = new Fragment("Mother's Magic Fossils")
const plankStretcher = new Fragment("Plank Stretcher")
const prayingRespects = new Fragment("Praying Respects")
const proTips = new Fragment("Pro Tips")
const profconstchional = new Fragment("Profletchional")
const rockSolid = new Fragment("Rock Solid")
const roguesChompyFarm = new Fragment("Rogues' Chompy Farm")
const rootyTooty2xRuneys = new Fragment("Rooty Tooty 2x Runeys")
const rumpleBowString = new Fragment("Rumple-Bow-String")
const runeEscape = new Fragment("Rune Escape")
const saradoministDefence = new Fragment("Saradominist Defence")
const seedyBusiness = new Fragment("Seedy Business")
const slashBurn = new Fragment("Slash & Burn")
const slaynPay = new Fragment("Slay 'n' Pay")
const slayAllDay = new Fragment("Slay All Day")
const smithingDouble = new Fragment("Smithing Double")
const smoothCriminal = new Fragment("Smooth Criminal")
const specialDiscount = new Fragment("Special Discount")
const superiorTracking = new Fragment("Superior Tracking")
const tacticalDuelist = new Fragment("Tactical Duelist")
const thrallDamage = new Fragment("Thrall Damage")
const unholyRanger = new Fragment("Unholy Ranger")
const unholyWarrior = new Fragment("Unholy Warrior")
const unholyWizard = new Fragment("Unholy Wizard")
const venomaster = new Fragment("Venomaster")
const zamorakianSight = new Fragment("Zamorakian Sight")

const absoluteUnit = new SetEffect("Absolute Unit", [2, 3], new Set([dragonOnABit, runeEscape, superiorTracking, armadyleanDecree, divineRestoration, tacticalDuelist, saradoministDefence, venomaster]))
const alchemist = new SetEffect("The Alchemist", [3], new Set([goldenBrickRoad, dineDash, slayAllDay, certifiedFarmer, homewrecker, mixologist, justDruid]))
const chainMagic = new SetEffect("Chain Magic", [2, 3], new Set([thrallDamage, unholyWizard, zamorakianSight, mothersMagicFossils, deeperPockets, rootyTooty2xRuneys, hotOnTheTrail, imcandosApprentice]))
const craftsman = new SetEffect("The Craftsman", [3], new Set([rumpleBowString, dragonOnABit, imcandosApprentice, graveRobber, profconstchional, proTips]))
const doubleTap = new SetEffect("Double Tap", [2, 3], new Set([smithingDouble, rumpleBowString, roguesChompyFarm, unholyRanger, armadyleanDecree, chinchonkers, proTips]))
const drakansTouch = new SetEffect("Drakan's Touch", [2, 3], new Set([unholyWizard, zamorakianSight, cluedIn, unholyRanger, prayingRespects, largerRecharger, specialDiscount]))
const endlessKnowledge = new SetEffect("Endless Knowledge", [3], new Set([arcaneConduit, thrallDamage, enchantedJeweler, alchemaniac, plankStretcher, mothersMagicFossils]))
const fastMetabolism = new SetEffect("Fast Metabolism", [2], new Set([graveRobber, rockSolid, bandosianMight, largerRecharger, hotOnTheTrail, venomaster]))
const greedyGatherer = new SetEffect("Greedy Gatherer", [2, 3], new Set([messageInABottle, moltenMiner, rockSolid, certifiedFarmer, chefsCatch, slashBurn, justDruid]))
const knifesEdge = new SetEffect("Knife's Edge", [2, 3], new Set([barbarianPestWars, messageInABottle, slayAllDay, bottomlessQuiver, livinOnAPrayer, prayingRespects, unholyWarrior, saradoministDefence]))
const lastRecall = new SetEffect("Last Recall", [4], new Set([enchantedJeweler, runeEscape, cluedIn, slaynPay, superiorTracking, chinchonkers, homewrecker, profconstchional, rootyTooty2xRuneys, smoothCriminal]))
lastRecall.imageUrl = "https://oldschool.runescape.wiki/images/Last_Recall_%28Shattered_Relics%29_detail.png"
const personalBanker = new SetEffect("Personal Banker", [2, 3], new Set([smithingDouble, alchemaniac, moltenMiner, seedyBusiness, catchOfTheDay, deeperPockets]))
const trailblazer = new SetEffect("Trailblazer", [3], new Set([arcaneConduit, goldenBrickRoad, bottomlessQuiver, seedyBusiness, chefsCatch, smoothCriminal, unholyWarrior]))
const twinStrikes = new SetEffect("Twin Strikes", [2, 3], new Set([barbarianPestWars, slaynPay, divineRestoration, livinOnAPrayer, tacticalDuelist, bandosianMight, specialDiscount]))
const unchainedTalent = new SetEffect("Unchained Talent", [3], new Set([plankStretcher, roguesChompyFarm, dineDash, catchOfTheDay, slashBurn, mixologist]))

export default class Calculator extends React.Component {
    state = {
        numSlots: 4,
        fragments: [
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

    fragmentChanged = (idx) => {
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

    clearAllClicked = () => {
        this.state.setEffects.forEach(se => se.chosen = false)

        this.setState({ setEffects: this.state.setEffects, buildPrompt: "Please select some set effects.", possibleBuild: null })
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

        if (chosenSetEffects.length <= 4) {
            chosenSetEffects
                .forEach(set => {
                    [...set.fragments]
                        .filter(f => f.owned)
                        .forEach(f => {
                            fragments.add(f)
                        })
                })

            const perms = this.k_combinations(Array.from(fragments.values()), this.state.numSlots)

            const mustIncludeFrags = new Set(this.state.fragments.filter(frag => frag.mustInclude))
            const filtered = perms.filter(perm => {
                if (!this.worksForDesiredSetEffects(chosenSetEffects, perm)) {
                    return false
                }
                if (mustIncludeFrags.size > 0) {
                    for (let frag of mustIncludeFrags) {
                        if (!new Set(perm).has(frag)) return false
                    }
                }
                return true
            })

            if (filtered.length > 0)
                this.setState({ possibleBuild: filtered[0] })
            else
                this.setState({ buildPrompt: "There are no possible combinations", possibleBuild: null })
        }
    }

    worksForDesiredSetEffects(desiredSets, fragments) {
        for (let set of desiredSets) {
            let slots = 0
            for (let frag of fragments) {
                if (frag.owned && frag.setEffects.has(set)) {
                    slots++
                }
            }
            if (slots < set.chosenCount) return false
        }
        return true
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
        this.setState({numSlots: e.target.value}, this.computeCombination)
    }

    render() {
        return (
            <div className="component-app">
                <p>Please note this uses a very poor algorithm for determining set combinations so choosing 3-4 sets may lag temporarily. 5 or more sets is disabled to prevent browser freezing.</p>
                <div className="pure-u-1 min-height-145">
                    <h1>Possible Build</h1>
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

                    {this.state.possibleBuild ?
                        this.state.possibleBuild.map((frag, i) =>
                            <div key={frag.name} className="float-left mr-2">
                                <div className="center-vertical">
                                    <img src={frag.imageUrl} />
                                    <span>{frag.name}</span>

                                </div>
                                <div className="text-center">
                                    {Array.from(frag.setEffects.values()).map(se => <img key={se.name} src={se.imageUrl} height="30px" />)}
                                </div>
                            </div>
                        ) :
                        <h3>{this.state.buildPrompt}</h3>
                    }
                </div>
                <div className="pure-u-1">
                    <h1>Set Effects</h1>
                    <p>Click to enable/disable <button
                        onClick={this.clearAllClicked}
                        className="button-xsmall pure-button float-right mt--20">Clear All</button></p>
                    {this.state.setEffects.map((set, i) =>
                        <div key={set.name}
                            className={`set-effect pointer `}>
                            <img
                                onClick={() => this.setClicked(i)}
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
                    <h1>Fragments</h1>
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
                                        <td className="center-vertical">
                                            <img src={frag.imageUrl} height="30px" />
                                            <span>{frag.name}</span>
                                        </td>
                                        <td onClick={() => this.fragmentChanged(i)} className="text-center"><input type="checkbox" checked={frag.owned} readOnly></input></td>
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
                                        <td className="center-vertical">
                                            <img src={frag.imageUrl} height="30px" />
                                            <span>{frag.name}</span>
                                        </td>
                                        <td onClick={() => this.fragmentChanged(26 + i)} className="text-center"><input type="checkbox" checked={frag.owned} readOnly></input></td>
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