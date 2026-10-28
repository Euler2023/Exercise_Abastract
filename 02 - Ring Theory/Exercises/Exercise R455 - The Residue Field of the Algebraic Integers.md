---
title: "Exercise R455: The Residue Field of the Algebraic Integers"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.4, Exercise 8.4.1, printed p. 340, PDF p. 353"
source_refs:
  - "S7/ch-8/sec-4/ex-1"
created: 2026-10-28
---

# Exercise R455: The Residue Field of the Algebraic Integers

## Problem Statement

> [!question] Original Exercise 8.4.1
> (a) Show that there is a natural isomorphism $\overline{\mathbb Z}/\mathfrak p\simeq\overline{\mathbb Z}_{(\mathfrak p)}/\mathfrak p\overline{\mathbb Z}_{(\mathfrak p)}$.
>
> (b) Show that $\overline{\mathbb Z}/\mathfrak p$ is an algebraic closure of $\mathbb Z/p\mathbb Z$: first show every residue is algebraic; then lift each monic polynomial over $\mathbb Z/p\mathbb Z$ to a monic polynomial over $\mathbb Z$ and complete the argument. (A hint for this exercise is at the end of the book.)
>
> (c) Show that $\mathfrak p\overline{\mathbb Z}_{(\mathfrak p)}\cap\mathbb Z=p\mathbb Z$.

## Hints

> [!hint]- Hint 1
> Localization does not change a residue field at a maximal ideal.

> [!hint]- Hint 2
> Reduce the full splitting of a monic integral lift, not just one selected root.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $A=\overline{\mathbb Z}$, the ring of all algebraic integers, and $S=A\setminus\mathfrak p$. Here $\mathfrak p$ is a maximal ideal lying over $p$, so $\mathfrak p\cap\mathbb Z=p\mathbb Z$.
>
> **(a)** The map $A\to S^{-1}A/\mathfrak p S^{-1}A$ has kernel $\mathfrak p$: if $sa\in\mathfrak p$ with $s\notin\mathfrak p$, primality forces $a\in\mathfrak p$. Every fraction $a/s$ has the same residue as an element of $A$, because $s+\mathfrak p$ is invertible in the field $A/\mathfrak p$. Choose $b\in A$ with $sb-1\in\mathfrak p$, so $a/s$ has residue $ab$. The induced map of residue fields is therefore an isomorphism.
>
> **(b)** If $\beta=\alpha+\mathfrak p$ with $\alpha$ integral, choose a monic $f\in\mathbb Z[X]$ annihilating $\alpha$. Its reduction is a nonzero monic polynomial in $\mathbb F_p[X]$ annihilating $\beta$. Thus the residue field $K$ is algebraic over $\mathbb F_p$.
>
> Any monic $g\in\mathbb F_p[X]$ lifts coefficientwise to a monic $f\in\mathbb Z[X]$. All roots of $f$ in $\overline{\mathbb Q}$ are algebraic integers. Factoring $f$ there and reducing all roots shows that $g$ splits in $K[X]$. Embed the algebraic extension $K$ in a fixed algebraic closure of $\mathbb F_p$ using the algebraic embedding-extension theorem. Every algebraic element of that closure is a root of a polynomial over $\mathbb F_p$, all of whose roots are already in the embedded $K$. Hence the embedding is onto the algebraic closure. This proves that $K$ is algebraically closed and algebraic over $\mathbb F_p$.
>
> **(c)** Part (a) identifies the contraction of the localized ideal to $A$ with $\mathfrak p$. Contracting once more to $\mathbb Z$ gives
> $$
> \mathfrak p A_{\mathfrak p}\cap\mathbb Z
> =\mathfrak p\cap\mathbb Z=p\mathbb Z.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 340 / PDF p. 353. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
