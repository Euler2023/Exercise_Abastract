---
title: "Exercise G177: Faithful Five-Point Actions with Orbits Three and Two"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - permutation-actions
  - direct-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.5, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G177: Faithful Five-Point Actions with Orbits Three and Two

## Problem Statement

> [!question] Exercise 11.5
> A group $G$ operates faithfully on a set $S$ of five elements, and there are two orbits, one of order $3$ and one of order $2$. What are the possible groups?
>
> Hint: Map $G$ to a product of symmetric groups.

## Hints

> [!hint]- Hint 1
> Restriction to the two orbits embeds $G$ into $S_3\times S_2$, and both projections are transitive.

> [!hint]- Hint 2
> A transitive subgroup of $S_3$ is $C_3$ or $S_3$. Classify the subdirect products with $C_2$.

## Solution

> [!success]- Solution
> Faithfulness gives an embedding
>
> $$
> G\hookrightarrow S_3\times S_2
> $$
>
> whose two projections are transitive. The second image is $C_2$; the first is either $C_3$ or $S_3$.
>
> If the first image is $C_3$, the two factors have no common nontrivial quotient, so the only subdirect product is $C_3\times C_2\cong C_6$.
>
> If the first image is $S_3$, there are two possibilities. The independent product gives $S_3\times C_2$. The other is the graph of the sign map,
>
> $$
> \{(\sigma,\operatorname{sgn}\sigma):\sigma\in S_3\}\cong S_3.
> $$
>
> All three groups act as required. Therefore
>
> $$
> G\cong C_6,qquad S_3,qquad\text{or}\qquad S_3\times C_2.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- The classification of subdirect products here is the elementary special case of Goursat's lemma.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.5, printed p. 192, PDF p. 204]; independent classification.

