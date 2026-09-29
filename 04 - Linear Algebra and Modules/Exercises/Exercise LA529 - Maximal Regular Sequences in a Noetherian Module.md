---
title: "Exercise LA529: Maximal Regular Sequences in a Noetherian Module"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XXI, Exercise 3, printed p. 864, PDF p. 879"
created: 2026-09-29
---

# Exercise LA529: Maximal Regular Sequences in a Noetherian Module

## Problem Statement

> [!question] Lang, Ch. XXI, Exercise 3
> For exercises 1 through 4 on the Koszul complex, see [No 68], Chapter 8.
>
> Assume $A$ and $M$ Noetherian. Let $I$ be an ideal of $A$. Let $a_1,\ldots,a_k$ be an $M$-regular sequence in $I$. Show that this sequence can be extended to a maximal $M$-regular sequence $a_1,\ldots,a_q$ in $I$, in other words an $M$-regular sequence such that there is no $M$-regular sequence $a_1,\ldots,a_{q+1}$ in $I$.

## Hints

> [!hint]- Hint 1: Track submodules
> Associate to a regular extension $a_1,\ldots,a_j$ the submodule $(a_1,\ldots,a_j)M$.

> [!hint]- Hint 2: Every extension is strict
> The current quotient is nonzero. If adjoining $a_{j+1}$ did not enlarge the submodule, multiplication by $a_{j+1}$ on that quotient would be both zero and injective.

## Solution

> [!success]- Complete independent derivation
> For every regular extension $a_1,\ldots,a_j$ of the given sequence, consider $M_j=(a_1,\ldots,a_j)M$. This family of submodules is nonempty. The ascending chain condition on submodules of $M$ implies that it has a maximal member: otherwise repeated selection of a larger member would produce an infinite strictly ascending chain. Choose an extension $a_1,\ldots,a_q$ representing that member.
>
> Suppose one could adjoin $a_{q+1}\in I$ regularly. Then $Q=M/M_q\ne0$ by the regular-sequence definition, and multiplication by $a_{q+1}$ on $Q$ is injective. Hence $a_{q+1}Q\ne0$, and therefore
>
> $$
> M_q\subsetneq M_q+a_{q+1}M=(a_1,\ldots,a_{q+1})M.
> $$
>
> This is a strictly larger member of the same family, a contradiction. Thus the chosen extension is maximal in the required sense.
>
> No assumption $IM\ne M$ is needed: maximality only forbids extensions whose final quotient remains nonzero. Only the Noetherian property of $M$ is needed for this proof.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Koszul Complexes and Regular Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules]]

## Notes

Statement checked at printed p. 864 / PDF p. 879; the nonzero-final-quotient convention at printed pp. 850–851 / PDF pp. 865–866. This independent proof does not assume equality of lengths of maximal sequences, which is the conclusion of Exercise 4.
