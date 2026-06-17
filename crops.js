const crops = [
{
name: "Rice",
desc: "Seed → nursery → transplant → flowering → grain",
soil: "Clay soil",
climate: "Hot & humid",
fertilizer: "NPK, Urea",
water: "Very high",
grow: "3–5 months",
harvest: "90–150 days",
link: "https://en.wikipedia.org/wiki/Rice"
},

{
name: "Wheat",
desc: "Seed → germination → tillering → flowering → grain",
soil: "Loamy soil",
climate: "Cool",
fertilizer: "Nitrogen + NPK",
water: "Moderate",
grow: "4–6 months",
harvest: "110–130 days",
link: "https://en.wikipedia.org/wiki/Wheat"
},

{
name: "Maize",
desc: "Seed → sprout → tasseling → cob formation",
soil: "Fertile soil",
climate: "Warm",
fertilizer: "Nitrogen rich",
water: "Moderate",
grow: "3–4 months",
harvest: "90–120 days",
link: "https://en.wikipedia.org/wiki/Maize"
},

{
name: "Cotton",
desc: "Seed → flowering → boll formation → picking",
soil: "Black soil",
climate: "Warm dry",
fertilizer: "NPK + micronutrients",
water: "Moderate",
grow: "5–6 months",
harvest: "150–180 days",
link: "https://en.wikipedia.org/wiki/Cotton"
},

{
name: "Sugarcane",
desc: "Setts → sprouting → cane formation → maturity",
soil: "Deep loamy",
climate: "Tropical",
fertilizer: "High nitrogen",
water: "Very high",
grow: "10–18 months",
harvest: "12–18 months",
link: "https://en.wikipedia.org/wiki/Sugarcane"
},

{
name: "Groundnut",
desc: "Seed → flowering → pod formation → harvest",
soil: "Sandy loam",
climate: "Warm",
fertilizer: "Phosphorus + calcium",
water: "Low-moderate",
grow: "3–4 months",
harvest: "90–120 days",
link: "https://en.wikipedia.org/wiki/Peanut"
},

{
name: "Soybean",
desc: "Seed → flowering → pod formation",
soil: "Fertile soil",
climate: "Warm",
fertilizer: "Phosphorus",
water: "Moderate",
grow: "3–4 months",
harvest: "90–120 days",
link: "https://en.wikipedia.org/wiki/Soybean"
},

{
name: "Millets",
desc: "Seed → tillering → grain formation",
soil: "Poor soil",
climate: "Dry",
fertilizer: "Low requirement",
water: "Low",
grow: "2–4 months",
harvest: "60–120 days",
link: "https://en.wikipedia.org/wiki/Millet"
},

{
name: "Pulses",
desc: "Seed → flowering → pod formation",
soil: "Loamy soil",
climate: "Moderate",
fertilizer: "Low nitrogen",
water: "Low",
grow: "2–4 months",
harvest: "60–110 days",
link: "https://en.wikipedia.org/wiki/Legume"
},

{
name: "Jute",
desc: "Seed → vegetative → fiber formation",
soil: "Alluvial soil",
climate: "Humid",
fertilizer: "Nitrogen rich",
water: "High",
grow: "4–5 months",
harvest: "120–150 days",
link: "https://en.wikipedia.org/wiki/Jute"
},

{
name: "Tea",
desc: "Seed → bush → plucking cycles",
soil: "Acidic soil",
climate: "Cool hills",
fertilizer: "Organic + nitrogen",
water: "High rainfall",
grow: "3–5 years",
harvest: "Continuous",
link: "https://en.wikipedia.org/wiki/Tea"
},

{
name: "Coffee",
desc: "Seed → plant → berries → harvest",
soil: "Volcanic soil",
climate: "Cool tropical",
fertilizer: "Organic + NPK",
water: "Moderate",
grow: "3–4 years",
harvest: "Seasonal",
link: "https://en.wikipedia.org/wiki/Coffee"
},

{
name: "Mustard",
desc: "Seed → flowering → pod formation",
soil: "Loamy soil",
climate: "Cool dry",
fertilizer: "NPK",
water: "Low",
grow: "3–4 months",
harvest: "90–120 days",
link: "https://en.wikipedia.org/wiki/Mustard_plant"
},

{
name: "Barley",
desc: "Seed → tillering → grain filling",
soil: "Sandy loam",
climate: "Cool dry",
fertilizer: "Low nitrogen",
water: "Low",
grow: "3–4 months",
harvest: "90–110 days",
link: "https://en.wikipedia.org/wiki/Barley"
},

{
name: "Chickpea",
desc: "Seed → flowering → pod formation",
soil: "Well drained soil",
climate: "Cool dry",
fertilizer: "Phosphorus rich",
water: "Low",
grow: "3–4 months",
harvest: "90–120 days",
link: "https://en.wikipedia.org/wiki/Chickpea"
},

// (15 more crops added in next part)

];

function render(data){
const container = document.getElementById("cropsContainer");
container.innerHTML = "";

data.forEach(c=>{
container.innerHTML += `
<div class="card">
<h3>${c.name}</h3>
<p><b>Development:</b> ${c.desc}</p>
<p><b>Soil:</b> ${c.soil}</p>
<p><b>Climate:</b> ${c.climate}</p>
<p><b>Fertilizer:</b> ${c.fertilizer}</p>
<p><b>Water:</b> ${c.water}</p>
<p><b>Growth:</b> ${c.grow}</p>
<p><b>Harvest:</b> ${c.harvest}</p>
<a href="${c.link}" target="_blank">More Info</a>
</div>
`;
});
}

render(crops);

function filterCrops(){
let val = document.getElementById("searchInput").value.toLowerCase();
let filtered = crops.filter(c => c.name.toLowerCase().includes(val));
render(filtered);
}