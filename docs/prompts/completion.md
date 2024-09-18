---
sidebar_position: 3
---

# Completion

The prompts shown in this page are related to **Completion** prompts created to perform the cell entity annotation task on tables.

## Completion Prompt (no example and no pool)

**Input prompt**:

```
Given a table T, it is possible to identify each of its elements through a pair of indices (i, j), where
i is the row index and j is the column index.
The elements of the table can be associated with a Wikidata ID if they have one.
Given the table
T =

Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

the association between the elements of the table and the Wikidata’s IDs is:
```

**Response obtained by GPT-4 is**:

```
Result =
 (0, 0): Q7158
 (0, 1): Q12197
 (0, 2): Q12348
 (0, 3): Q12198
 (1, 0): Q18286
 (1, 1): Q1204
 (1, 2): Q1867
 (1, 3): Q1849
 (2, 0): Q17050
 (2, 1): Q1348
 (2, 2): Q9245
 (2, 3): Q13357
 (3, 0): Q513
 (3, 1): Q513
 (3, 2): Q1867
 (3, 3): Q1849

The table T can be represented as a list of lists in Python as follows:
T = [['Mont Blanc', '4810
```

## Completion Prompt with example (no pool)

**Input prompt**:

```
Given a table T, it is possible to identify each of its elements through a pair of indices (i, j), where
i is the row index and j is the column index.
The elements of the table can be associated with a Wikidata ID if they have one.
For example, if we had the cell (2, 5) in table T containing the entity ”Milano,” and in Wikidata,
we had the entity ”Q490 Milano,” then through CEA, we associate (2, 5) = Q490
Given the table
T =

Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

the association between the elements of the table and the Wikidata’s IDs is:
```

**Response obtained by GPT-4 is**:

```
Result =
 (1, 1) = Q1216
 (1, 3) = Q1234
 (2, 1) = Q1823
 (2, 3) = Q1819
 (3, 1) = Q8917
 (3, 4) = Q170787
 (4, 1) = Q513
 (4, 3) = Q1819

 # TODO: implement this function
#raise NotImplementedError()
wikidata = {}
for i in range(len(table)):
    for j in range(len(table[i])):
        if table[i][j] != "":
            wikidata[(i+1,j+1)] = cea(table[i][j])
return wikidata
```

## Completion Prompt with pool (no example)

**Input prompt**:

```
Given a table T, it is possible to identify each of its elements through a pair of indices (i, j), where
i is the row index and j is the column index.
The elements of the table can be associated with a Wikidata ID if they have one.
The Wikidata IDs are in a pool P.
Given the table
T =
Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

and the pool
P =
Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas

the association between the elements of the table and the IDs in the pool is:
```

**Response obtained by GPT-4 is**:

```
(0, 0) -> Q583
(0, 1) -> None
(0, 2) -> Q1286
(0, 3) -> Q1262
(1, 0) -> Q1637969
(1, 1) -> None
(1, 2) -> Q686902
(1, 3) -> Q5469
(2, 0) -> Q265406
(2, 1) -> None
(2, 2) -> Q655495
(2, 3) -> Q17009782
(3, 0) -> Q513
(3, 1) -> None
(3, 2) -> Q686902
(3, 3) -> Q686902

The function should return the table with the Wikidata IDs instead of the names of
```

## Completion Prompt with pool and with example

**Input prompt**:

```
Given a table T, it is possible to identify each of its elements through a pair of indices (i, j), where
i is the row index and j is the column index.
The elements of the table can be associated with a Wikidata ID if they have one.
For example, if we had the cell (2, 5) in table T containing the entity ”Milano,” and in pool P, we
had the entity ”Q490 Milano,” then through CEA, we associate (2, 5) –>Q490.
The Wikidata IDs are in a pool P.
Given the table
T =

Mont Blanc,4810,Alps,Graian Alps
K2,8611,Himalayas,Karakoram
Kilimanjaro,5895,Tanzania,East African Mountains
Mount Everest,8848,Himalayas,Himalayas

and the pool
P =

Q513 Everest, Q524 Vesuvio, Q583 Mont Blanc
Q791 Taumatawhakatangihangakōauauotamateapōkaiwhenuakitānatahu, Q1286 Alps, Q1637969 K2
Q1373 Matterhorn, Q18869 Caucasus, Q1451 Pinatubo, Q1484 Mayon Volcano
Q5469 Karakoram, Q17009782 East African Mountain, Q3428 Bungsberg, Q3660 Mount Davis,
Q2353 Topfer, Q265406 Kilimanjaro, Q3309 Pec, Q3375 Zugspitze, Q1262 Graian Alps
Q3388 Grossglockner, Q43105 Mount Elbrus, Q655495 Tanzania, Q3403 Dufourspitze
Q4049 Medvědí vrch, Q4052 Dlouhé stráně, Q686902 Himalayas

the association between the elements of the table and the IDs in the pool is:
Prompt con esempio senza pool:
Given a table T, it is possible to identify each of its elements through a pair of indices (i, j), where
i is the row index and j is the column index.
The elements of the table can be associated with a Wikidata ID if they have one.
```

**Response obtained by GPT-4 is**:

```
(0, 0) = Q583
(0, 1) = None
(0, 2) = Q1286
(0, 3) = Q1262
(1, 0) = Q1637969
(1, 1) = None
(1, 2) = Q686902
(1, 3) = Q5469
(2, 0) = Q265406
(2, 1) = None
(2, 2) = Q655495
(2, 3) = Q17009782
(3, 0) = Q513
(3, 1) = None
(3, 2) = Q686902
(3, 3) = Q686902
```
