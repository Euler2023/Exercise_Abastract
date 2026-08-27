---
title: Localization and Laurent Polynomials
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - localization
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §§11.5 and 11.7, printed pp. 338–340 and 343–344, PDF pp. 350–352 and 355–356"
created: 2026-08-27
---

# Localization and Laurent Polynomials

## Definition

> [!info] Definition
> If $S\subseteq R$ is multiplicatively closed, the localization $S^{-1}R$ is the ring of fractions $a/s$ with $a\in R$, $s\in S$, modulo the localization equivalence relation. It is universal among homomorphisms from $R$ that send every element of $S$ to a unit.

## Intuition

Localization permits selected denominators while changing the rest of the ring as little as possible. If a selected denominator annihilates an element, that element must disappear after the denominator becomes invertible.

## Key Properties

- Adjoining an inverse of one element $a$ gives $R[x]/(ax-1)$.
- The kernel of $R\to R[a^{-1}]$ consists of elements killed by a power of $a$.
- Inverting $t$ in $F[t]$ gives the Laurent polynomial ring $F[t,t^{-1}]$.
- Inverting $t$ in $F[[t]]$ gives the Laurent series field $F((t))$.
- If $R$ is a domain and $S=R\setminus\{0\}$, then $S^{-1}R$ is the fraction field.

## Examples

> [!example] Product ring
> Localizing $\mathbb R\times\mathbb R$ at $(2,0)$ kills the second factor because $(0,1)(2,0)=0$, leaving $\mathbb R$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The adjoining and fraction constructions are grounded in [S1, Ch. 11, §§11.5 and 11.7, printed pp. 338–340 and 343–344, PDF pp. 350–352 and 355–356].
- The universal formulation and examples are standard reformulations, proved concretely in the linked exercises.
