---
title: Nilpotent and Idempotent Elements
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - nilpotents
  - idempotents
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §11.6 and Exercises 3.9, M.1, printed pp. 341–342, 355, 358, PDF pp. 353–354, 367, 370"
created: 2026-08-27
---

# Nilpotent and Idempotent Elements

## Definition

> [!info] Definitions
> An element $a\in R$ is **nilpotent** if $a^n=0$ for some $n>0$. It is **idempotent** if $a^2=a$. An element $u$ is **unipotent** if $u^m=1$ for some $m>0$ in the usage of Artin Exercise 3.9.

## Intuition

Nilpotents measure infinitesimal or nonreduced structure: they eventually disappear under multiplication. Idempotents act as algebraic projection operators and split a ring into product factors.

## Key Properties

- If $a$ is nilpotent, $1+a$ is a unit by a finite geometric series.
- In characteristic $p$, a nilpotent $a$ makes $1+a$ unipotent through a sufficiently large Frobenius power.
- In a field, the only idempotents are $0$ and $1$.
- A nontrivial idempotent $e$ yields
>
> $$
> R\cong eR\times(1-e)R.
> $$
- A commutative ring in which every element is idempotent is a Boolean ring and has characteristic $2$ when nonzero.

## Examples

> [!example] Dual numbers
> In $F[\varepsilon]/(\varepsilon^2)$, the nonzero residue $\varepsilon$ is nilpotent, so the ring is not reduced and not a product of fields.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The idempotent/product-ring correspondence is grounded in [S1, Ch. 11, §11.6, printed pp. 341–342, PDF pp. 353–354]; nilpotents and Artin's use of “unipotent” occur in Exercise 3.9 on printed p. 355/PDF p. 367.
- The characteristic-two claim is independently derived from Exercise M.1 on printed p. 358/PDF p. 370; the other linked exercise proofs are likewise vault derivations.
