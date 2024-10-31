import "./App.css";
import Main from "./components/main/main.tsx";
import { useState } from "react";
const weaponTab = [
	{
		name: "Great Sword",
		iconsrc: "/weapons/greatsword.png",
	},
	{
		name: "Bow",
		iconsrc: "/weapons/bow.png",
	},
	{
		name: "Charge Blade",
		iconsrc: "/weapons/chargeblade.png",
	},
	{
		name: "Dual Blades",
		iconsrc: "/weapons/dualblades.png",
	},
	{
		name: "Gunlance",
		iconsrc: "/weapons/gunlance.png",
	},
	{
		name: "Hammer",
		iconsrc: "/weapons/hammer.png",
	},
	{
		name: "Heavy Bowgun",
		iconsrc: "/weapons/heavybowgun.png",
	},
	{
		name: "Hunting horn",
		iconsrc: "/weapons/huntinghorn.png",
	},
	{
		name: "Insect Glaive",
		iconsrc: "/weapons/insectglaive.png",
	},
	{
		name: "Lance",
		iconsrc: "/weapons/lance.png",
	},
	{
		name: "Light Bowgun",
		iconsrc: "/weapons/lightbowgun.png",
	},
	{
		name: "Long Sword",
		iconsrc: "/weapons/longsword.png",
	},
	{
		name: "Switch Axe",
		iconsrc: "/weapons/switchaxe.png",
	},
	{
		name: "Sword and Shield",
		iconsrc: "/weapons/swordandshield.png",
	},
];
const monsterTab = [
	{
		id: 1,
		name: "Anjanath",
		from: "world",
		iconsrc: "/monster-icons/anjanath.png",
	},
	{
		id: 2,
		name: "Great Jagras",
		from: "world",
		iconsrc: "/monster-icons/great-jagras.png",
	},
	{
		id: 3,
		name: "Fulgur Anjanath",
		from: "iceborne",
		iconsrc: "/monster-icons/fulgur-anjanath.png",
	},
	{
		id: 4,
		name: "Banbaro",
		from: "iceborne",
		iconsrc: "/monster-icons/banbaro.png",
	},
	{
		id: 5,
		name: "Barioth",
		from: "iceborne",
		iconsrc: "/monster-icons/Barioth.png",
	},
	{
		id: 6,
		name: "Frostfang Barioth",
		from: "iceborne",
		iconsrc: "/monster-icons/frostfang-barioth.png",
	},
	{
		id: 7,
		name: "Barroth",
		from: "world",
		iconsrc: "/monster-icons/barroth.png",
	},
	{
		id: 8,
		name: "Bazelgeuse",
		from: "world",
		iconsrc: "/monster-icons/Bazelgeuse.png",
	},
	{
		id: 9,
		name: "Seething Bazelgeuse",
		from: "iceborne",
		iconsrc: "/monster-icons/seething-bazelgeuse.png",
	},
	{
		id: 10,
		name: "Behemoth",
		from: "world",
		iconsrc: "/monster-icons/behemoth.png",
	},
	{
		id: 11,
		name: "Beotodus",
		from: "iceborne",
		iconsrc: "/monster-icons/beotodus.png",
	},
	{
		id: 12,
		name: "Brachydios",
		from: "iceborne",
		iconsrc: "/monster-icons/brachydios.png",
	},
	{
		id: 13,
		name: "Raging Brachydios",
		from: "iceborne",
		iconsrc: "/monster-icons/raging-brachydio.png",
	},
	{
		id: 14,
		name: "Deviljho",
		from: "world",
		iconsrc: "/monster-icons/deviljho.png",
	},
	{
		id: 15,
		name: "Savage Deviljho",
		from: "iceborne",
		iconsrc: "/monster-icons/savage-deviljho.png",
	},
	{
		id: 16,
		name: "Diablo",
		from: "world",
		iconsrc: "/monster-icons/diablos.png",
	},
	{
		id: 17,
		name: "Black Diablos",
		from: "world",
		iconsrc: "/monster-icons/black-diablos.png",
	},
	{
		id: 18,
		name: "Dodogama",
		from: "world",
		iconsrc: "/monster-icons/dodogama.png",
	},
	{
		id: 19,
		name: "Fatalis",
		from: "iceborne",
		iconsrc: "/monster-icons/fatalis.png",
	},
	{
		id: 20,
		name: "Glavenus",
		from: "iceborne",
		iconsrc: "/monster-icons/glavenus.png",
	},
	{
		id: 21,
		name: "Acidic Glavenus",
		from: "iceborne",
		iconsrc: "/monster-icons/acidic-glavenus.png",
	},
	{
		id: 22,
		name: "Great Girros",
		from: "world",
		iconsrc: "/monster-icons/great_girros.png",
	},
	{
		id: 23,
		name: "Jyuratodus",
		from: "world",
		iconsrc: "/monster-icons/jyuratodus.png",
	},
	{
		id: 24,
		name: "Kirin",
		from: "world",
		iconsrc: "/monster-icons/kirin.png",
	},
	{
		id: 25,
		name: "Kulu Ya Ku",
		from: "world",
		iconsrc: "/monster-icons/kulu-ya-ku.png",
	},
	{
		id: 26,
		name: "Kulve Taroth",
		from: "world",
		iconsrc: "/monster-icons/kulve-taroth.png",
	},
	{
		id: 27,
		name: "Kushala Daora",
		from: "world",
		iconsrc: "/monster-icons/kushala-daora.png",
	},
	{
		id: 28,
		name: "Lavasioth",
		from: "world",
		iconsrc: "/monster-icons/lavasioth.png",
	},
	{
		id: 29,
		name: "Legiana",
		from: "world",
		iconsrc: "/monster-icons/legiana.png",
	},
	{
		id: 30,
		name: "Shrieking Legiana",
		from: "iceborne",
		iconsrc: "/monster-icons/shrieking-legiana.png",
	},
	{
		id: 31,
		name: "Lunastra",
		from: "world",
		iconsrc: "/monster-icons/lunastra.png",
	},
	{
		id: 32,
		name: "Namielle",
		from: "iceborne",
		iconsrc: "/monster-icons/namielle.png",
	},
	{
		id: 33,
		name: "Nargacuga",
		from: "iceborne",
		iconsrc: "/monster-icons/nargacuga.png",
	},
	{
		id: 34,
		name: "Nergigante",
		from: "world",
		iconsrc: "/monster-icons/nergigante.png",
	},
	{
		id: 35,
		name: "Ruiner Nergigante",
		from: "iceborne",
		iconsrc: "/monster-icons/ruiner-nergigante.png",
	},
	{
		id: 36,
		name: "Odogaron",
		from: "world",
		iconsrc: "/monster-icons/odogaron.png",
	},
	{
		id: 37,
		name: "Ebony Odogaron",
		from: "iceborne",
		iconsrc: "/monster-icons/ebony-odogaron.png",
	},
	{
		id: 38,
		name: "Paolumu",
		from: "world",
		iconsrc: "/monster-icons/paolumu.png",
	},
	{
		id: 39,
		name: "Nightshade Paolumu",
		from: "iceborne",
		iconsrc: "/monster-icons/nightshade-paolumu_Icon.png",
	},
	{
		id: 40,
		name: "Pukei-Pukei",
		from: "world",
		iconsrc: "/monster-icons/pukei-pukei.png",
	},
	{
		id: 41,
		name: "Coral Pukei-Pukei",
		from: "iceborne",
		iconsrc: "/monster-icons/coral-pukei-pukei.png",
	},
	{
		id: 42,
		name: "Radobaan",
		from: "world",
		iconsrc: "/monster-icons/radobaan.png",
	},
	{
		id: 43,
		name: "Rajang",
		from: "iceborne",
		iconsrc: "/monster-icons/rajang.png",
	},
	{
		id: 44,
		name: "Furious Rajang",
		from: "iceborne",
		iconsrc: "/monster-icons/furious-rajang.png",
	},
	{
		id: 45,
		name: "Rathalos",
		from: "world",
		iconsrc: "/monster-icons/rathalos.png",
	},
	{
		id: 46,
		name: "Azure Rathalos",
		from: "world",
		iconsrc: "/monster-icons/azure-rathalos.png",
	},
	{
		id: 47,
		name: "Silver Rathalos",
		from: "iceborne",
		iconsrc: "/monster-icons/silver-rathalos.png",
	},
	{
		id: 48,
		name: "Rathian",
		from: "world",
		iconsrc: "/monster-icons/rathian.png",
	},
	{
		id: 49,
		name: "Pink Rathian",
		from: "world",
		iconsrc: "/monster-icons/pink-rathian.png",
	},
	{
		id: 50,
		name: "Gold Rathian",
		from: "iceborne",
		iconsrc: "/monster-icons/gold-rathian.png",
	},
	{
		id: 51,
		name: "Safi'Jiiva",
		from: "iceborn",
		iconsrc: "/monster-icons/safijiiva.png",
	},
	{
		id: 52,
		name: "Shara Ishvalda",
		from: "iceborne",
		iconsrc: "/monster-icons/shara-ishvalda.png",
	},
	{
		id: 53,
		name: "Teostra",
		from: "world",
		iconsrc: "/monster-icons/teostra.png",
	},
	{
		id: 54,
		name: "Tigrex",
		from: "iceborne",
		iconsrc: "/monster-icons/tigrex.png",
	},
	{
		id: 55,
		name: "Brute Tigrex",
		from: "iceborne",
		iconsrc: "/monster-icons/brute-tigrex.png",
	},
	{
		id: 56,
		name: "Tobi-Kadachi",
		from: "world",
		iconsrc: "/monster-icons/tobi-kadachi.png",
	},
	{
		id: 57,
		name: "Viper Tobi-Kadachi",
		from: "iceborne",
		iconsrc: "/monster-icons/viper-tobi-kadachi.png",
	},
	{
		id: 58,
		name: "Tzitzi-Ya-Ku",
		from: "world",
		iconsrc: "/monster-icons/tzitzi-ya-ku.png",
	},
	{
		id: 59,
		name: "Uragaan",
		from: "world",
		iconsrc: "/monster-icons/uragaan.png",
	},
	{
		id: 60,
		name: "Vaal Hazak",
		from: "world",
		iconsrc: "/monster-icons/vaal-hazak.png",
	},
	{
		id: 61,
		name: "Blackveil Vaal Hazak",
		from: "iceborne",
		iconsrc: "/monster-icons/blackveil-vaal-hazak.png",
	},
	{
		id: 62,
		name: "Velkhana",
		from: "iceborne",
		iconsrc: "/monster-icons/velkhana.png",
	},
	{
		id: 63,
		name: "Xeno'Jiiva",
		from: "world",
		iconsrc: "/monster-icons/xenojiiva.png",
	},
	{
		id: 64,
		name: "Yian-Garuga",
		from: "iceborne",
		iconsrc: "/monster-icons/yian-garuga.png",
	},
	{
		id: 65,
		name: "Scarred Yian-Garuga",
		from: "iceborne",
		iconsrc: "/monster-icons/scarred-yian-garuga.png",
	},
	{
		id: 66,
		name: "Zinogre",
		from: "iceborne",
		iconsrc: "/monster-icons/zinogre.png",
	},
	{
		id: 67,
		name: "Stygian Zinogre",
		from: "iceborne",
		iconsrc: "/monster-icons/stygian-zinogre.png",
	},
	{
		id: 68,
		name: "Zorah Magdaros",
		from: "world",
		iconsrc: "/monster-icons/zorah-magdaros.png",
	},
	{
		id: 69,
		name: "Alatreon",
		from: "iceborne",
		iconsrc: "/monster-icons/alatreon.png",
	},
	{
		id: 70,
		name: "Ancient Leshen",
		from: "world",
		iconsrc: "/monster-icons/ancient-leshen.png",
	},
	{
		id: 71,
		name: "Leshen",
		from: "world",
		iconsrc: "/monster-icons/leshen.png",
	},
];
function App() {
	const [monsterIndex, setMonsterIndex] = useState(0);
	const [weaponIndex, setWeaponIndex] = useState(0);
	return (
		<>
			<Main
				monster={monsterTab[monsterIndex]}
				setMonsterIndex={setMonsterIndex}
				weapon={weaponTab[weaponIndex]}
				setWeaponIndex={setWeaponIndex}
			/>
		</>
	);
}

export default App;
