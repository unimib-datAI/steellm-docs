---
sidebar_position: 5
---

# Fine-Tuning Prompt

The prompts shown in this page are related to **Request** prompts created to perform the cell entity annotation task on tables.

## Fine-Tuning Prompt for Training

**Prompt**:

```
<s>[INST]
perform the cell entity annotation (cea) task on this table where each row is separated by '|' and each cell is separated by ';' and the first row in position 0 is the header of the table:

col0;col1;col2;col3|Christ Calming the Storm;public domain;Christ Calming the Storm;James Ensor|Christ among the Beggards;public domain;Christ among the Beggards;James Ensor|Christ among the Beggards;public domain;Christ among the Beggards;James Ensor|Christ among the Beggards;public domain;Christ among the Beggards;James Ensor.

use the following pool of entities to annotate the table: Q109468313 [James Ensor];Q158840 [James Ensor];Q85511911 [Christ Calming the Storm];Q85511901 [Christ among the Beggards];Q7257358 [Public Domain];Q20200052 [Public Domain];Q19652 [public domain];Q85511913 [Christ Calming the Storm];Q22246340 [Christ Calming the Storm];Q85511907 [Christ among the Beggards];Q106864532 [James Ensor];Q85511903 [Christ among the Beggards];Q20813938 [Public Domain];

[/INST]

(1,0)=Q85511913 [Christ Calming the Storm];(1,1)=Q19652 [public domain];(1,3)=Q158840 [James Ensor];(2,0)=Q85511907 [Christ among the Beggards];(2,1)=Q19652 [public domain];(2,3)=Q158840 [James Ensor];(3,0)=Q85511903 [Christ among the Beggards];(3,1)=Q19652 [public domain];(3,3)=Q158840 [James Ensor];(4,0)=Q85511901 [Christ among the Beggards];(4,1)=Q19652 [public domain];(4,3)=Q158840 [James Ensor];
</s>
```

## Fine-Tuning Prompt for Test

**Input prompt**:

```
<s>[INST]
perform the cell entity annotation (cea) task on this table where each row is separated by '|' and each cell is separated by ';' and the first row in position 0 is the header of the table:

col0;col1;col2;col3|Christ Calming the Storm;public domain;Christ Calming the Storm;James Ensor|Christ among the Beggards;public domain;Christ among the Beggards;James Ensor|Christ among the Beggards;public domain;Christ among the Beggards;James Ensor|Christ among the Beggards;public domain;Christ among the Beggards;James Ensor.

use the following pool of entities to annotate the table: Q109468313 [James Ensor];Q158840 [James Ensor];Q85511911 [Christ Calming the Storm];Q85511901 [Christ among the Beggards];Q7257358 [Public Domain];Q20200052 [Public Domain];Q19652 [public domain];Q85511913 [Christ Calming the Storm];Q22246340 [Christ Calming the Storm];Q85511907 [Christ among the Beggards];Q106864532 [James Ensor];Q85511903 [Christ among the Beggards];Q20813938 [Public Domain];

[/INST]
```

**Response obtained stEELlm model**:

```
(1,0)=Q85511913 [Christ Calming the Storm];(1,1)=Q19652 [public domain];(1,3)=Q158840 [James Ensor];(2,0)=Q85511907 [Christ among the Beggards];(2,1)=Q19652 [public domain];(2,3)=Q158840 [James Ensor];(3,0)=Q85511903 [Christ among the Beggards];(3,1)=Q19652 [public domain];(3,3)=Q158840 [James Ensor];(4,0)=Q85511901 [Christ among the Beggards];(4,1)=Q19652 [public domain];(4,3)=Q158840 [James Ensor];</s>
```
