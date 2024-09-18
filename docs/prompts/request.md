---
sidebar_position: 2
---

# Request

The prompts shown in this page are related to **Request** prompts created to perform the cell entity annotation task on tables.

## Request Prompt (no example and no pool)

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

Given a table T where each cell is identified by the pair (i, j) with i as the row index and j as the
column index, what is the result of performing the task of Cell Entity Annotation for each cell (i, j)
in table T using Wikidata as a Knowledge Graph?
```

**Response obtained by GPT-4 is**:

```
public static void main(String[] args) {
    String[][] table = new String[][]{
            {"Mountain", "Height", "Range", "Region"},
            {"Mount Everest", "8848", "Himalayas", "Himalayas"},
            {"K2", "8611", "Himalayas", "Karakoram"},
            {"Kilimanjaro", "5895", "Tanzania", "East African Mountains"},
            {"Mont Blanc", "4810", "Alps", "Graian Alps"}
    };

// Get the headers
String[] headers = table[0];

// Create a map to store the entities
Map<String, String> entityMap = new HashMap<>();

// Loop through each row and column
for (int i = 1; i < table.length; i++) {
    for (int j = 0; j < headers.length; j++) {
        // Get the cell value
```

## Request Prompt with example (no pool)

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

Given a table T where each cell is identified by the pair (i, j) with i as the row index and j as the
column index, what is the result of performing the task of Cell Entity Annotation for each cell (i, j)
in table T using Wikidata as a Knowledge Graph?
For example, if we had the cell (2, 5) in table T containing the entity ”Milano,” and in Wikidata,
we had the entity ”Q490 Milano,” then through CEA, we associate (2, 5) –>Q490
```

**Response obtained by GPT-4 is**:

```
public static void main(String[] args) throws Exception {
    String input = "src/main/resources/CEA_input.csv";
    String output = "src/main/resources/CEA_output.csv";
    String wikidata = "src/main/resources/wikidata-20210215-truthy-BETA.nt";
    CEA cea = new CEA(input, output, wikidata);
    cea.annotate();
}
}
```

## Request Prompt with pool (no example)

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

P =
Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas

Given a pool P of Wikidata IDs and a table T where each cell is identified by the pair (i, j) with i
as the row index and j as the column index, what is the result of performing the task of Cell Entity
Annotation for each cell (i, j) in table T using the ID pool P?
```

**Response obtained by GPT-4 is**:

```
GENERAZIONE
<|im_end|>
```

## Request Prompt with pool and with example

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

P =
Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas

Given a pool P of Wikidata IDs and a table T where each cell is identified by the pair (i, j) with i
as the row index and j as the column index, what is the result of performing the task of Cell Entity
Annotation for each cell (i, j) in table T using the ID pool P?
For example, if we had the cell (2, 5) in table T containing the entity ”Milano,” and in the pool P,
we had the entity ”Q490 Milano,” then through CEA, we associate (2, 5) –>Q490.
```

**Response obtained by GPT-4 is**:

```
public static void main(String[] args) {
    String[][] T = {{"Mountain", "Height", "Location", "Range"},
            {"Mont Blanc", "4810", "Alps", "Graian Alps"},
            {"K2", "8611", "Himalayas", "Karakoram"},
            {"Kilimanjaro", "5895", "Tanzania", "East African Mountains"},
            {"Mount Everest", "8848", "Himalayas", "Himalayas"}};
    String[] P = {"Q513 Everest", "Q524 Vesuvio", "Q583 Mont Blanc",
            "Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu",
            "Q1286 Alps", "Q1637969 K2",
            "Q1373 Matterhorn", "Q18869 Caucasus",
            "Q1451 Pinat
```
