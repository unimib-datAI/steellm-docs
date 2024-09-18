---
sidebar_position: 1
---

# Execution

The prompts shown in this page are related to Execution prompts created to perform the cell entity annotation task on tables.

## Execution Prompt (no example and no candidates)

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

Each element in the table T is identified by the indexes couple (i, j) where i is the row index and j
is the column index.
Perform a Cell Entity Annotation task on the table T using Wikidata as a Knowledge Graph
```

**Response obtained by GPT-4 is**:

```
public static void main(String[] args) throws IOException {
    String table = "Mont Blanc,4810,Alps,Graian Alps\n" +
            "K2,8611,Himalayas,Karakoram\n" +
            "Kilimanjaro,5895,Tanzania,East African Mountains\n" +
            "Mount Everest,8848,Himalayas,Himalayas";
    String[] rows = table.split("\n");
    String[] headers = rows[0].split(",");
    List<List<String>> data = new ArrayList<>();
    for (int i = 1; i < rows.length; i++) {
        String[] row = rows[i].split(",");
        data.add(Arrays.asList(row));
    }
    System.out.println(headers);
    System.out.println(data);

// create a Wikidata object
Wikidata wikidata = new Wikidata();

// get the entity for each cell
List<List<Entity>> entities = new ArrayList<>();
```

## Execution Prompt with example (no candidates)

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

Each element in the table T is identified by the indexes couple (i, j) where i is the row index and j
is the column index.
Perform a Cell Entity Annotation task on the table T using Wikidata as a Knowledge Graph
For example, if we had the cell (2, 5) in table T containing the entity ”Milano,” and in Wikidata,
we had the entity ”Q490 Milano,” then through CEA, we associate (2, 5) –>Q490
```

**Response obtained by GPT-4 is**:

```
GENERAZIONE
 */
    public static void main(String[] args) throws IOException {
        String path = "src/main/resources/table.csv";
        Table table = new Table(path);
        Wikidata wikidata = new Wikidata();
        CellEntityAnnotation cea = new CellEntityAnnotation(table, wikidata);
        cea.annotate();
        System.out.println(table);
    }
}
```

## Execution Prompt with pool (no example)

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

Each element in the table T is identified by the indexes couple (i, j) where i is the row index and j
is the column index.
P =
Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas

In the pool P there are a group of wikidata’s ids. Perform a Cell Entity Annotation task on the
table T using the pool
```

**Response obtained by GPT-4 is**:

```
@Test
public void testCellEntityAnnotation() throws Exception {
    String text = "Mont Blanc is the highest mountain in the Alps. K2 is the second highest mountain in the world. Kilimanjaro is the highest mountain in Africa. Mount Everest is the highest mountain in the world.";
    List<Table> tables = new ArrayList<>();
    Table table = new Table();
    table.setDocId("test");
    table.setId(0);
    table.setCaption("Mountains");
    table.setHeader(Arrays.asList("Name", "Height", "Location", "Range"));
    List<List<String>> rows = new ArrayList<>();
    rows.add(Arrays.asList("Mont Blanc", "4810", "Alps", "Graian Alps"));
    rows.add(Arrays.asList("K2", "8611", "Himalayas", "Karakoram"));
    rows.add(Arrays.asList("Kilimanjaro", "5895", "Tanzania", "East African Mountains
```

## Execution Prompt with pool and with example

**Input prompt**:

```
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

Each element in the table T is identified by the indexes couple (i, j) where i is the row index and j
is the column index.
P =
Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas

In the pool P there are a group of wikidata’s ids.
Perform a Cell Entity Annotation task on the table T using the pool P.
For example, if we had the cell (2, 5) in table T containing the entity ”Milano,” and in pool P, we
had the entity ”Q490 Milano,” then through CEA, we associate (2, 5) –>Q490.
```

**Response obtained by GPT-4 is**:

```
@Test
public void testCellEntityAnnotation() throws Exception {
    String table = "Mont Blanc,4810,Alps,Graian Alps\n" +
            "K2,8611,Himalayas,Karakoram\n" +
            "Kilimanjaro,5895,Tanzania,East African Mountains\n" +
            "Mount Everest,8848,Himalayas,Himalayas";
    String pool = "Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc\n" +
            "Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2\n" +
            "Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano\n" +
            "Q5469 Karakoram, Q17009782 East African Mountain
```
