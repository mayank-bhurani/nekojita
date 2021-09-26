window.addEventListener('hashchange',()=>{
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'auto'
  })
});

const vitaminArr = [
  {
    "microName": "A",
    "microType": "vitamin",
    "vitamers": "Retinoids, carotene",
    "microFunctions": "Essential for healthy vision. Keeps tissues and skin healthy. Plays an important role in bone growth and in the immune system. Carotenoids act as antioxidants.",
    "solubility": "Fat",
    "rdaM": "900 µg",
    "rdaF": "700 µg",
    "eocW": "no",
    "eocA": "partially",
    "eocL": "partially",
    "eocH": "relatively stable",
    "plantSources": "Sweet potato, spinach, carrots, mangos, black-eyed peas, broccoli, kale, collard greens, bell peppers, tomatoes",
    "animalSources": "Cheese, ghee, beef liver",
    "deficiencySymptoms": "Dry skin, dry eyes, night blindness, acne"
  },
  {
    "microName": "B1",
    "microType": "vitamin",
    "vitamers": "Thiamine",
    "microFunctions": "Helps convert food into energy. Needed for healthy skin, hair, muscles, and brain and is critical for nerve function.",
    "solubility": "Water",
    "rdaM": "1.2 mg",
    "rdaF": "1.1 mg",
    "eocW": "highly",
    "eocA": "no",
    "eocL": "N/A",
    "eocH": "no",
    "plantSources": "Rice, black beans, whole wheat, nutritional yeast",
    "animalSources": "Pork",
    "deficiencySymptoms": "Loss of appetite, fatigue, irritability, reduced reflexes, tingling sensation in arms and legs, muscle weakness, blurry vision, nausea and vomiting, shortness of breath"
  },
  {
    "microName": "B2",
    "microType": "vitamin",
    "vitamers": "Riboflavin",
    "microFunctions": "Helps convert food into energy. Needed for healthy skin, hair, blood, and brain, important for normal vision",
    "solubility": "Water",
    "rdaM": "1.3 mg",
    "rdaF": "1.1 mg",
    "eocW": "slightly",
    "eocA": "no",
    "eocL": "in solution",
    "eocH": "> 100 °C",
    "plantSources": "Mushrooms, almonds, quinoa, spinach, bananas",
    "animalSources": "Beef liver,yogurt, milk, egg",
    "deficiencySymptoms": "Weakness, change in mood, sore throat, skin cracks, anemia"
  },
  {
    "microName": "B3",
    "microType": "vitamin",
    "vitamers": "Niacin",
    "microFunctions": "Helps convert food into energy. Essential for healthy skin, blood cells, brain, digestive system, and nervous system",
    "solubility": "Water",
    "rdaM": "16 mg",
    "rdaF": "14 mg",
    "eocW": "yes",
    "eocA": "no",
    "eocL": "no",
    "eocH": "no",
    "plantSources": "Nutritional yeast, peanuts, sunflower seeds, almonds, mushrooms, avocado, potato, corn, rice",
    "animalSources": "Meat, fish, eggs, cheese",
    "deficiencySymptoms": "Rough skin, fatigue, diarrhea, dementia, and sores in the mouth."
  },
  {
    "microName": "B5",
    "microType": "vitamin",
    "vitamers": "Pantothenic acid",
    "microFunctions": "Helps convert food into energy. Helps make lipids (fats), neurotransmitters, steroid hormones, and hemoglobin",
    "solubility": "Water",
    "rdaM": "5 mg",
    "rdaF": "5 mg",
    "eocW": "quite stable",
    "eocA": "no",
    "eocL": "no",
    "eocH": "no",
    "plantSources": "Broccoli, cabbage, sweet potatoes, mushrooms, nuts, beans, peas, lentils",
    "animalSources": "Beef liver, eggs, milk, chicken breast",
    "deficiencySymptoms": "Abnormal sensation of the skin (tingling, pricking, chilling, burning, numbness)"
  },
  {
    "microName": "B6",
    "microType": "vitamin",
    "vitamers": "Pyridoxine",
    "microFunctions": "Aids in lowering homocysteine levels and may reduce the risk of heart disease Helps convert tryptophan to niacin and serotonin, a neurotransmitter that plays key roles in sleep, appetite, and moods. Helps make red blood cells Influences cognitive abilities and immune function",
    "solubility": "Water",
    "rdaM": "1.3–1.7 mg",
    "rdaF": "1.2–1.5 mg",
    "eocW": "yes",
    "eocA": "N/A",
    "eocL": "yes",
    "eocH": "yes",
    "plantSources": "Banana, mushroom, potato, sweet potato, red bell pepper, peanuts, avocado, spinach, chickpeas",
    "animalSources": "Beef liver, salmon, tuna, chicken breast",
    "deficiencySymptoms": "Depression, confusion, nausea, anemia, skin rashes"
  },
  {
    "microName": "B7",
    "microType": "vitamin",
    "vitamers": "Biotin",
    "microFunctions": "Helps convert food into energy and synthesize glucose. Helps make and break down some fatty acids. Needed for healthy bones and hair",
    "solubility": "Water",
    "rdaM": "30 µg",
    "rdaF": "30 µg",
    "eocW": "somewhat",
    "eocA": "N/A",
    "eocL": "N/A",
    "eocH": "< 160 °C",
    "plantSources": "Peanuts, sunflower seeds, almonds, sweet potato, broccoli, tomato",
    "animalSources": "Chicken liver, beef liver, eggs, salmon, pork, cheese, milk",
    "deficiencySymptoms": "Red rashes on the skin, dry or scaly skin, dry eyes, brittle hair, hair loss, fatigue, difficulty sleeping, loss of appetite, nausea, depression, burning or prickling sensation in the hands and feet, muscle pain, changes in the intestinal tract (frequent upset stomach), cracking in the corners of the mouth, difficulty walking"
  },
  {
    "microName": "B9",
    "microType": "vitamin",
    "vitamers": "Folic acid",
    "microFunctions": "Part of an enzyme needed for making DNA and new cells, especially red blood cells",
    "solubility": "Water",
    "rdaM": "400 µg",
    "rdaF": "400 µg",
    "eocW": "yes",
    "eocA": "N/A",
    "eocL": "when dry",
    "eocH": "no",
    "plantSources": "Peanuts, sunflower seed kernels, lentils, chickpeas, asparagus, spinach, lettuce, soybeans",
    "animalSources": "Chicken liver, calf liver, cheese, eggs",
    "deficiencySymptoms": "Fatigue, trouble concentrating, irritability, headache, shortness of breath"
  },
  {
    "microName": "B12",
    "microType": "vitamin",
    "vitamers": "cobalamin",
    "microFunctions": "Aids in lowering homocysteine levels and may lower the risk of heart disease. Assists in making new cells and breaking down some fatty acids and amino acids. Protects nerve cells and encourages their normal growth Helps make red blood cells and DNA",
    "solubility": "Water",
    "rdaM": "2.4 µg",
    "rdaF": "2.4 µg",
    "eocW": "yes",
    "eocA": "N/A",
    "eocL": "yes",
    "eocH": "at high temp",
    "plantSources": "Tempeh, nori seaweed, laver, some fermented foods",
    "animalSources": "Liver, eggs, milk, fish",
    "deficiencySymptoms": "Tiredness or fatigue, weakness, constipation, loss of appetite, weight loss, confusion, poor memory, dementia, paranoia, depression"
  },
  {
    "microName": "C",
    "microType": "vitamin",
    "vitamers": "Ascorbic acid",
    "microFunctions": "Antioxidant",
    "solubility": "part of an enzyme needed for protein metabolism",
    "rdaM": "important for immune system health",
    "rdaF": "aids in iron absorption",
    "eocW": "Water",
    "eocA": "90 mg",
    "eocL": "75 mg",
    "eocH": "very unstable",
    "plantSources": "yes",
    "animalSources": "no",
    "deficiencySymptoms": "no"
  },
  {
    "microName": "D",
    "microType": "vitamin",
    "vitamers": "Calcitriol",
    "microFunctions": "Needed for proper absorption of calcium; Helps maintain normal blood levels of calcium and phosphorus, which strengthen bones.",
    "solubility": "Fat",
    "rdaM": "15 µg",
    "rdaF": "15 µg",
    "eocW": "no",
    "eocA": "no",
    "eocL": "no",
    "eocH": "no",
    "plantSources": "N/A",
    "animalSources": "Egg yolk, beef liver, fish liver oils, salmon, mackerel, tuna, sardines",
    "deficiencySymptoms": "Weak bones, fatigue and tiredness, depression, muscle pain"
  },
  {
    "microName": "E",
    "microType": "vitamin",
    "vitamers": "Alpha-Tocopherol",
    "microFunctions": "Acts as an antioxidant, neutralizing unstable molecules that can damage cells. Protects vitamin A and certain lipids from damage.",
    "solubility": "Fat",
    "rdaM": "15 mg",
    "rdaF": "15 mg",
    "eocW": "no",
    "eocA": "yes",
    "eocL": "yes",
    "eocH": "no",
    "plantSources": "Wheat germ oil, sunflower oil, almonds, sunflower seed kernels, peanut oil, peanuts",
    "animalSources": "Fish, butter, cheese, eggs, chicken",
    "deficiencySymptoms": "Muscle pain or weakness, immune system problems"
  },
  {
    "microName": "K",
    "microType": "vitamin",
    "vitamers": "Phylloquinone, Menadione",
    "microFunctions": "Activates proteins and calcium essential to blood clotting.",
    "solubility": "Fat",
    "rdaM": "110 µg",
    "rdaF": "120 µg",
    "eocW": "no",
    "eocA": "no",
    "eocL": "yes",
    "eocH": "no",
    "plantSources": "Spinach, collard greens, turnip greens, kiwi, carrots, hazelnuts, grapes, tomato",
    "animalSources": "Chicken, cheese, beef, pork",
    "deficiencySymptoms": "Celiac diseases (joint pain, stiffness, weak bones, fatigue, seizures, weight loss, vomiting, skin disorders)"
  }
];

const vitaminsListEl = document.getElementById('vitamins-list');

if(vitaminsListEl){
  for(i=0; i<vitaminArr.length; i++){
    vitaminsListEl.innerHTML += `<li><a onclick="populateVitaminInner(vitaminArr,${i})" href="#vitamins/${vitaminArr[i].microName.replace(/\s/g, '')}">Vitamin ${vitaminArr[i].microName}</a></li>`;
    vitaminRoute(i)
}
}





function populateVitaminInner(vitaminArr, m){
var meta = document.createElement('meta');
meta.setAttribute('name', 'description')
meta.setAttribute('content', `Vitamin ${vitaminArr[m].microName}sources, functions, rda, solubility. Vitamin ${vitaminArr[m].microName} is ${vitaminArr[m].microFunctions} `);
document.querySelector('head').appendChild(meta);

const articleSec = document.getElementById("rightSec");

const vitaminTemp = `

  <section class="nutrient-content">
  <div class="nutrient-head">
  <h1>Vitamin ${vitaminArr[m].microName}</h1>
  <hr>
  </div>
  <article id="nutrient-details">
  <div>
      <h5>Functions</h5>
      <p>${vitaminArr[m].microFunctions}</p>
  </div>
  <div>
      <h5>Plant Sources</h5>
      <p>${vitaminArr[m].plantSources}</p>
  </div>
  <div>
      <h5>Animal Sources</h5>
      <p>${vitaminArr[m].animalSources}</p>
  </div>
  <div>
      <h5>Deficiency Symptoms</h5>
      <p>${vitaminArr[m].deficiencySymptoms}</p>
  </div>
  <div>
      <h5>RDA</h5>
      <p>Male: ${vitaminArr[m].rdaM}</p>
      <p>Female: ${vitaminArr[m].rdaF}</p>
  </div>
  <div>
      <h5>Solubility</h5>
      <p>${vitaminArr[m].solubility}</p>
  </div>
  </article>
  </section>
  `;
  articleSec.innerHTML = vitaminTemp;
}

function vitaminRoute(v){
    if(window.location.hash === `#vitamins/${vitaminArr[v].microName.replace(/\s/g, '')}`){
        populateVitaminInner(vitaminArr, v);
        document.querySelector('title').innerText = `Vitamin ${vitaminArr[v].microName} - Functions, sources, deficiency symptoms, RDA, solubility`;
    }
    
}


const mineralArr =[
  {
    "microName": "Potassium",
    "microType": "mineral",
    "microFunctions": "Needed for proper fluid balance, nerve transmission, and muscle contraction",
    "rdaM": "4700 mg",
    "rdaF": "4700 mg",
    "plantSources": "Sweet potato, tomato, potato, beans, lentils,banana, carrot, orange, chocolate, coconut water, soybeans",
    "animalSources": "N/A",
    "deficiencySymptoms": "Weakness and fatigue, muscle cramps, digestive problems, muscle aches, tingling and numbness, breathing difficulties, mood changes"
  },
  {
    "microName": "Chlorine",
    "microType": "mineral",
    "microFunctions": "Needed for proper fluid balance, stomach acid",
    "rdaM": "2300 mg",
    "rdaF": "2300 mg",
    "plantSources": "Table salt",
    "animalSources": "N/A",
    "deficiencySymptoms": "Fluid loss,dehydration, weakness, fatigue, difficulty breathing, diarrhea, vomiting"
  },
  {
    "microName": "Sodium",
    "microType": "mineral",
    "microFunctions": "Needed for proper fluid balance, nerve transmission, and muscle contraction",
    "rdaM": "1500 mg",
    "rdaF": "1500 mg",
    "plantSources": "Table salt, sea vegetables, spinach",
    "animalSources": "Milk",
    "deficiencySymptoms": "Weakness, fatigue or low energy, headache, nausea, vomiting, muscle cramps or spasms, confusion, irritability"
  },
  {
    "microName": "Calcium",
    "microType": "mineral",
    "microFunctions": "Important for healthy bones and teeth; helps muscles relax and contract; important in nerve functioning, blood clotting, blood pressure regulation, immune system health",
    "rdaM": "1000 mg",
    "rdaF": "1000 mg",
    "plantSources": "Green leafy vegetables, nuts, seeds, tofu, thyme, oregano, dill, cinnamon",
    "animalSources": "Yogurt, Cheese, Sardines, Salmon",
    "deficiencySymptoms": "Arthritis, muscle or bone pain, especially in back and neck, brittle nails, depression, high blood pressure, numbness, kidney stones, cramps, spasms, nervousness, tooth decay"
  },
  {
    "microName": "Phosphorus",
    "microType": "mineral",
    "microFunctions": "Important for healthy bones and teeth; found in every cell; part of the system that maintains acid-base balance",
    "rdaM": "700 mg",
    "rdaF": "700 mg",
    "plantSources": "Sunflower and pumpkin seeds, nuts, whole grains, amaranth, quinoa, beans, lentils, soy",
    "animalSources": "Chicken, Turkey, Pork, Sardines",
    "deficiencySymptoms": "Weak bones or teeth, joint pain or stiffness, fatigue, weight loss, less appetite, hair loss,numbness, anemia"
  },
  {
    "microName": "Magnesium",
    "microType": "mineral",
    "microFunctions": "Found in bones; needed for making protein, muscle contraction, nerve transmission, immune system health",
    "rdaM": "420 mg",
    "rdaF": "320 mg",
    "plantSources": "Dark chocolate, avocados, nuts, legumes, tofu, seeds, whole grains, bananas, kale, spinach",
    "animalSources": "N/A",
    "deficiencySymptoms": "Irritability, dizziness, cramps, muscle weakness, fatigue, depression"
  },
  {
    "microName": "Iron",
    "microType": "mineral",
    "microFunctions": "Part of a molecule (hemoglobin) found in red blood cells that carries oxygen in the body; needed for energy metabolism",
    "rdaM": "8 mg",
    "rdaF": "18 mg",
    "plantSources": "Lentils, beans, spinach, chickpeas, black-eyed peas, tofu",
    "animalSources": "Red Meat, Oysters, Fish",
    "deficiencySymptoms": "Fatigue, weakness, anemia, confusion, dizziness, heart palpitations, foggy memory, lowered immune function, sore tongue"
  },
  {
    "microName": "Zinc",
    "microType": "mineral",
    "microFunctions": "Part of many enzymes; needed for making protein and genetic material; has a function in taste perception, wound healing, normal fetal development, production of sperm, normal growth and sexual maturation, immune system health",
    "rdaM": "11 mg",
    "rdaF": "8 mg",
    "plantSources": "Chickpeas, lentils, sesame seeds, nuts, whole grains, potatoes, green beans, dark chocolate",
    "animalSources": "Red Meat, Shellfish, Eggs",
    "deficiencySymptoms": "Loss of appetite, acne, hair loss, body odors, fatigue, loss of taste or smell, eczema, brittle nails or white spots, impaired healing, memory loss or cognitive impairment, diarrhea"
  },
  {
    "microName": "Manganese",
    "microType": "mineral",
    "microFunctions": "Part of many enzymes; required for bones",
    "rdaM": "2.3 mg",
    "rdaF": "1.8 mg",
    "plantSources": "Hazelnuts, rice, chickpeas, spinach, pineapple, soybeans",
    "animalSources": "Oysters, Mussels",
    "deficiencySymptoms": "Joint pain, arthritis, hearing loss or tinnitus, infertility, loss of sex drive, dizziness"
  },
  {
    "microName": "Copper",
    "microType": "mineral",
    "microFunctions": "Needed for iron metabolism; required for many proteins",
    "rdaM": "0.9 mg",
    "rdaF": "0.9 mg",
    "plantSources": "Mushrooms, almonds, cashews, sesame seeds, spinach, dark chocolate",
    "animalSources": "Oysters",
    "deficiencySymptoms": "Hair loss, brittle hair, or gray/white hair, arthritis, depression, diarrhea, high cholesterol, impaired thyroid function, nervous ticks, liver cirrhosis"
  },
  {
    "microName": "Iodine",
    "microType": "mineral",
    "microFunctions": "Found in thyroid hormone, which helps regulate growth, development, and metabolism",
    "rdaM": "0.15 mg",
    "rdaF": "0.15 mg",
    "plantSources": "Seaweed, iodized salt, lima beans",
    "animalSources": "Cod, Milk, Yogurt",
    "deficiencySymptoms": "Slow growth, unexpected weight gain, weakness and fatigue, hair loss, dry and flaky skin"
  },
  {
    "microName": "Chromium",
    "microType": "mineral",
    "microFunctions": "Works closely with insulin to regulate blood sugar (glucose) levels",
    "rdaM": "0.035 mg",
    "rdaF": "0.035 mg",
    "plantSources": "Broccoli, barley, grape wine, oats, potatoes, green beans, tomatoes",
    "animalSources": "Beef",
    "deficiencySymptoms": "Impaired glucose tolerance, weight loss, confusion, nerve damage, high cholesterol, diabetes, mood swings, fatigue, infertility"
  },
  {
    "microName": "Molybdenum",
    "microType": "mineral",
    "microFunctions": "Part of some enzymes",
    "rdaM": "0.045 mg",
    "rdaF": "0.045 mg",
    "plantSources": "Black-eyed peas, lima beans, potato, banana, rice",
    "animalSources": "Yogurt, Milk, Beef",
    "deficiencySymptoms": "Weight gain, gum disease or gum and mouth problems, anemia, acne, parasites, allergies"
  },
  {
    "microName": "Selenium",
    "microType": "mineral",
    "microFunctions": "Essential to activity of antioxidant enzymes",
    "rdaM": "0.055 mg",
    "rdaF": "0.055 mg",
    "plantSources": "Brazil nuts, brown rice, sunflower seeds, baked beans, mushrooms, oatmeal,spinach, lentils, cashews, bananas",
    "animalSources": "Fish, Ham, Pork, Beef, Turkey, Chicken, Cottage Cheese(Paneer)",
    "deficiencySymptoms": "Fatigue, lowered thyroid function, mental impairment, reproductive disorders, age spots, cataracts, liver cirrhosis, lowered immune function"
  }
];


const mineralsListEl = document.getElementById('minerals-list');

if(mineralsListEl){
  for(j=0; j<mineralArr.length; j++){
    mineralsListEl.innerHTML += `<li><a onclick="populateMineralInner(mineralArr,${j})" href="#minerals/${mineralArr[j].microName.replace(/\s/g, '')}">${mineralArr[j].microName}</a></li>`;
    mineralRoute(j)
}
}



function populateMineralInner(mineralArr, m){
  var meta = document.createElement('meta');
  meta.setAttribute('name', 'description')
  meta.setAttribute('content', `${mineralArr[m].microName}sources, functions, rda. ${mineralArr[m].microName} is ${mineralArr[m].microFunctions}`);
  document.querySelector('head').appendChild(meta);

const articleSec = document.getElementById("rightSec");

const mineralTemp = `

  <section class="nutrient-content">
  <div class="nutrient-head">
  <h1>${mineralArr[m].microName}</h1>
  <hr>
  </div>
  <article id="nutrient-details">
  <div>
      <h5>Functions</h5>
      <p>${mineralArr[m].microFunctions}</p>
  </div>
  <div>
      <h5>Plant Sources</h5>
      <p>${mineralArr[m].plantSources}</p>
  </div>
  <div>
      <h5>Animal Sources</h5>
      <p>${mineralArr[m].animalSources}</p>
  </div>
  <div>
      <h5>Deficiency Symptoms</h5>
      <p>${mineralArr[m].deficiencySymptoms}</p>
  </div>
  <div>
      <h5>RDA</h5>
      <p>Male: ${mineralArr[m].rdaM}</p>
      <p>Female: ${mineralArr[m].rdaF}</p>
  </div>
  </article>
  </section>
  `;
  articleSec.innerHTML = mineralTemp;
}


function mineralRoute(v){
    if(window.location.hash === `#minerals/${mineralArr[v].microName}`){
        populateMineralInner(mineralArr, v);
        document.querySelector('title').innerText = `${mineralArr[v].microName} - Functions, sources, deficiency symptoms, RDA`;
    }
    
}