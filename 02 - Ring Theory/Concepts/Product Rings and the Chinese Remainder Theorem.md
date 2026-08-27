---
title: Product Rings and the Chinese Remainder Theorem
topic: ring-theory
tags:
  - concept
  - theorem
  - ring-theory
  - product-rings
  - chinese-remainder-theorem
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §11.6, printed pp. 341–342, PDF pp. 353–354"
created: 2026-08-27
---

# Product Rings and the Chinese Remainder Theorem

## Definition

> [!info] Product ring
> For rings $R_1,R_2$, the Cartesian product $R_1\times R_2$ becomes a ring under componentwise addition and multiplication, with identity $(1,1)$.

> [!abstract] Chinese Remainder Theorem
> If ideals $I,J\triangleleft R$ satisfy $I+J=R$, then $I\cap J=IJ$ and
>
> $$
> R/(I\cap J)\cong R/I\times R/J.
> $$

## Intuition

Comaximal ideals describe independent pieces of information. Elements $u\in I$, $v\in J$ with $u+v=1$ act as complementary selectors: modulo the two factors they become $(0,1)$ and $(1,0)$.

## Key Properties

- Ideals of a finite product are products of ideals in its factors.
- Nontrivial product decompositions correspond to nontrivial idempotents $e$, with $e^2=e$ and $e(1-e)=0$.
- If $IJ=0$ as well as $I+J=R$, then $R\cong R/I\times R/J$ directly.
- Without comaximality, a quotient may embed into a product through a compatibility or fiber-product condition rather than equal the full product.

## Examples

> [!example] Integer CRT
> Since $(2)+(3)=\mathbb Z$,
>
> $$
> \mathbb Z/6\mathbb Z\cong\mathbb Z/2\mathbb Z\times\mathbb Z/3\mathbb Z.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The product-ring construction and idempotent criterion are proved in [S1, Ch. 11, §11.6, printed pp. 341–342, PDF pp. 353–354].
- The general ideal-theoretic CRT is independently proved in Exercise R77 from Artin Exercise 6.8.
